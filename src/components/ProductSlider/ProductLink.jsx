"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./ProductSlider.module.css"

export default function ProductLink({ slug, key, children }) {
  const pathname = usePathname()

  return (
    <Link
      href={pathname.includes("product") ? slug : "product/" + slug}
      className={styles.sliderCard}
      key={key}
    >
      {children}
    </Link>
  )
}
