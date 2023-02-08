import PageWrapper from "@/components/layout/PageWrapper"
import CartList from "@/components/cart/CartList"
import { useState } from "react"

export default function Cart() {
  const [showModal, setShowModal] = useState(false)

  return (
    <PageWrapper
      key={showModal}
      title="Cart"
      path={router.asPath}
      desc="This is page to view item in your cart for FootPrints a mock online store"
    >
      <CartList setShowModal={setShowModal} />
    </PageWrapper>
  )
}
