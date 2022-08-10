import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";

const alertVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {type: 'spring', delay: 0.5}
  },
  exit: {
    x: '100vw'
  }
};

const Alerts = (props) => {
  return (
    <>
        <motion.div className='errorCard'
            variants={alertVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='errorMsg'>
                {props.message}
            </div>
        </motion.div>
    </>
  )
}

export default Alerts;