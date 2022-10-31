import { motion } from "framer-motion"
import { loaderVariants } from "../../animations/loader"

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  )
}

export default Loader
