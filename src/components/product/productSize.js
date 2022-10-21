import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSizes } from "../../reducers/products"
import { nextSymbol, previousSymbol } from "../products/helpers"
import { setActive } from "./helpers"

const Sizes = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { product_stock } = state.products?.product
  const { selectedSizes } = state.products

  return (
    <div className="product-sizes">
      <ul>
        {product_stock?.map((stock) => {
          return (
            <li
              className={
                setActive(selectedSizes, stock.size)
                  ? "size-option active"
                  : "size-option"
              }
              onClick={() => dispatch(updateSizes(stock.size))}
            >
              {stock.size}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sizes
