import { useDispatch, useSelector } from "react-redux"
import { filterOptionsVariants } from "../../animations/filterbar"
import { updateDesc } from "../../reducers/products"
import { setActive } from "../products/helpers"
import { motion } from "framer-motion"
import productStyles from "../../styles/Product.module.css"

const Descriptions = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const { selectedDesc, product } = state.products

  return (
    <div className={productStyles.productDesc}>
      <div className={productStyles.descHeaders}>
        <div
          className={
            setActive(selectedDesc, "desc")
              ? `nav-text ${productStyles.active}`
              : "nav-text"
          }
          onClick={() => dispatch(updateDesc("desc"))}
        >
          description
        </div>
        <div
          className={
            setActive(selectedDesc, "size")
              ? `nav-text ${productStyles.mid} ${productStyles.active}`
              : `nav-text ${productStyles.mid}`
          }
          onClick={() => dispatch(updateDesc("size"))}
        >
          size guide
        </div>
        <div
          className={
            setActive(selectedDesc, "shipping")
              ? `nav-text ${productStyles.active}`
              : "nav-text"
          }
          onClick={() => dispatch(updateDesc("shipping"))}
        >
          shipping
        </div>
      </div>
      <div className={productStyles.descTexts}>
        <motion.div
          className={productStyles.descText}
          animate={setActive(selectedDesc, "desc") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          {product?.description}
        </motion.div>
        <motion.div
          className={productStyles.descText}
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
          className={productStyles.descText}
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
