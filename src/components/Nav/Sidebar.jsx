import { navLinkVariants, sidebarVariants } from "@/animations/nav"
import { newest } from "@/utils/productSortTypes"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./Nav.module.css"

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
            <Link
              href={{ pathname: item.link, query: { sort: newest, page: 1 } }}
              onClick={() => setToggle(!toggle)}
            >
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
]
