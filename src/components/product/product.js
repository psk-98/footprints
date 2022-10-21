import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../actions/products"
import Loader from "../common/loader"
import { nextSymbol, previousSymbol, sizeDisplay } from "../products/helpers"
import "../../styles/product.css"
import Descriptions from "./productDesc"
import Images from "./productImgs"
import Sizes from "./productSize"

const Product = () => {
  const { productSlug } = useParams()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(productSlug))
  }, [])

  const { product, loading, error } = state.products
  //const { product_stock } = product
  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : (
    <div className="product-wrapper">
      {console.log(product)}
      <Images />
      <div className="product-detials">
        <div className="product-name">{product?.name}</div>
        <div className="product-price">
          <span className="price-currency">R</span>
          <span className="price">{product?.price}</span>
        </div>
        <Sizes />
        <div className="product-sizes">
          <ul>
            {/*product_stock?.map((stock) => {
              return <li className="size-option">{stock.size}</li>
            })*/}
          </ul>
        </div>
        <div
          className="add-cart-btn btn"
          onClick={() => this.handleAddCart(product)}
        >
          Add to bag
        </div>
        <Descriptions />
      </div>
    </div>
  )
}

export default Product
