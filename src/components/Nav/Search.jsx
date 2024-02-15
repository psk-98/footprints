import { loaderVariants, wrapperVariants } from "@/animations/loader"
import { containerVariants } from "@/animations/routes"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styles from "./Nav.module.css"

export default function Search({ setIsSearch }) {
  // const router = useRouter()
  const [maxProducts, setMaxProducts] = useState(3)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(null)
  const [productsCount, setProductsCount] = useState(null)
  const [searchPhase, setPhase] = useState(null)
  const disptach = useDispatch()

  const handleSearch = async (search) => {
    setLoading(true)
    const res = await fetch(
      `https://psk98.pythonanywhere.com/api/products/?page_size=24&sort=-date_added&search=${search}`
    )
    const { results, count } = await res.json()
    setProducts(results)
    setProductsCount(count)
    setLoading(false)
    setPhase(search)
  }

  useEffect(() => {
    if (screen?.width >= 1024) setMaxProducts(6)
    else if (screen?.width >= 768) setMaxProducts(4)
    else setMaxProducts(3)
  }, [screen?.width])

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
            handleSearch(e.target.value)
          }}
        />
        <motion.div
          className={styles.cancel}
          variants={containerVariants}
          animate="visible"
          initial="hidden"
          onClick={() => {
            setIsSearch(false)
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
        {loading ? (
          <motion.div
            className={styles.loaderWrapper}
            variants={wrapperVariants}
            animate="loading"
          >
            <motion.div
              key={1}
              className={styles.loader}
              variants={loaderVariants}
            ></motion.div>

            <motion.div
              key={2}
              className={styles.loader}
              variants={loaderVariants}
            ></motion.div>
          </motion.div>
        ) : (
          <>
            {products &&
              products.slice(0, maxProducts).map((product, i) => {
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
                          blurDataURL="/shoe.png"
                          src={product.product_images[0].get_image.replace(
                            /\s+/,
                            ""
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
            {productsCount > maxProducts && (
              <Link
                href={{
                  pathname: "/products/search",
                  query: { search: searchPhase },
                }}
              >
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
                  onClick={() => setIsSearch(false)}
                >
                  View {productsCount} results
                </motion.div>{" "}
              </Link>
            )}
            {products?.length === 0 && (
              <div className={styles.noResults}>No matches</div>
            )}
          </>
        )}
      </motion.div>
    </>
  )
}
