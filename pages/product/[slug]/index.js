import { useDispatch, useSelector } from "react-redux"
import Loader from "../../../components/layout/Layout"

import { wrapper } from "../../../store/store"
import axios from "axios"
import { BASE_URL } from "../../../actions/type"
import Sizes from "../../../components/product/ProductSize"
import Descriptions from "../../../components/product/ProductDesc"
import Images from "../../../components/product/ProductImgs"
import { setProduct } from "../../../reducers/products"
import productStyles from "../../../styles/Product.module.css"
import { addToCart } from "../../../reducers/cart"
import { containerVariants } from "../../../animations/routes"
import { motion } from "framer-motion"

const Product = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const { product, loading, error, selectedSizes } = state.products
  //const { product_stock } = product
  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : (
    <motion.div
      className={productStyles.productWrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Images />
      <div className={productStyles.details}>
        <div className={productStyles.name}>{product?.name}</div>
        <div className={productStyles.priceWrapper}>
          <span className={productStyles.priceCurrency}>R</span>
          <span className={productStyles.price}>{product?.price}</span>
        </div>
        <Sizes />
        <div
          className={`${productStyles.addCartBtn} btn`}
          onClick={() => {
            if (selectedSizes.length > 0)
              dispatch(addToCart({ product, size: selectedSizes[0] }))
          }}
        >
          Add to bag
        </div>
        <Descriptions />
      </div>
    </motion.div>
  )
}

export default Product

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const params = { slug: context.params.slug }
    const res = await axios.get(`${BASE_URL}/product`, { params })

    const { data } = await res
    store.dispatch(setProduct(data))
  }
)
