import { placeOrder } from "@/actions/checkout"
import { clearCart } from "@/reducers/cart"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { handleTotalPrice } from "../CartList/helpers"
import styles from "./Payment.module.css"
import YocoPayment from "./YocoCheckout"

export default function Payment() {
  const [isSuccess, setSuccess] = useState(false)
  const [token, setToken] = useState()

  const router = useRouter()
  const dispatch = useAppDispatch()

  const { cart } = useAppSelector((state) => state.cart)
  const { deliveryA, orderSucess } = useAppSelector((state) => state.checkout)

  useEffect(() => {
    if (orderSucess) {
      dispatch(clearCart())
      router.push("/orderconfirmation")
    }
  }, [orderSucess])

  useEffect(() => {
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
