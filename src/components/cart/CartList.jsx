import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import styles from "@/styles/Cart.module.css"
import { handleTotalPrice, isEmpty } from "./helpers"
import {
  decreaseQuantity,
  deleteCartItem,
  increaseQuantity,
} from "../../reducers/cart"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Cart({ setShowModal }) {
  const state = useSelector((state) => state)
  const { numberCart, cart } = state.cart
  const dispatch = useDispatch()
  const router = useRouter()

  const handlePriceDetails = (product) => {
    if (product.quantity > 1) {
      return (
        <>
          <div className={styles.priceQuantity}>
            {product.quantity} X R{product.price.toFixed(2)}
          </div>
          <div className={styles.itemTotalPrice}>
            R{(product.price * product.quantity).toFixed(2)}
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles.itemTotalPrice}>
            R{(product.price * product.quantity).toFixed(2)}
          </div>
        </>
      )
    }
  }

  return (
    <div className="contained">
      <div className={styles.cartTop}>
        <div className={`${styles.cartHeader} header`}>Bag</div>
        <div className={styles.cartDetails}>
          <div className="lighter">{numberCart} items</div>
          <span>|</span>
          <div className={styles.cartTotal}>
            R {handleTotalPrice(cart).toFixed(2)}
          </div>
        </div>
      </div>
      <div className={styles.cartItemsWrapper}>
        {cart.map((product, index) => {
          return (
            <div key={index} className={styles.cartItemWrapper}>
              <div className={styles.itemImg}>
                <Image
                  width="800"
                  height="800"
                  placeholder="blur"
                  blurDataURL="Logo.png"
                  src={product.image.replace(/\s+/, "")}
                  alt={product.name}
                />
              </div>
              <div className={styles.itemDetails}>
                <div className={styles.itemName}>{product.name}</div>
                <div className={styles.itemSize}>{product.size}</div>
                <div className={styles.priceDetails}>
                  {handlePriceDetails(product)}
                </div>
                <div className={styles.itemQuantity}>
                  <div
                    className={styles.quantityChange}
                    onClick={() =>
                      dispatch(decreaseQuantity(cart.indexOf(product)))
                    }
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.083 10.583V9.375h9.834v1.208Z" />
                    </svg>
                  </div>
                  <div className={styles.numQuantity}>{product.quantity}</div>
                  <div
                    className={styles.quantityChange}
                    onClick={() => {
                      dispatch(increaseQuantity(cart.indexOf(product)))
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z" />
                    </svg>
                  </div>
                </div>

                <div
                  className={styles.deleteItem}
                  onClick={() =>
                    dispatch(deleteCartItem(cart.indexOf(product)))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      stroke="#000"
                      d="M11 14.5H1v-13m0 0h12m-12 0h13-1m-12 0H0m13 0v11M3 1h8M4 3.5v9m6-9v9"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {isEmpty(cart) ? (
        <div className={styles.emptyMsg}>
          <p className={styles.msg}>Your bag is empty shop around...</p>
          <div className={styles.links}>
            <Link className={`${styles.link} btn light`} href="/products/women">
              Women
            </Link>
            <Link className={`${styles.link} btn light`} href="/products/men">
              Men
            </Link>
            <Link className={`${styles.link} btn light`} href="/products/kids">
              Kids
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.checkoutBtn}`}
          onClick={() => {
            state.accounts?.isAuthenticated
              ? setShowModal(false)
              : setShowModal(true)
          }}
        >
          <Link className="btn light" href="/checkout">
            Checkout
          </Link>
        </div>
      )}
    </div>
  )
}
