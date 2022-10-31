import cartStyles from "../../styles/Cart.module.css"

export const handleCartCheck = (length, numberCart) => {
  if (length === 0 || numberCart === 0) return true
  else return false
}

export const handleTotalPrice = (cart) => {
  let totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price * cart[i].quantity
  }

  return totalPrice
}

export const handlePriceDetails = (product) => {
  if (product.quantity > 1) {
    return (
      <>
        <div className="price-quantity">
          {product.quantity} X R{product.price}
        </div>
        <div className="item-total-price">
          R{product.price * product.quantity}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="item-total-price">
          R{product.price * product.quantity}
        </div>
      </>
    )
  }
}

export const checkoutBtn = (cart) => {
  if (cart.length !== 0)
    return <div className={cartStyles.checkoutBtn}>Checkout</div>
  else if (cart.length === 0)
    return <div className={cartStyles.emptyMsg}> your Bag is empty</div>
}
