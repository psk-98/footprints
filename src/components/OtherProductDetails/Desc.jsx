"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { filterOptionsVariants } from "../../animations/filterbar"
import { MotionSvg } from "../MotionComponents/MotionComponents"
import styles from "./Desc.module.css"

export default function Desc() {
  const [isSizeGuide, setSizeGuide] = useState(false)
  const [isShipping, setShipping] = useState(false)

  return (
    <div className={styles.productDesc}>
      <div className={styles.extraDetails}>
        <div
          className={styles.extraDetailsControls}
          onClick={() => setSizeGuide(!isSizeGuide)}
        >
          <span>size guide</span>
          {upArrow(isSizeGuide)} {downArrow(isSizeGuide)}
        </div>
        <motion.div
          className={styles.extraDetailsText}
          animate={isSizeGuide ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          sizes this Aenean gravida turpis nisi, consequat dictum risus dapibus
          a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas
          ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae
          justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
          consequat tellus id tempus aliquet.
        </motion.div>
      </div>
      <div className={styles.extraDetails}>
        <div
          className={styles.extraDetailsControls}
          onClick={() => setShipping(!isShipping)}
        >
          <span>Shipping and returns</span>
          {upArrow(isShipping)} {downArrow(isShipping)}
        </div>
        <motion.div
          className={styles.extraDetailsText}
          animate={isShipping ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          sizes this Aenean gravida turpis nisi, consequat dictum risus dapibus
          a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas
          ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae
          justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
          consequat tellus id tempus aliquet.
        </motion.div>
      </div>
    </div>
  )
}

const downArrow = (status) => {
  return (
    <MotionSvg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="12"
      fill="none"
      viewBox="0 0 21 12"
      intitial={false}
      animate={status ? "closed" : "open"}
      variants={filterOptionsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="12"
        fill="none"
        viewBox="0 0 21 12"
      >
        <path stroke="#000" d="M20.454 1.254L10.554 11.153"></path>
        <path stroke="#000" d="M11.146 11.254L1.247 1.354"></path>
      </svg>
    </MotionSvg>
  )
}

const upArrow = (status) => {
  return (
    <MotionSvg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="11"
      fill="none"
      viewBox="0 0 21 11"
      initial={false}
      animate={status ? "open" : "closed"}
      variants={filterOptionsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <path stroke="#000" d="M1.247 10.546L11.146 0.647"></path>
      <path stroke="#000" d="M10.554 0.546L20.454 10.446"></path>
    </MotionSvg>
  )
}
