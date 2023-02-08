import { containerVariants } from "@/animations/routes"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"

export default function PageWrapper({ children, title, path, desc }) {
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        canonical={`https://footprintz.netlify.app${path}`}
      />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  )
}
