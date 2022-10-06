import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import "../../styles/nav.css"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navLinkVariants,
  sidebarVariants,
  ulVariants,
} from "../../animations/nav"
import { useDispatch } from "react-redux"
import { getProducts } from "../../actions/products"

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  const line1Controls = useAnimation()
  const line2Controls = useAnimation()
  const line3Controls = useAnimation()

  const dispatch = useDispatch()

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
      <div className="nav-top">
        <div className="burger" onClick={() => handleBurger()}>
          <motion.div
            className="line line-1"
            variants={line1Variants}
            animate={line1Controls}
          ></motion.div>
          <motion.div
            className="line line-2"
            variants={line2Variants}
            animate={line2Controls}
          ></motion.div>
          <motion.div
            className="line line-3"
            variants={line3Variants}
            animate={line3Controls}
          ></motion.div>
        </div>
        <div className="logo">FootPrints</div>
        <div className="nav-list">
          <motion.div
            className="nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21"
                width="21"
                viewBox="0 0 48 48"
              >
                <path d="m39.55 41.1-13-12.95q-1.5 1.3-3.475 2.025-1.975.725-4.125.725-5.1 0-8.625-3.525Q6.8 23.85 6.8 18.8q0-5 3.525-8.525Q13.85 6.75 18.9 6.75q5.05 0 8.575 3.525Q31 13.8 31 18.8q0 2.1-.725 4.1-.725 2-2.075 3.6l13 12.95Zm-20.6-12.45q4.05 0 6.9-2.875Q28.7 22.9 28.7 18.8t-2.85-6.95Q23 9 18.95 9q-4.15 0-7 2.85Q9.1 14.7 9.1 18.8t2.85 6.975q2.85 2.875 7 2.875Z" />
              </svg>
            </a>
          </motion.div>
          <motion.div
            className="nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21"
                width="21"
                viewBox="0 0 48 48"
                fill="#000"
              >
                <path d="M9 43V13h7.85v-.85q0-3 2.075-5.075T24 5q3 0 5.075 2.075t2.075 5.075V13H39v30Zm10.15-30.85V13h9.7v-.85q0-2.05-1.4-3.475Q26.05 7.25 24 7.25q-2.05 0-3.45 1.425-1.4 1.425-1.4 3.475Zm-7.9 28.6h25.5v-25.5h-5.6v6h-2.3v-6h-9.7v6h-2.3v-6h-5.6Zm0 0v-25.5Z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="sidebar"
        initial={false}
        animate={toggle ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.ul
          className="nav-list"
          variants={ulVariants}
          animate={toggle ? "open" : "closed"}
        >
          <motion.li
            className="nav-item"
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            For Him
          </motion.li>
          <motion.li
            className="nav-item"
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            For Her
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  )
}

export default Nav
