"use client"

import Payment from "@/components/Payment/Payment"
import Shipping from "@/components/Shipping/Shipping"
import { useState } from "react"

export default function Checkout() {
  const [isShip, setShip] = useState(true)
  const [isBilling, setBilling] = useState(false)
  const [isPay, setPay] = useState(false)

  return isPay ? (
    <>
      <Payment />
    </>
  ) : (
    <>
      <Shipping
        setPay={setPay}
        setShip={setShip}
        setBilling={setBilling}
        isShip={isShip}
        isBilling={isBilling}
      />
    </>
  )
}
