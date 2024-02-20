import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "@/animations/nav"
import { containerVariants } from "@/animations/routes"
import { useAppSelector } from "@/store/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  cartIcon,
  emptyCartIcon,
  footprintsLogo,
  searchIcon,
} from "../../../public/svgs"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import styles from "./Nav.module.css"
import Search from "./Search"

export default function NavTop({ toggle, setToggle, isSearch, setIsSearch }) {
  // const [isSearch, setIsSearch] = useState(false)
  // below is for cart icon
  const { cart } = useAppSelector((state) => state)

  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <MotionDiv
      className={styles.navTop}
      variants={navVariants}
      animate={show || toggle || isSearch ? "none" : "transparent"}
    >
      {isSearch ? (
        <Search setIsSearch={setIsSearch} />
      ) : (
        <>
          <MotionDiv
            className={styles.burger}
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setToggle(!toggle)}
          >
            <MotionDiv
              className={styles.line}
              variants={line1Variants}
              animate={toggle ? "open" : "closed"}
            ></MotionDiv>
            <MotionDiv
              className={styles.line2}
              variants={line2Variants}
              animate={toggle ? "open" : "closed"}
            ></MotionDiv>
            <MotionDiv
              className={styles.line3}
              variants={line3Variants}
              animate={toggle ? "open" : "closed"}
            ></MotionDiv>
          </MotionDiv>

          <div className={styles.logo}>
            <Link href="/">{footprintsLogo}</Link>
          </div>

          <div className={styles.topNavList}>
            <div
              className={styles.navItem}
              onClick={() => {
                setIsSearch(!isSearch)
                setToggle(false)
              }}
            >
              {searchIcon}
            </div>
            <Link href="/cart">
              <div className={styles.navItem}>
                {cart.cart.length === 0 ? emptyCartIcon : cartIcon}
              </div>
            </Link>
          </div>
        </>
      )}
    </MotionDiv>
  )
}
