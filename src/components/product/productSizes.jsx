import { AnimatePresence, motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { sizeSelectorVariants } from "../../animations/product"
import { updateSize } from "../../reducers/products"
import styles from "../../styles/Product.module.css"

export default function Sizes() {
  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { selectedSize, product } = state.products

  const setActive = (sizes, size) => {
    if (sizes.includes(size)) return true
    else return false
  }

  return (
    <div className={styles.productSizes}>
      {product?.product_stock ? (
        product?.product_stock?.map((stock, i) => {
          return (
            <motion.div
              className={styles.sizeOption}
              key={i}
              initial={false}
              animate={selectedSize === stock?.size ? "not" : "active"}
              variants={sizeSelectorVariants}
              onClick={() => dispatch(updateSize(stock.size))}
            >
              {stock?.size}
            </motion.div>
          )
        })
      ) : (
        <>
          <div className={`${styles.sizeOption} ${styles.active}`}>
            no stock
          </div>
        </>
      )}
    </div>
  )
}
