"use client"

import { useState } from "react"
import { sizeSelectorVariants } from "../../animations/product"
import BuyCartButtons from "../BuyCartButtons/BuyCartButtons"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import styles from "./SizeSelector.module.css"

export default function SizeSelector({ product }) {
  const [selectedSize, setSelectedSize] = useState(null)
  return (
    <>
      <div className={styles.productSizes}>
        {product?.product_stock !== 0 ? (
          product?.product_stock?.map((stock, i) => {
            return (
              <MotionDiv
                className={styles.sizeOption}
                key={i}
                initial={false}
                animate={selectedSize === stock?.size ? "not" : "active"}
                variants={sizeSelectorVariants}
                onClick={() => setSelectedSize(stock.size)}
              >
                {stock?.size}
              </MotionDiv>
            )
          })
        ) : (
          <>
            <div className={`${styles.sizeOption} ${styles.active}`}>
              no stock
            </div>
          </>
        )}
      </div>
      <BuyCartButtons product={product} selectedSize={selectedSize} />
    </>
  )
}
