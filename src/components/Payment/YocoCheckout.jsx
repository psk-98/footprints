import { useEffect } from "react"
import { yocoLogo } from "../../../public/svgs"
import { handleTotalPrice } from "../CartList/helpers"
import styles from "./Payment.module.css"

export default function YocoPayment({ cart, setSuccess, setToken }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const yoco = new window.YocoSDK({
        publicKey: process.env.NEXT_PUBLIC_YOCO_PUBLIC_KEY,
      })
      const checkoutButton = document.querySelector("#checkout-button")
      checkoutButton.addEventListener("click", () => {
        yoco.showPopup({
          amountInCents: String(handleTotalPrice(cart)).replace(".", ""),
          currency: "ZAR",
          name: "For card number use 4111 1111 1111 1111, 12/25 for date and 123 for cvv",
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
