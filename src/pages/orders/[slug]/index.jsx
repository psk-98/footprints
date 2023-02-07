import { getOrderDetails } from "@/actions/checkout"
import PageWrapper from "@/components/layout/PageWrapper"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "@/styles/Checkout.module.css"

export default function Orders() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const { slug } = router.query

  useEffect(() => {
    if (slug) dispatch(getOrderDetails(slug))
  }, [slug])
  return (
    <PageWrapper>
      {console.log(router.query)}

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
