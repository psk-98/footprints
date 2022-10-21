import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../actions/products"
import Loader from "../common/loader"
import { nextSymbol, previousSymbol, sizeDisplay } from "./helpers"
import "../../styles/product.css"

const Product = () => {
  const { productSlug } = useParams()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct(productSlug))
  }, [])
  const { product, loading, error } = state.products
  const { product_stock } = product
  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : product ? (
    <div className="product-wrapper">
      {console.log(product)}
      <div className="product-img">
        <div className="product-img-sm">
          <img src={product?.product_images[0].get_image} />
          <div className="img-selectors">
            <div onClick={() => this.handleSlider("back")}>
              {previousSymbol}
            </div>
            <div className="img-progress">1</div>
            <div onClick={() => this.handleSlider("fwd")}>{nextSymbol}</div>
          </div>
        </div>
        <div className="product-img-md"></div>
        <div className="product-detials">
          <div className="product-name">{product?.name}</div>
          <div className="product-price">
            <span className="price-currency">R</span>
            <span className="price">{product?.price}</span>
          </div>
          <div className="product-sizes">
            <ul>
              {product_stock?.map((stock) => {
                return <li className="size-option">{stock.size}</li>
              })}
            </ul>
          </div>
          <div className="add-cart-btn">Add to bag</div>
          <div className="product-desc">{product?.description}</div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Product
