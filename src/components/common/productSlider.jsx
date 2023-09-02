import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/router"
import { forwardArrow } from "public/svgs"

export default function Slider({ header, products, link }) {
  const router = useRouter()

  return (
    products &&
    products.length !== 0 && (
      <div className={styles.productSlider}>
        <div className={styles.sliderHeader}>
          <p className="header">{header}</p>
          <div
            className={styles.sliderViewAll}
            onClick={() => router.push(link)}
          >
            view all
            {forwardArrow}
          </div>
        </div>
        <div className={styles.slider}>
          {products?.map((product, i) => {
            return (
              <motion.div
                className={styles.sliderCard}
                key={product.id}
                onClick={() => {
                  router.push(`/product/${product.slug}`)
                }}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
              >
                <div className={styles.sliderImg}>
                  <Image
                    src={product.product_images[0].get_image.replace(/\s+/, "")}
                    width={window?.innerWidth * 0.25 || 400}
                    height={window?.innerWidth * 0.25 || 400}
                    placeholder="blur"
                    blurDataURL="/Logo.png"
                    alt={product.name}
                  />
                </div>
                <div className={styles.productName}>{product.name}</div>
                <div
                  className={`${styles.category} lighter`}
                  onClick={() => router.push(`/products/${product.category}`)}
                >
                  {product.category}
                </div>
                <div className={styles.productPrice}>
                  R{product.price.toFixed(2)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  )
}
