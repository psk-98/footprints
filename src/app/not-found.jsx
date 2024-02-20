import styles from "@/components/Hero/Hero.module.css"
import { newest } from "@/utils/productSortTypes"
import Link from "next/link"

export default async function NotFound() {
  return (
    <section className="notFoundWrapper">
      <h1> Page Not Found</h1>
      <div>
        <Link
          className={`${styles.shopBtn} light btn`}
          href={{ pathname: "/products/all", query: { sort: newest, page: 1 } }}
        >
          Collection
        </Link>
        <Link
          className={`${styles.shopBtn} light btn`}
          href={{ pathname: "/products/men", query: { sort: newest, page: 1 } }}
        >
          Men
        </Link>
        <Link
          className={`${styles.shopBtn} light btn`}
          href={{
            pathname: "/products/women",
            query: { sort: newest, page: 1 },
          }}
        >
          Women
        </Link>
      </div>
    </section>
  )
}
