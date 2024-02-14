import { loaderVariants, wrapperVariants } from "@/animations/loader"
import { MotionDiv } from "@/components/MotionComponents/MotionComponents"
import styles from "./Loading.module.css"

export default function Loading() {
  return (
    <>
      <MotionDiv
        className={styles.loaderWrapper}
        variants={wrapperVariants}
        animate="loading"
      >
        <MotionDiv
          className={styles.loader}
          variants={loaderVariants}
        ></MotionDiv>
        <MotionDiv
          className={styles.loader}
          variants={loaderVariants}
        ></MotionDiv>
        <MotionDiv
          className={styles.loader}
          variants={loaderVariants}
        ></MotionDiv>
        <MotionDiv
          className={styles.loader}
          variants={loaderVariants}
        ></MotionDiv>
      </MotionDiv>
    </>
  )
}
