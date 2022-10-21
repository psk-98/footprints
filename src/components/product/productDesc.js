import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterOptionsVariants } from "../../animations/filterbar"
import { updateDesc } from "../../reducers/products"
import { setActive } from "../products/helpers"
import { motion } from "framer-motion"

const Descriptions = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const { selectedDesc, product } = state.products

  return (
    <div className="product-desc">
      <div className="desc-headers">
        <div
          className={
            setActive(selectedDesc, "desc")
              ? "desc-header nav-text active"
              : "desc-header nav-text"
          }
          onClick={() => dispatch(updateDesc("desc"))}
        >
          description
        </div>
        <div
          className={
            setActive(selectedDesc, "size")
              ? "desc-header mid nav-text active"
              : "desc-header mid nav-text"
          }
          onClick={() => dispatch(updateDesc("size"))}
        >
          size guide
        </div>
        <div
          className={
            setActive(selectedDesc, "shipping")
              ? "desc-header nav-text active"
              : "desc-header nav-text"
          }
          onClick={() => dispatch(updateDesc("shipping"))}
        >
          shipping
        </div>
      </div>
      <div className="desc-texts">
        <motion.div
          className="desc-text"
          animate={setActive(selectedDesc, "desc") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          {product.description}
        </motion.div>
        <motion.div
          className="desc-text"
          animate={setActive(selectedDesc, "size") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          sizes this Aenean gravida turpis nisi, consequat dictum risus dapibus
          a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas
          ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae
          justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
          consequat tellus id tempus aliquet.
        </motion.div>
        <motion.div
          className="desc-text"
          initial={false}
          animate={setActive(selectedDesc, "shipping") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis
          felis ante, varius in neque eu, tempor suscipit sem. Maecenas
          ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae
          justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
          consequat tellus id tempus aliquet.
        </motion.div>
      </div>
    </div>
  )
}

export default Descriptions
