import { placeOrder } from "@/actions/checkout"
import { handleTotalPrice } from "../cart/helpers"

export const yocoInit = (cart, dispatch, setSuccess, setToken) => {
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
        amountInCents: (parseFloat(handleTotalPrice(cart)) * 100).toString(),
        currency: "ZAR",
        callback: (result) => {
          if (result.error) {
            const errorMessage = result.error.message
            alert(`error occured: ${errorMessage}`)
          } else {
            dispatch(placeOrder(result.id))
            setSuccess(true)
            setToken(result.id)

            alert(`card successfully tokenised: ${result.id}`)
          }
        },
      })
    })
  }
}
