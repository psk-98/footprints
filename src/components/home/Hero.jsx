import styles from "@/styles/Home.module.css"
import { useRouter } from "next/router"

export default function Hero() {
  const router = useRouter()

  return (
    <>
      <div
        className={styles.landing}
        style={{ backgroundImage: `url(/sneakers.webp)` }}
      >
        <div className={`${styles.heroDesc} light`}>
          where style meets comfort
        </div>
        <div
          className={`${styles.shopBtn} light btn`}
          onClick={() => router.push("/products/all")}
        >
          Shop now
        </div>
      </div>
    </>
  )
}
