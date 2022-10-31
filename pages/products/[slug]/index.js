import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../../actions/products"
import {
  setProducts,
  updatePanel,
  updateSearch,
} from "../../../reducers/products"
import Loader from "../../../components/layout/Loader"
import Filterbar from "../../../components/products/filterbar"
import Pagination from "../../../components/products/pagination"
import Link from "next/link"
import Image from "next/image"
import productsStyles from "../../../styles/Products.module.css"
import { motion } from "framer-motion"

import { wrapper } from "../../../store/store"
import axios from "axios"
import { BASE_URL } from "../../../actions/type"
import { updateSlug } from "../../../reducers/params"
import { useRouter } from "next/router"
import { containerVariants } from "../../../animations/routes"

const Products = () => {
  const state = useSelector((state) => state)
  const [_search, setSearch] = useState()
  const [isSearch, setIsSearch] = useState()
  const router = useRouter()
  const dispatch = useDispatch()
  const { products, search, numProducts, prevPage, nextPage, loading, error } =
    state.products
  const handleRoute = () => {
    const { slug } = router.query
    if (slug === "search") return true
    return false
  }
  useEffect(() => {
    dispatch(getProducts())
  }, [search])

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(updateSearch(_search))
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg">{error?.message}!</div>
  ) : (
    <>
      <Filterbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {console.log(handleRoute())}
        {handleRoute() ? (
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="what are you looking for"
              value={_search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">search</button>
          </form>
        ) : (
          <>
            <div className={`${productsStyles.header} header`}>For him</div>
            <div className={productsStyles.settingsWrapper}>
              <div
                className={productsStyles.sortFilter}
                onClick={() => dispatch(updatePanel())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-filter"
                  stroke="7a7a7a"
                  viewBox="0 11 20 20"
                >
                  <line
                    x1="16.5"
                    y1="17.5"
                    x2="3.5"
                    y2="17.5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="16.5"
                    y1="24.5"
                    x2="3.5"
                    y2="24.5"
                    stroke-linecap="round"
                  ></line>
                  <circle cx="13" cy="24.5" r="2" fill="white"></circle>
                  <circle cx="7" cy="17.5" r="2" fill="white"></circle>
                </svg>
                filter & sort
              </div>
              <div className={productsStyles.numShow}>
                {numProducts} products
              </div>
            </div>
          </>
        )}

        <div className={productsStyles.productsWrapper}>
          <div className={productsStyles.productCards}>
            {products?.map((product) => {
              return (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={() => updateSlug(product.slug)}
                >
                  <div className={productsStyles.productCard}>
                    <div className={productsStyles.imgWrapper}>
                      <Image
                        width="800px"
                        height="800px"
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL="Logo.png"
                        src={product.product_images[0].get_image}
                        alt={product.name}
                      />
                    </div>
                    <div className={productsStyles.name}>{product.name}</div>
                    <div className={productsStyles.price}>
                      R {product.price}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <Pagination />
      </motion.div>
    </>
  )
}

export default Products

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { sort, pageSize, sizes } = store.getState().params

    let params = { sort, page_size: pageSize }

    if (context.params.slug === "men" || context.params.slug === "women")
      params.category = context.params.slug
    const res = await axios.get(`${BASE_URL}/products`, { params })

    const { data } = await res
    store.dispatch(updateSlug(context.params.slug))
    store.dispatch(setProducts(data))
  }
)
