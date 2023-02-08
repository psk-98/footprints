import styles from "../../styles/Nav.module.css"
import { motion } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "../../animations/nav"
import Link from "next/link"
import { useRouter } from "next/router"
import Search from "./search"
import { useSelector } from "react-redux"
import {
  searchIcon,
  emptyCartIcon,
  cartIcon,
  footprintsLogo,
} from "public/svgs"
import { containerVariants } from "@/animations/routes"

export default function NavTop({
  show,
  toggle,
  setToggle,
  isSearch,
  setIsSearch,
}) {
  // const [isSearch, setIsSearch] = useState(false)
  const router = useRouter()
  const state = useSelector((state) => state)

  return (
    <motion.div
      className={styles.navTop}
      //style={{ display: router.route === "/checkout" ? "none" : "flex" }}
      variants={navVariants}
      animate={show ? "none" : "transparent"}
    >
      {isSearch ? (
        <Search setIsSearch={setIsSearch} />
      ) : (
        <>
          <motion.div
            className={styles.burger}
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setToggle(!toggle)}
          >
            <motion.div
              className={styles.line}
              variants={line1Variants}
              animate={toggle ? "open" : "closed"}
            ></motion.div>
            <motion.div
              className={styles.line2}
              variants={line2Variants}
              animate={toggle ? "open" : "closed"}
            ></motion.div>
            <motion.div
              className={styles.line3}
              variants={line3Variants}
              animate={toggle ? "open" : "closed"}
            ></motion.div>
          </motion.div>

          <div className={styles.logo}>
            <Link href="/">{footprintsLogo}</Link>
          </div>

          <div className={styles.topNavList}>
            <div
              className={styles.navItem}
              onClick={() => setIsSearch(!isSearch)}
            >
              {searchIcon}
            </div>
            <Link href="/cart">
              <div className={styles.navItem}>
                {state.cart.cart.length === 0 ? emptyCartIcon : cartIcon}
              </div>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  )
}
