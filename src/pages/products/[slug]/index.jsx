import { getProducts } from "@/actions/products"
import { containerVariants } from "@/animations/routes"
import Loader from "@/components/layout/loader"
import PageWrapper from "@/components/layout/PageWrapper"
import Filterbar from "@/components/products/filterbar"
import Paginator from "@/components/products/paginator"
import ProductCards from "@/components/products/products"
import { updateSlug } from "@/reducers/params"
import { clearSProducts, updateNewSearch } from "@/reducers/products"
import styles from "@/styles/Products.module.css"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { sortFilter } from "public/svgs"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Products() {
  const router = useRouter()
  const { slug } = router.query

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [panelStatus, setPanel] = useState(false)
  const { loading, error, products, numProducts, search, newSearch } =
    state.products
  const { sort } = state.params

  useEffect(() => {
    dispatch(updateSlug(slug))
    if (slug === "search" && newSearch) {
      dispatch(getProducts(true))
      dispatch(clearSProducts())
      dispatch(updateNewSearch(false))
    } else if (slug === "men" || slug == "women" || slug === "all")
      dispatch(getProducts())
  }, [slug, newSearch, search])

  return loading ? (
    <Loader loading={loading} />
  ) : error ? (
    <PageWrapper
      key={loading + router.route + slug}
      title="Products Error"
      path={router.asPath}
      desc="This is the products view page of FootPrints a mock online store"
    >
      <div className="error">{error.message}</div>
    </PageWrapper>
  ) : (
    <PageWrapper
      key={loading + router.route + slug}
      title="Products"
      path={router.asPath}
      desc="This is the products view page of FootPrints a mock online store"
    >
      <Filterbar sort={sort} panelStatus={panelStatus} setPanel={setPanel} />
      <div
        className="contained"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`${styles.header} header`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {slug}
        </motion.div>
        <motion.div
          className={styles.settingsWrapper}
          variants={containerVariants}
        >
          <div className={styles.sortFilter} onClick={() => setPanel(true)}>
            {sortFilter}
            filter & sort
          </div>
          <div className={styles.numShow}>{numProducts} products</div>
        </motion.div>
        <ProductCards products={products} />
        <Paginator />
      </div>
    </PageWrapper>
  )
}
