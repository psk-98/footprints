import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../actions/products"
import Loader from "../common/loader"

const Featured = () => {
  const state = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = state

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : (
    <div className="featured-wrapper">
      <div className="featured">
        <div className="header">Featured products</div>
        <div className="cards-wrapper">
          {/*products?.map((product) => {
            return (
              <div className="featured-card">
                <div className="img-wrapper">
                  <img
                    src={product.product_images[0].get_image}
                    alt={product.name}
                  />
                </div>
                <div className="featured-name">{product.name}</div>
                <div className="featured-price">R {product.price}</div>
              </div>
            )
          })*/}
        </div>
      </div>
    </div>
  )
}

export default Featured
