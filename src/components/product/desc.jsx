import styles from "../../styles/Product.module.css"
import { motion } from "framer-motion"
import { filterOptionsVariants } from "../../animations/filterbar"
import { useState } from "react"
import { downArrow, upArrow } from "../products/helpers"

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
