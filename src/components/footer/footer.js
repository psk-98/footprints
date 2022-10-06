import React from "react"
import "../../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="header">Subscribe</div>
      <form className="sub-form">
        <input placeholder="Enter your email" />
        <button>
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5.5H18.5M18.5 5.5L11.5 0.5M18.5 5.5L12.5 9.5"
              stroke="black"
            />
          </svg>
        </button>
      </form>
      <div className="footer-links">
        <div className="footer-link">Search</div>
        <div className="footer-link">Contact</div>
        <div className="footer-link">FAQ</div>
        <div className="footer-link">Shipping</div>
        <div className="footer-link">Returns</div>
        <div className="footer-link">Terms of use</div>
        <div className="footer-link">Privacy policy</div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Designed and built by
        <a
          href="https://paulkhoza.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Paul Khoza
        </a>
      </div>
    </div>
  )
}

export default Footer
