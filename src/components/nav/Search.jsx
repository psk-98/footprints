import styles from "@/styles/Nav.module.css"
import loaderStyles from "@/styles/Loader.module.css"
import {
  clearSProducts,
  updateNewSearch,
  updateSearch,
} from "@/reducers/products"
import { useDispatch, useSelector } from "react-redux"
import { getSearchedProducts } from "@/actions/products"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import { containerVariants } from "@/animations/routes"
import { loaderVariants, wrapperVariants } from "@/animations/loader"
import { useEffect, useState } from "react"

export default function Search({ setIsSearch }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [maxProducts, setMaxProducts] = useState(3)

  const disptach = useDispatch()

  const state = useSelector((state) => state)
  const { sProducts, sLoading, sNumProducts } = state.products

  useEffect(() => {
    if (screen.width >= 1024) setMaxProducts(6)
    else if (screen.width >= 768) setMaxProducts(4)
    else setMaxProducts(3)
  }, [screen.width])

  return (
    <>
      <div className={styles.searchBar}>
        <motion.input
          variants={containerVariants}
          animate="visible"
          initial="hidden"
          type="text"
          required
          placeholder="What are you looking for?"
          onChange={(e) => {
            if (e.target.value.length === 0) console.log("Empty")
            disptach(updateSearch(e.target.value))
            disptach(getSearchedProducts())
          }}
        />
        <motion.div
          className={styles.cancel}
          variants={containerVariants}
          animate="visible"
          initial="hidden"
          onClick={() => {
            setIsSearch(false)
            disptach(clearSProducts())
          }}
        >
          cancel
        </motion.div>
      </div>
      <motion.div
        className={styles.searchResults}
        initial={{ height: 0 }}
        animate={{ height: "fit-content" }}
      >
        {sLoading ? (
          <motion.div
            className={loaderStyles.loaderWrapper}
            variants={wrapperVariants}
            animate="loading"
          >
            <motion.div
              key={1}
              className={loaderStyles.loader}
              variants={loaderVariants}
            ></motion.div>
            <motion.div
              key={2}
              className={loaderStyles.loader}
              variants={loaderVariants}
            ></motion.div>
            <motion.div
              key={3}
              className={loaderStyles.loader}
              variants={loaderVariants}
            ></motion.div>
            <motion.div
              key={4}
              className={loaderStyles.loader}
              variants={loaderVariants}
            ></motion.div>
          </motion.div>
        ) : (
          <>
            {sProducts &&
              sProducts.slice(0, maxProducts).map((product, i) => {
                return (
                  <motion.div
                    className={styles.searchResult}
                    key={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 1 + 0.15 * i,
                      },
                    }}
                    whileHover={{ scale: 1.05, opacity: 0.9 }}
                    onClick={() => {
                      setIsSearch(false)
                    }}
                  >
                    <Link href={`/product/${product.slug}`}>
                      <div className={styles.imgWrapper}>
                        <Image
                          width="800"
                          height="800"
                          placeholder="blur"
                          blurDataURL="/Logo.png"
                          src={product.product_images[0].get_image.replace(
                            /\s+/,
                            "",
                          )}
                          alt={product.name}
                        />
                      </div>
                      <div className={styles.productDetails}>
                        <p>{product.name}</p>
                        <p>R {product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            {sNumProducts > maxProducts && (
              <motion.div
                className={`${styles.viewRes} light`}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1 + 0.15 * (maxProducts + 1),
                  },
                }}
                onClick={() => {
                  disptach(updateNewSearch(true))
                  setIsSearch(false)
                  router.push("/products/search")
                }}
              >
                View {sNumProducts} results
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </>
  )
}
