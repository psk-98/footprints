import Shipping from "@/components/checkout/addressInfo"
import Payment from "@/components/checkout/payment"
import PageWrapper from "@/components/layout/PageWrapper"
import { useState } from "react"

export default function Checkout() {
  const [isShip, setShip] = useState(true)
  const [isBilling, setBilling] = useState(false)
  const [isPay, setPay] = useState(false)

  return isPay ? (
    <PageWrapper key={isPay}>
      <Payment />
    </PageWrapper>
  ) : (
    <PageWrapper key={isPay}>
      <Shipping
        setPay={setPay}
        setShip={setShip}
        setBilling={setBilling}
        isShip={isShip}
        isBilling={isBilling}
      />
    </PageWrapper>
  )
}
