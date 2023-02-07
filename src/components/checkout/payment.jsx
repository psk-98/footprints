import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { placeOrder } from "../../actions/checkout"
import styles from "../../styles/Checkout.module.css"
import { handleTotalPrice } from "../cart/helpers"
import YocoPayment from "./yocoCheckout"

export default function Payment() {
  const [isSuccess, setSuccess] = useState(false)
  const [token, setToken] = useState()

  const router = useRouter()

  const state = useSelector((state) => state)
  const { cart } = state.cart
  const { deliveryA, orderSucess } = state.checkout

  useEffect(() => {
    if (orderSucess) router.push("/orderconfirmation")
  }, [orderSucess])

  const dispatch = useDispatch()

  useEffect(() => {
    console.log("place")
    const pay_choice = 1
    if (isSuccess) dispatch(placeOrder({ charge_id: token, pay_choice }))
  }, [isSuccess, token])

  const handlePriceDetails = (product) => {
    if (product.quantity > 1) {
      return (
        <>
          <div className={styles.priceQuantity}>
            {product.quantity} X R{product.price.toFixed(2)}
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles.itemTotalPrice}>
            R{(product.price * product.quantity).toFixed(2)}
          </div>
        </>
      )
    }
  }

  return (
    <div className="contained">
      {console.log(token)}
      <div className={styles.checkoutProcess}>
        <div className="header">Payment</div>
        <div className="header">3/3</div>
      </div>
      <div className={styles.checkoutDetails}>
        <div className={styles.deliveryWrapper}>
          <div className={styles.deliveryHeader}>Delivery Info</div>
          <div className={styles.deliveryInfo}>
            {deliveryA?.name} {deliveryA?.surname}
          </div>
          <div className={styles.deliveryInfo}>{deliveryA?.email}</div>
          <div className={styles.deliveryInfo}>{deliveryA?.number}</div>
          <div className={styles.deliveryInfo}>
            {deliveryA?.address} {deliveryA?.city}, {deliveryA?.province}
            {deliveryA?.country}
          </div>
        </div>

        <div className={styles.summaryWrapper}>
          <div className={styles.summaryHeader}>Order summary</div>
          {cart.map((product, i) => {
            return (
              <div className={styles.cartItem} key={i}>
                <div className={styles.name}>{product.name}</div>
                <div>{handlePriceDetails(product)}</div>
              </div>
            )
          })}
          <div className={styles.cartItem}>
            <div>delivery</div>
            <div className={styles.itemTotalPrice}>Included</div>
          </div>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <div>Total</div>
        <div>R {handleTotalPrice(cart).toFixed(2)}</div>
      </div>
      <YocoPayment cart={cart} setSuccess={setSuccess} setToken={setToken} />
    </div>
  )
}
