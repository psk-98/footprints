"use client"

import { imgVariants, selectorVariants } from "@/animations/product"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import logoPng from "../../../public/Logo.png"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import styles from "./ProductImgs.module.css"

export default function Images({ product }) {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <div className={styles.imgsWrapper}>
      <AnimatePresence mode="wait">
        <MotionDiv
          className={styles.imgWrapper}
          key={currentImg}
          variants={imgVariants}
          initial="dis"
          animate="appear"
          exit="dis"
        >
          <Image
            src={product?.product_images[currentImg].get_image.replace(
              /\s+/,
              ""
            )}
            alt={currentImg}
            width="800"
            height="800"
            placeholder="blur"
            priority
            blurDataURL={`data:${logoPng}`}
          />
        </MotionDiv>
      </AnimatePresence>
      <div className={styles.selectorWrapperSm}>
        {product?.product_images.map((selector, index) => {
          return (
            <MotionDiv
              className={styles.imgSelector}
              key={index}
              initial={false}
              animate={isActive(index, currentImg) ? "active" : "not"}
              variants={selectorVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentImg(index)}
            ></MotionDiv>
          )
        })}
      </div>
      <div className={styles.selectorWrapperLg}>
        {product?.product_images.map((selector, index) => {
          return (
            <MotionDiv
              className={styles.imgSelector}
              key={index}
              onClick={() => setCurrentImg(index)}
              animate={
                isActive(index, currentImg)
                  ? {
                      scale: [1, 0, 1],
                      opacity: 0.4,
                      border: "1px solid rgba(5,5,5,1)",
                    }
                  : {
                      opacity: 1,
                      border: "1px solid rgba(5,5,5,0)",
                    }
              }
              transition={{
                scale: {
                  duration: 0.6,
                },
                opacity: { delay: 0.6 },
                border: { delay: 0.6 },
              }}
            >
              <Image
                src={product?.product_images[index].get_image.replace(
                  /\s+/,
                  ""
                )}
                alt={currentImg}
                width="800"
                height="800"
                priority
                placeholder="blur"
                blurDataURL={`data:image/webp;base64,${product?.product_images[
                  index
                ].get_image.replace(/\s+/, "")}`}
              />
            </MotionDiv>
          )
        })}
      </div>
    </div>
  )
}

const isActive = (i, current) => {
  if (i === current) return true
  return false
}
