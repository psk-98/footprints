import Desc from "@/components/OtherProductDetails/Desc"
import Images from "@/components/ProductImages/ProductImgs"
import Slider from "@/components/ProductSlider/ProductSlider"
import SizeSelector from "@/components/SizeSelector/SizeSelector"
import Link from "next/link"
import { notFound } from "next/navigation"
import styles from "./Product.module.css"

async function getProduct({ slug }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product/?slug=${slug}`
    )
    const data = await res.json()
    return data
  } catch (err) {
    notFound()
  }
}

export default async function Product({ params }) {
  const product = await getProduct(params)
  return (
    product && (
      <>
        <div className="contained">
          <div className={styles.productCard}>
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

export async function generateMetadata({ params }, parent) {
  const { slug } = params

  try {
    const product = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product/?slug=${slug}`
    ).then((res) => res.json())

    const previousImages = (await parent).openGraph?.images || []
    return {
      title: product.name + " | Footprints",
      openGraph: {
        images: [product.product_images[0], ...previousImages],
      },
    }
  } catch (err) {
    return {
      title: slug + " | Footprints",
    }
  }
}
