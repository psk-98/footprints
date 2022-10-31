import { useDispatch, useSelector } from "react-redux"
import { updateSizes } from "../../reducers/products"
import { nextSymbol, previousSymbol } from "../products/helpers"
import { setActive } from "./helpers"
import productStyles from "../../styles/Product.module.css"

const Sizes = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { selectedSizes, product } = state.products

  return (
    <div className={productStyles.productSizes}>
      <ul>
        {product?.product_stock?.map((stock) => {
          return (
            <li
              key={stock.id}
              className={
                setActive(selectedSizes, stock.size)
                  ? `${productStyles.sizeOption} ${productStyles.active}`
                  : productStyles.sizeOption
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
