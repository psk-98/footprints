import Alert from "@/components/common/alert"
import { clearSize } from "@/reducers/products"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../../actions/products"
import Slider from "../../../components/common/productSlider"
import Loader from "../../../components/layout/loader"
import PageWrapper from "../../../components/layout/PageWrapper"
import Desc from "../../../components/product/desc"
import Images from "../../../components/product/productImgs"
import Sizes from "../../../components/product/productSizes"
import { addToCart, clearCart } from "../../../reducers/cart"
import { updateSlug } from "../../../reducers/params"
import styles from "../../../styles/Product.module.css"

export default function Product() {
  const [isAlert, setAlert] = useState(false)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const { slug } = router.query
  const { loading, error, product, selectedDesc, selectedSize } = state.products

  useEffect(() => {
    dispatch(getProduct(slug))
    dispatch(updateSlug(slug))
  }, [slug])

  useEffect(() => {
    dispatch(clearSize())
  }, [])

  return loading ? (
    <Loader loading={loading} />
  ) : error ? (
    <PageWrapper
      key={loading + router.route + slug}
      title="Product Error"
      path={router.asPath}
      desc="This is the product view page of FootPrints a mock online store"
    >
      <div className="error">{error.message}</div>
    </PageWrapper>
  ) : (
    <PageWrapper
      key={loading}
      title={product?.name}
      path={router.asPath}
      desc="This is the product view of FootPrints a mock online store"
    >
      {isAlert && <Alert msg={"Select a size"} isAlert={isAlert} />}
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
                    if (selectedSize)
                      dispatch(addToCart({ product, size: selectedSize }))
                    else {
                      setAlert(true)
                      setTimeout(() => {
                        setAlert(false)
                      }, 3000)
                    }
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
