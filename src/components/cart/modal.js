import Link from "next/link"
import { btnVariants } from "../../animations/home"
import { motion } from "framer-motion"
import styles from "../../styles/Cart.module.css"
import { close } from "../../public/svgs"

export default function Modal() {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button>{close}</button>
        <Link href="/login">
          <motion.div
            className={styles.authBtn}
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Login
          </motion.div>
        </Link>
        <Link href="/checkout">
          <motion.div
            className={styles.guestBtn}
            variants={btnVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Guest checkout
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
