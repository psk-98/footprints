import footerStyles from "../../styles/Footer.module.css"
import { motion } from "framer-motion"
import Link from "next/link"

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.header}>Subscribe</div>
      <form onSubmit={handleSubmit} className={footerStyles.subForm}>
        <input placeholder="Enter your email" />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 5.5H18.5M18.5 5.5L11.5 0.5M18.5 5.5L12.5 9.5" />
          </svg>
        </motion.button>
      </form>
      <div className={footerStyles.footerLinks}>
        <Link href="/product/search">
          <motion.div
            className={footerStyles.footerLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.div>
        </Link>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          FAQ
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Shipping
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Returns
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Terms of use
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Privacy policy
        </motion.div>
      </div>
      <div className={footerStyles.footerBottom}>
        &copy; {new Date().getFullYear()} Designed and built by
        <motion.a
          href="https://paulkhoza.netlify.app"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
        >
          Paul Khoza
        </motion.a>
      </div>
    </div>
  )
}

export default Footer
