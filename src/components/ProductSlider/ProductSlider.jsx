import Image from "next/image"
import Link from "next/link"
import { forwardArrow } from "../../../public/svgs"
import styles from "./ProductSlider.module.css"

export default function Slider({ header, products, link }) {
  return (
    products &&
    products.length > 0 && (
      <div className={styles.productSlider}>
        <div className={styles.sliderHeader}>
          <p className="header">{header}</p>
          {link && (
            <Link href={link} className={styles.sliderViewAll}>
              view all
              {forwardArrow}
            </Link>
          )}
        </div>
        <div className={styles.slider}>
          {products?.map((product, i) => {
            return (
              <Link
                href={`product/${product?.slug}`}
                className={styles.sliderCard}
                key={product.id}
              >
                <div className={styles.sliderImg}>
                  <Image
                    src={product.product_images[0].get_image.replace(/\s+/, "")}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL="/Logo.png"
                    alt={product.name}
                  />
                </div>
                <div className={styles.productName}>{product.name}</div>
                <Link
                  href={`/products/${product?.category}`}
                  className={`${styles.category} lighter`}
                >
                  {product.category}
                </Link>
                <div className={styles.productPrice}>
                  R{product.price.toFixed(2)}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  )
}
