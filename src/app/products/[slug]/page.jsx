import { containerVariants } from "@/animations/routes"
import { MotionDiv } from "@/components/MotionComponents/MotionComponents"
import ProductCards from "@/components/Products/Products"
import styles from "@/components/Products/Products.module.css"
import { sortFilter } from "../../../../public/svgs"

async function getProducts({ params, searchParams }) {
  if (params.slug !== "all") {
    const res = await fetch(
      `https://psk98.pythonanywhere.com/api/products/?page_szie=24&category=${params?.slug}`
    )
    const data = await res.json()
    return data
  } else {
    const res = await fetch(
      `https://psk98.pythonanywhere.com/api/products/?page_szie=24`
    )
    const data = await res.json()
    return data
  }
}

export default async function Product(props) {
  const products = await getProducts(props)

  const { count, results } = await products
  console.log(await products)

  return (
    <>
      <div className="contained">
        <MotionDiv
          className={`${styles.header} header`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {props.params.slug}
        </MotionDiv>
        <MotionDiv
          className={styles.settingsWrapper}
          variants={containerVariants}
        >
          <div
            className={styles.sortFilter}
            // onClick={() => setPanel(true)}
          >
            {sortFilter}
            filter & sort
          </div>
          <div className={styles.numShow}>{count} products</div>
        </MotionDiv>
        <ProductCards products={results} />
        {/* <Paginator /> */}
      </div>
    </>
  )
}
