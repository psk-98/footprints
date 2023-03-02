import { getOrderDetails } from "@/actions/checkout"
import PageWrapper from "@/components/layout/PageWrapper"
import styles from "@/styles/Checkout.module.css"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function Orders() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { slug } = router.query

  useEffect(() => {
    if (slug) dispatch(getOrderDetails(slug))
  }, [slug])
  return (
    <PageWrapper
      title="Orders"
      path={router.asPath}
      desc="This is the orders page of FootPrints a mock online store"
    >
      <div className="contained">
        <div className={styles.checkoutProcess}>
          <div className="header">Order details</div>
          <div>
            Your order has been placed, come back later for details from courier
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
