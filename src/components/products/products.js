import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getProducts } from "../../actions/products"
import { updateCategory } from "../../reducers/params"
import { updatePanel } from "../../reducers/products"
import "../../styles/products.css"
import Loader from "../common/loader"
import Filterbar from "./filterbar"
import Pagination from "./pagination"

const Products = () => {
  const state = useSelector((state) => state)

  const dispatch = useDispatch()

  const { catSlug } = useParams()

  useEffect(() => {
    dispatch(updateCategory(catSlug))

    dispatch(getProducts())
    console.log(state)
  }, [])

  const { products, numProducts, prevPage, nextPage, loading, error } =
    state.products

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : (
    <>
      <Filterbar />
      <div className="header">For him</div>
      <div className="settings-wrapper">
        <div className="sort-filter" onClick={() => dispatch(updatePanel())}>
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
        <div className="num-show">{numProducts} products</div>
      </div>
      <div className="products-wrapper">
        <div className="products-cards">
          {products?.map((product) => {
            return (
              <Link to={`/${product.category}/${product.slug}`}>
                <div className="product-card">
                  <div className="img-wrapper">
                    <img
                      src={product.product_images[0].get_image}
                      alt={product.name}
                    />
                  </div>
                  <div className="name">{product.name}</div>
                  <div className="price">R {product.price}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Pagination />
    </>
  )
}

export default Products
