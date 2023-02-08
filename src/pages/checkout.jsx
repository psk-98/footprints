import Shipping from "@/components/checkout/AddressInfo"
import Payment from "@/components/checkout/payment"
import PageWrapper from "@/components/layout/PageWrapper"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Checkout() {
  const [isShip, setShip] = useState(true)
  const [isBilling, setBilling] = useState(false)
  const [isPay, setPay] = useState(false)
  const router = useRouter()

  return isPay ? (
    <PageWrapper
      key={isPay}
      title="Payment"
      path={router.asPath}
      desc="This is the payment page"
    >
      <Payment />
    </PageWrapper>
  ) : (
    <PageWrapper
      key={isPay}
      title={isShip ? "Delivery Information" : "Billing Information"}
      path={router.asPath}
      desc="This is the page for shipping or billing information"
    >
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
