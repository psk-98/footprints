import styles from "../../styles/Nav.module.css"
import { motion } from "framer-motion"
import { navLinkVariants, sidebarVariants } from "../../animations/nav"
import Link from "next/link"

export default function SideBar({ setToggle, toggle }) {
  return (
    <motion.div
      className={styles.sideBar}
      variants={sidebarVariants}
      initial={false}
      animate={toggle ? "open" : "closed"}
    >
      {navItems.map((item, index) => {
        return (
          <motion.div
            className={styles.sideItem}
            key={index}
            variants={navLinkVariants}
          >
            <Link href={item.link} onClick={() => setToggle(!toggle)}>
              {item.name}
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

const navItems = [
  {
    name: "Collection",
    link: "/products/all",
  },
  {
    name: "Shop Women",
    link: "/products/women",
  },
  {
    name: "Shop Men",
    link: "/products/men",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
]
