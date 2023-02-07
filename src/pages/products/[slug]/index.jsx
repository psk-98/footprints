import styles from "../../../styles/Products.module.css"
import PageWrapper from "@/components/layout/PageWrapper"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ProductCards from "@/components/products/products"
import Paginator from "@/components/products/paginator"
import Filterbar from "@/components/products/filterbar"
import { getProducts } from "@/actions/products"
import { updateSlug } from "@/reducers/params"
import { clearSProducts } from "@/reducers/products"
import { sortFilter } from "public/svgs"
import Loader from "@/components/layout/Loader"
import { containerVariants } from "@/animations/routes"
import { motion } from "framer-motion"

export default function Products() {
  const router = useRouter()
  const { slug } = router.query

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [panelStatus, setPanel] = useState(false)
  const { loading, error, products, numProducts, search } = state.products
  const { sort } = state.params

  useEffect(() => {
    dispatch(updateSlug(slug))
    if (slug === "search") {
      dispatch(getProducts(true))
      dispatch(clearSProducts())
    } else dispatch(getProducts())
  }, [slug])

  return loading ? (
    <Loader loading={loading} />
  ) : error ? (
    <>{error?.message}</>
  ) : (
    <PageWrapper key={loading + router.route + slug}>
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
