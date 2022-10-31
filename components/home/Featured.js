import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import Loader from "../layout/Loader"
import homeStyles from "../../styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Featured = () => {
  const state = useSelector((state) => state)

  let scrl = useRef(null)
  const [scrollX, setscrollX] = useState(0)
  const [scrolEnd, setscrolEnd] = useState(false)

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift
    setscrollX(scrollX + shift)

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft)
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }
  const { products, loading, error } = state.products

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : (
    <div className={homeStyles.featured}>
      {console.log(state)}
      <div className={`${homeStyles.header} header`}>Featured products</div>
      <div className={homeStyles.cardsWrapper}>
        {scrollX !== 0 && (
          <motion.button
            className={`${homeStyles.prev} not-touch`}
            onClick={() => slide(-300)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<"}
          </motion.button>
        )}
        <ul ref={scrl} onScroll={scrollCheck}>
          {products?.map((product) => {
            return (
              <Link key={product.id} href={`product/${product.slug}`}>
                <div className={homeStyles.featuredCard}>
                  <div className={homeStyles.imgWrapper}>
                    <Image
                      src={product?.product_images[0].get_image}
                      alt={product.name}
                      width="800px"
                      height="800px"
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL="Logo.png"
                    />
                  </div>
                  <div className={homeStyles.featuredName}>{product.name}</div>
                  <div className={homeStyles.featuredPrice}>
                    R {product.price}
                  </div>
                </div>
              </Link>
            )
          })}
        </ul>
        {!scrolEnd && (
          <motion.button
            className={`${homeStyles.next} not-touch`}
            onClick={() => slide(300)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {">"}
          </motion.button>
        )}
      </div>
    </div>
  )
}

export default Featured
