import Link from "next/link"
import { MotionAnchor, MotionDiv } from "../MotionComponents/MotionComponents"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link
        href="https://www.linkedin.com/in/paul-khoza"
        target="_blank"
        rel="noreferrer"
      >
        <MotionDiv
          className={`${styles.followUs} btn`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          follow me
        </MotionDiv>
      </Link>
      <div className={styles.footerLinks}>
        <Link href="/product/search">
          <MotionDiv
            className={styles.footerLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </MotionDiv>
        </Link>
        <MotionDiv
          className={styles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </MotionDiv>
        <MotionDiv
          className={styles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          FAQ
        </MotionDiv>
        <MotionDiv
          className={styles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Shipping
        </MotionDiv>
        <MotionDiv
          className={styles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Returns
        </MotionDiv>
        <MotionDiv
          className={styles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Terms of use
        </MotionDiv>
        <MotionDiv
          className={styles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Privacy policy
        </MotionDiv>
      </div>
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Designed and built by
        <MotionAnchor
          href="https://paulkhoza.netlify.app"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
        >
          Paul Khoza
        </MotionAnchor>
      </div>
    </div>
  )
}

export default Footer
