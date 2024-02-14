import Image from "next/image"
import Link from "next/link"
import backImg from "../../../public/sneakers.webp"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.heroBackground}>
          <Image
            src={backImg}
            fill
            sizes="100vw"
            placeholder="blur"
            alt="sneaker picture"
            priority
          />
        </div>
        <div className={`${styles.heroDesc} light`}>
          where style meets comfort
        </div>
        <Link href="/products/all" className={`${styles.shopBtn} light btn`}>
          Shop now
        </Link>
      </div>
    </>
  )
}
