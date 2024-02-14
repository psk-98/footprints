import { addToCart, clearCart } from "@/reducers/cart"
import { useAppDispatch } from "@/store/hooks"
import { useRouter } from "next/navigation"
import styles from "./BuyCartButtons.module.css"

export default function BuyCartButtons({ product, selectedSize }) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  return (
    <>
      <div
        className={`${styles.addCart} btn`}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (selectedSize) dispatch(addToCart({ product, size: selectedSize }))
          else {
            //    setAlert(true)
            //   setTimeout(() => {
            //     setAlert(false)
            //   }, 3000)
            console.log("select size")
          }
        }}
      >
        Add to bag
      </div>
      <div
        className={`${styles.buyNow} btn`}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          dispatch(clearCart())
          dispatch(addToCart({ product, size: selectedSize }))
          router.push("/checkout")
        }}
      >
        Buy now
      </div>
    </>
  )
}
