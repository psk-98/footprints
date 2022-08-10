import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";
import { alertVariants } from './animations';


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