import Head from "next/head"

import { useDispatch, useSelector } from "react-redux"
import PageWrapper from "@/components/layout/PageWrapper"
import { useEffect, useState } from "react"
import { getProducts } from "@/actions/products"
import Hero from "@/components/home/Hero"
import Slider from "@/components/common/productSlider"
import Loader from "@/components/layout/loader"

export default function Home() {
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(true)

  const state = useSelector((state) => state)
  const { products, loading } = state.products

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
    <PageWrapper key={loading}>
      <Hero />
      <Slider
        header="Shop for her"
        products={filterWomen()}
        link={"/products/women"}
      />
      <Slider
        header="Shop for him"
        products={filterMen()}
        link={"/products/men"}
      />
    </PageWrapper>
  )
}
