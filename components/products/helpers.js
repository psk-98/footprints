import { motion } from "framer-motion"
import { filterOptionsVariants } from "../../animations/filterbar"

export const normalizeCat = (cat) => {
  if (cat === "forhim") return "men"
  else if (cat === "forher") return "women"
}

export const setActive = (sort, sortElement) => {
  if (sort === sortElement) return true
  else return false
}

export const closeSymbol = (status) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      initial={false}
      animate={status ? "open" : "closed"}
      variants={filterOptionsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <path d="M5.083 10.583V9.375h9.834v1.208Z" />
    </motion.svg>
  )
}

export const openSymbol = (status) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      initial={false}
      animate={status ? "closed" : "open"}
      variants={filterOptionsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <path d="M9.396 14.875v-4.292H5.104V9.375h4.292V5.083h1.208v4.292h4.292v1.208h-4.292v4.292Z" />
    </motion.svg>
  )
}

export const previousSymbol = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z" />
  </svg>
)

export const nextSymbol = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z" />
  </svg>
)

export const sizeDisplay = (stock) => {
  if (stock) {
    stock.map((p_stock) => {
      return (
        <li key={stock.size} className="size-option">
          {p_stock.size}
        </li>
      )
    })
  } else {
    return <div className="product-out">Out of stock</div>
  }
}
