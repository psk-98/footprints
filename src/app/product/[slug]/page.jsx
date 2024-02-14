import Desc from "@/components/OtherProductDetails/Desc"
import Images from "@/components/ProductImages/ProductImgs"
import Slider from "@/components/ProductSlider/ProductSlider"
import SizeSelector from "@/components/SizeSelector/SizeSelector"
import Link from "next/link"
import styles from "./Product.module.css"

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
    product && (
      <>
        <div className="contained">
          <Images product={product} />
          <div className={styles.details}>
            <div className={styles.name}>{product?.name}</div>
            <Link
              href={`/products/${product?.category}`}
              className={`${styles.category} lighter`}
            >
              {product?.category}
            </Link>
            <div className={styles.price}>R {product?.price}</div>
            {product?.product_stock.length === 0 ? (
              <div className={`${styles.addCart} btn`}>Sold out</div>
            ) : (
              <SizeSelector product={product} />
            )}
          </div>
          <div className={styles.productDesc}>{product?.description}</div>
          <Desc product={product} />
        </div>
        <Slider
          header="You May Also Like"
          products={product?.similar.slice(0, 8)}
        />
      </>
    )
  )
}
