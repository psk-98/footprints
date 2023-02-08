import { useAnimation, useScroll } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "../../animations/nav"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import NavTop from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const { scrollYProgress } = useScroll()

  const [show, setShow] = useState(scrollYProgress)
  const [lastScrollY, setLastScrollY] = useState(0)

  const router = useRouter()

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
        navControls.start(navVariants.transparent)
      } else {
        // if scroll up show the navbar
        setShow(true)
        navControls.start(navVariants.none)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (isSearch) {
      setShow(true)
      navControls.start(navVariants.none)
    }
  }, [isSearch])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const navControls = useAnimation()
  const line1Controls = useAnimation()
  const line2Controls = useAnimation()
  const line3Controls = useAnimation()

  const handleBurger = () => {
    setToggle(!toggle)
    if (!toggle) {
      line1Controls.start(line1Variants.open)
      line2Controls.start(line2Variants.open)
      line3Controls.start(line3Variants.open)
    } else {
      line1Controls.start(line1Variants.closed)
      line2Controls.start(line2Variants.closed)
      line3Controls.start(line3Variants.closed)
    }
  }

  return (
    <>
      <NavTop
        show={show}
        toggle={toggle}
        setToggle={setToggle}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <Sidebar handleBurger={handleBurger} toggle={toggle} />
    </>
  )
}
