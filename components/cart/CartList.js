import { useDispatch, useSelector } from "react-redux"
import { handlePriceDetails } from "./helpers"
import cartStyles from "../../styles/Cart.module.css"
import { decreaseQuantity, increaseQuantity } from "../../reducers/cart"
import Image from "next/image"

const CartList = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { cart } = state.cart

  return cart.map((product) => {
    return (
      <div key={product.id} className={cartStyles.cartItemWrapper}>
        <div className={cartStyles.itemName}>{product.name}</div>
        <div className={cartStyles.itemDetailsWrapper}>
          <div className={cartStyles.itemImg}>
            <Image
              width="800px"
              height="800px"
              layout="responsive"
              placeholder="blur"
              blurDataURL="Logo.png"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className={cartStyles.itemDetails}>
            <div className="item-size">UK {product.size}</div>
            <div className={cartStyles.itemQuantity}>
              <div
                className={cartStyles.quantityChange}
                onClick={() =>
                  dispatch(decreaseQuantity(cart.indexOf(product)))
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.083 10.583V9.375h9.834v1.208Z" />
                </svg>
              </div>
              <div className={cartStyles.numQuantity}>{product.quantity}</div>
              <div
                className={cartStyles.quantityChange}
                onClick={() => {
                  dispatch(increaseQuantity(cart.indexOf(product)))
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z" />
                </svg>
              </div>
            </div>
            <div className={cartStyles.priceDetails}>
              {handlePriceDetails(product)}
            </div>
            <div
              className={cartStyles.deleteItem}
              onClick={() => this.props.deleteCart(cart.indexOf(product))}
            >
              delete
            </div>
          </div>
        </div>
      </div>
    )
  })
}

export default CartList
