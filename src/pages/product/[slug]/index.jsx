import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../../actions/products"
import Slider from "../../../components/common/productSlider"
import Loader from "../../../components/layout/loader"
import Desc from "../../../components/product/desc"
import Images from "../../../components/product/productImgs"
import Sizes from "../../../components/product/productSizes"
import styles from "../../../styles/Product.module.css"
import { updateSlug } from "../../../reducers/params"
import { addToCart, clearCart } from "../../../reducers/cart"
//import { motion } from "framer-motion"
import PageWrapper from "../../../components/layout/PageWrapper"
export default function Product() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const { slug } = router.query
  const { loading, error, product, selectedDesc, selectedSize } = state.products

  useEffect(() => {
    dispatch(getProduct(slug))
    dispatch(updateSlug(slug))
  }, [slug])

  return loading ? (
    <Loader loading={loading} />
  ) : error ? (
    <div className="error-msg">{error?.message}!</div>
  ) : (
    <PageWrapper key={loading}>
      <div className="contained">
        <div className={styles.productCard}>
          <Images product={product} />
          <div className={styles.details}>
            <div className={styles.name}>{product?.name}</div>
            <div
              className={`${styles.category} lighter`}
              onClick={() => router.push(`/products/${product?.category}`)}
            >
              {product?.category}
            </div>
            <div className={styles.price}>R {product?.price}</div>
            {product?.product_stock.length === 0 ? (
              <div className={`${styles.addCart} btn`}>Sold out</div>
            ) : (
              <>
                <Sizes />
                <div
                  className={`${styles.addCart} btn`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    dispatch(addToCart({ product, size: selectedSize }))
                  }}
                >
                  Add to bag
                </div>
                <div
                  className={`${styles.buyNow} btn`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    dispatch(clearCart())
                    dispatch(addToCart({ product, size: selectedSize }))
                    router.push("/checkout")
                  }}
                >
                  Buy now
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.productDesc}>{product?.description}</div>
        <Desc selected={selectedDesc} product={product} />
      </div>

      <Slider
        header="You May Also Like"
        products={product?.similar.slice(0, 8)}
        loading={loading}
      />
    </PageWrapper>
  )
}
