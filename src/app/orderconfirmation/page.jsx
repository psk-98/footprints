"use client"

import { handleTotalPrice } from "@/components/CartList/helpers"
import styles from "@/components/Payment/Payment.module.css"
import { useAppSelector } from "@/store/hooks"
import Link from "next/link"

export default function OrderConfirmation() {
  const state = useAppSelector((state) => state)
  const { cart } = state.cart
  const { deliveryA } = state.checkout

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
        <div className="header">Thank you for your order</div>
        <div className={styles.confirmationText}>
          a confirmation email has been sent. You can always check your order
          status using the <Link href="/orders">link</Link> provided or under
          orders
        </div>
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
            {deliveryA?.address} {deliveryA?.city}, {deliveryA?.province}{" "}
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
      <Link href="/" className={`${styles.payBtn} btn light`}>
        Continue shopping
      </Link>
    </div>
  )
}
