import { useDispatch, useSelector } from "react-redux"
import PageWrapper from "@/components/layout/PageWrapper"
import { useEffect } from "react"
import { getProducts } from "@/actions/products"
import Hero from "@/components/home/Hero"
import Slider from "@/components/common/productSlider"
import Loader from "@/components/layout/loader"
import { useRouter } from "next/router"

export default function Home() {
  const dispatch = useDispatch()

  const state = useSelector((state) => state)
  const { products, loading } = state.products
  const router = useRouter()

  useEffect(() => {
    dispatch(getProducts("home"))
  }, [])

  const filterWomen = () => {
    let temp = products?.filter((product) => {
      return product.category === "women"
    })
    return temp?.slice(0, 8)
  }
  const filterMen = () => {
    let temp = products?.filter((product) => {
      return product.category === "men"
    })
    return temp?.slice(0, 8)
  }

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <PageWrapper
      key={loading}
      title="Home"
      path={router.asPath}
      desc="This is the home page of FootPrints a mock online store"
    >
      {console.log(process.env.NEXT_PUBLIC_GREET)}
      <Hero />
      <Slider
        header="Shop for women"
        products={filterWomen()}
        link={"/products/women"}
      />
      <Slider
        header="Shop for men"
        products={filterMen()}
        link={"/products/men"}
      />
    </PageWrapper>
  )
}
