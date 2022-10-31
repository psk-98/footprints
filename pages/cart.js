import Link from "next/link"
import { useState } from "react"
import { useSelector } from "react-redux"
import CartList from "../components/cart/CartList"
import { checkoutBtn, handleTotalPrice } from "../components/cart/helpers"
import cartStyles from "../styles/Cart.module.css"

const Cart = () => {
  const [showModal, setShowModal] = useState(true)
  const state = useSelector((state) => state)
  const { numberCart, cart } = state.cart
  return (
    <>
      {showModal ? (
        <>
          <div className={cartStyles.modalWrapper}>
            <div className={cartStyles.modal}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="21"
                  viewBox="0 0 48 48"
                  onClick={() => setShowModal(false)}
                >
                  <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                </svg>
              </button>
              <Link href="/login">
                <div className={cartStyles.authBtn}>Login</div>
              </Link>
              {
                <Link href="/checkout">
                  <div className={cartStyles.guestBtn} aria-disabled>
                    Guest checkout
                  </div>
                </Link>
              }
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className={cartStyles.cartWrapper}>
        <div className={cartStyles.cartTop}>
          <div className={cartStyles.cartHeading}>Bag</div>
          <div className={cartStyles.cartDetails}>
            <div className={cartStyles.numItemsCart}>{numberCart} items</div>|
            <div className={cartStyles.cartTotal}>
              R {Math.round(handleTotalPrice(cart) * 100) / 100}
            </div>
            <div className={cartStyles.cartItemsWrapper}>
              <CartList />
            </div>
          </div>
        </div>
      </div>
      {checkoutBtn(cart)}
    </>
  )
}

export default Cart
