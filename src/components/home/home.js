import React, {Component} from 'react'
import { motion } from "framer-motion/dist/framer-motion"
import { Link } from "react-router-dom"; 
import {hoverButtonVariants} from '../common/animations'
import sneakers from '../../styles/sneakers.webp'


const Home = () => {
    return (
        <div className='home-img-wrapper' style={{backgroundImage: `url(${sneakers})`}}>
            <Link to="/products/men">
                <motion.div className='shop-btn'
                    variants={hoverButtonVariants}
                    whileHover="hover"
                >
                    For him
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                        <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z"/>
                    </svg>
                </motion.div>
            </Link>
            <Link to="/products/women">
                <motion.div className='shop-btn'
                    variants={hoverButtonVariants}
                    whileHover="hover"
                >
                    For her
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                        <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z"/>
                    </svg>
                </motion.div>
            </Link>
            <Link to="/products">
                <motion.div className='shop-btn'
                    variants={hoverButtonVariants}
                    whileHover="hover"
                >
                    Shop  all  
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                        <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z"/>
                    </svg>
                </motion.div>
            </Link>
        </div>
    )
}

export default Home