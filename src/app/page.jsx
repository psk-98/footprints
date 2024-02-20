import Hero from "@/components/Hero/Hero"
import Slider from "@/components/ProductSlider/ProductSlider"

export const metadata = {
  title: "Home",
}

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/?page_size=24&sort=-date_added`
  )
  const data = await res.json()
  return data.results
}

export default async function Home() {
  const products = await getProducts()
  // console.log(await getProducts())
  const filterWomen = () => {
    let temp = products?.filter((product) => {
      return product.category === "women"
    })
    return temp?.slice(0, 8)
  }
  const filterMen = () => {
    let _temp = products?.filter((product) => {
      return product.category === "men"
    })
    return _temp?.slice(0, 8)
  }

  return (
    <>
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
    </>
  )
}
