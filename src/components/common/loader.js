import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";
import { loaderVariants } from './animations';

const Loader = () => {
  return (
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  )
}

export default Loader;