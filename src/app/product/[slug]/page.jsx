import Images from "@/components/ProductImages/ProductImgs"

async function getProduct({ slug }) {
  const res = await fetch(
    `https://psk98.pythonanywhere.com/api/product/?slug=${slug}`
  )
  const data = await res.json()

  return data
}

export default async function Product({ params }) {
  const product = await getProduct(params)
  console.log(await product)
  return (
    <div className="contained">
      <Images product={product} />
    </div>
  )
}
