import { containerVariants } from "@/animations/routes"
import Filterbar from "@/components/FilterBar/Filterbar"
import { MotionDiv } from "@/components/MotionComponents/MotionComponents"
import ProductCards from "@/components/Products/Products"
import styles from "@/components/Products/Products.module.css"
import Paginator from "@/components/ProductsPaginator/Paginator"
import axios from "axios"

export default async function Product(props) {
  const products = await getProducts(props)
  const { count, results, previous, next } = await products

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
        <Filterbar count={count} />
        <ProductCards products={results} />
        <Paginator next={next} previous={previous} props={props} />
      </div>
    </>
  )
}

async function getProducts({ params, searchParams }) {
  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/products`

  console.log(searchParams)

  let _params = { page_size: 12, ...searchParams }

  if ((params.slug !== "all") & (params.slug !== "search")) {
    _params.category = params.slug
    console.log("cat")

    try {
      const res = await axios.get(url, { params: _params })
      const { data } = res
      return data
    } catch (err) {
      console.log(err)
    }
  } else {
    const res = await axios.get(url, { params: _params })
    console.log("all n search")

    const { data } = res
    return data
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params

  return {
    title: slug == "all" ? "Shop collection" : "Shop " + slug,
  }
}
