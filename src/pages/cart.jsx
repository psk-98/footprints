import PageWrapper from "@/components/layout/PageWrapper"
import CartList from "@/components/cart/CartList"
import { useState } from "react"

export default function Cart() {
  const [showModal, setShowModal] = useState(false)

  return (
    <PageWrapper key={showModal}>
      <CartList setShowModal={setShowModal} />
    </PageWrapper>
  )
}
