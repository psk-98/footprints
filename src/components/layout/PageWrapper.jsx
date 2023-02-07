import { containerVariants } from "@/animations/routes"
import { motion } from "framer-motion"

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
