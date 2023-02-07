import { motion } from "framer-motion"
import { loaderVariants, wrapperVariants } from "../../animations/loader"
import PageWrapper from "./PageWrapper"
import styles from "@/styles/Loader.module.css"

const Loader = ({ loading }) => {
  return (
    <PageWrapper key={loading}>
      <motion.div
        className={styles.loaderWrapper}
        variants={wrapperVariants}
        animate="loading"
      >
        <motion.div
          className={styles.loader}
          variants={loaderVariants}
        ></motion.div>
        <motion.div
          className={styles.loader}
          variants={loaderVariants}
        ></motion.div>
        <motion.div
          className={styles.loader}
          variants={loaderVariants}
        ></motion.div>
        <motion.div
          className={styles.loader}
          variants={loaderVariants}
        ></motion.div>
      </motion.div>
    </PageWrapper>
  )
}

export default Loader
