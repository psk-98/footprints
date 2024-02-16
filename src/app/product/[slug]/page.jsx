import Desc from "@/components/OtherProductDetails/Desc"
import Images from "@/components/ProductImages/ProductImgs"
import Slider from "@/components/ProductSlider/ProductSlider"
import SizeSelector from "@/components/SizeSelector/SizeSelector"
import Link from "next/link"
import styles from "./Product.module.css"

// import { usePathname, useSearchParams } from 'next/navigation'
// useSearchParams gives you the query params
async function getProduct({ slug }) {
  const res = await fetch(
    `https://psk98.pythonanywhere.com/api/product/?slug=${slug}`
  )
  const data = await res.json()

  return data
}

export default async function Product({ params }) {
  // const createQueryString = useCallback(
  //   (name, value) => {
  //     const params = new URLSearchParams(searchParams)
  //     params.set(name, value)

  //     return params.toString()
  //   },
  //   [searchParams]
  // )

  const product = await getProduct(params)
  console.log(await product)
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

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params

  // fetch data
  const product = await fetch(
    `https://psk98.pythonanywhere.com/api/product/?slug=${slug}`
  ).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.name + " | Footprints",
    openGraph: {
      images: [product.product_images[0], ...previousImages],
    },
  }
}
