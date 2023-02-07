import styles from "../../styles/Nav.module.css"
import { clearSProducts, updateSearch } from "../../reducers/products"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getSearchedProducts } from "../../actions/products"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Search({ setIsSearch }) {
  const router = useRouter()

  const disptach = useDispatch()

  const state = useSelector((state) => state)
  const { sProducts, sLoading, sNumProducts } = state.products

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          required
          placeholder="What are you looking for?"
          onChange={(e) => {
            disptach(updateSearch(e.target.value))
            disptach(getSearchedProducts())
          }}
        />
        <div
          className={styles.cancel}
          onClick={() => {
            setIsSearch(false)
            disptach(clearSProducts())
          }}
        >
          x
        </div>
      </div>
      {sLoading ? (
        <>Loading </>
      ) : (
        <div className={styles.searchResults}>
          {sProducts &&
            sProducts.slice(0, 3).map((product) => {
              return (
                <div
                  className={styles.searchResult}
                  onClick={() => {
                    setIsSearch(false)
                  }}
                >
                  <Link href={`/product/${product.slug}`}>
                    <div className={styles.imgWrapper}>
                      <Image
                        width="800"
                        height="800"
                        placeholder="blur"
                        blurDataURL="Logo.png"
                        src={product.product_images[0].get_image}
                        alt={product.name}
                      />
                    </div>
                    <div className={styles.productDetails}>
                      <p>{product.name}</p>
                      <p>R {product.price.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          {sNumProducts > 3 && (
            <div
              className={`${styles.viewRes} light`}
              onClick={() => {
                setIsSearch(false)
                router.push("/products/search")
              }}
            >
              View {sNumProducts} results
            </div>
          )}
        </div>
      )}
    </>
  )
}
