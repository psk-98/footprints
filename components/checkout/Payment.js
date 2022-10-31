import checkoutStyles from "../../styles/Checkout.module.css"
import { CardElement, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
const Payment = () => {
  return (
    <>
      <div className={checkoutStyles.paymentDesc}>
        Use 4242 4242 4242 4242 for card number, any future date and any number
        for zipcode
      </div>
      <div className={checkoutStyles.paymentWrapper}>
        <Elements
          stripe={loadStripe(
            "pk_test_51LXAGyHLXSuXXRsqYZiKwRwPedjADd0meHrXwVRyJbiuAyvYl0BRwB9GTLLbRqD0Y2TulmIh4Yh1SvqodQWrbsLo00gNNrQjjM"
          )}
        >
          <form>
            <div className={checkoutStyles.card}>
              <div className={checkoutStyles.cardText}>
                <CardElement />
              </div>
              <div>
                <button>Pay</button>
              </div>
            </div>
          </form>
        </Elements>
      </div>
    </>
  )
}

export default Payment
