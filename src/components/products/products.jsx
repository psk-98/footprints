import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import styles from "../../styles/Products.module.css"
import { motion } from "framer-motion"

export default function ProductCards() {
  const state = useSelector((state) => state)
  const { products } = state.products

  return (
    <div className={styles.wrapper}>
      <div className={styles.productCards}>
        {products?.map((product, i) => {
          return (
            <motion.div
              className={styles.productCard}
              key={product.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + 0.15 * i,
                },
              }}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
            >
              <Link href={`/product/${product.slug}`}>
                <div className={styles.imgWrapper}>
                  <Image
                    width={800}
                    height={800}
                    src={product.product_images[0].get_image.replace(/\s+/, "")}
                    alt={product.name}
                    placeholder="blur"
                    blurDataURL="/yoco.webp"
                  />
                </div>
                <div className={styles.name}>{product.name}</div>
                <div className={`lighter ${styles.cat}`}>
                  {product.category}
                </div>
                <div className={styles.price}>R {product.price.toFixed(2)}</div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}