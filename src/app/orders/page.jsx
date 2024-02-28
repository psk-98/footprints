import styles from "@/components/Payment/Payment.module.css"
import { notFound } from "next/navigation"

async function getOrder(searchParams) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/orders/?order_ref=${searchParams.refCode}`
    )
    cons
    const data = await res.json()
    return data
  } catch (err) {
    notFound()
  }
}

export default async function Orders({ searchParams }) {
  const { order_items } = await getOrder(searchParams)

  return (
    <div className="contained">
      <div className={styles.checkoutProcess}>
        <div className="header">Order Status</div>
        <div className={styles.confirmationText}>
          Your order has been placed, come back later for details from courier
        </div>
        <div className={styles.checkoutDetails}>
          <div className={styles.summaryWrapper}>
            <div className={styles.summaryHeader}>Order summary</div>
            {order_items?.map((product, i) => {
              return (
                <div className={styles.cartItem} key={i}>
                  <div className={styles.name}>{product.item.name}</div>
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
      </div>
    </div>
  )
}

const handlePriceDetails = (product) => {
  if (product.quantity > 1) {
    return (
      <>
        <div className={styles.priceQuantity}>
          {product.quantity} X R{product.item.price.toFixed(2)}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.itemTotalPrice}>
          R{(product.item.price * product.quantity).toFixed(2)}
        </div>
      </>
    )
  }
}
