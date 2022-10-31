import Link from "next/link"
import homeStyles from "../../styles/Home.module.css"
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <div className={homeStyles.landingWrapper}>
      <div
        className={homeStyles.landing}
        style={{ backgroundImage: `url(sneakers.webp)` }}
      >
        <Link href="/products/men">
          <motion.div
            className={`${homeStyles.shopBtn} btn`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            For Him
          </motion.div>
        </Link>
        <Link href="/products/women">
          <motion.div
            className={`${homeStyles.shopBtn} btn`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            For her
          </motion.div>
        </Link>
        <Link href="/products/all">
          <motion.div
            className={`${homeStyles.shopBtn} btn`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop all
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export default Landing
