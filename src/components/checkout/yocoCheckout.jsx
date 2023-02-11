import styles from "@/styles/Checkout.module.css"
import { yocoLogo } from "public/svgs"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { handleTotalPrice } from "../cart/helpers"
import { placeOrder } from "@/actions/checkout"

export default function YocoPayment({ cart, setSuccess, setToken }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const yoco = new window.YocoSDK({
        publicKey: "pk_test_ed3c54a6gOol69qa7f45",
      })
      const checkoutButton = document.querySelector("#checkout-button")
      checkoutButton.addEventListener("click", () => {
        yoco.showPopup({
          amountInCents: String(handleTotalPrice(cart)).replace(".", ""),
          currency: "ZAR",
          callback: (result) => {
            if (result.error) {
              const errorMessage = result.error.message
              alert(`error occured: ${errorMessage}`)
            } else {
              console.log(result)
              setSuccess(true)
              setToken(result.id)
            }
          },
        })
      })
    }
  }, [])

  return (
    <>
      <div className={`${styles.payBtn} btn light`} id="checkout-button">
        Payment with Yoco
      </div>
      <div className={`${styles.secure} lighter`}>secured by {yocoLogo}</div>
    </>
  )
}
