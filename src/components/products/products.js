import React from "react"

import landing from "../../styles/mk products images/img.webp"

const Products = () => {
  return (
    <div className="products-wrapper">
      <div className="products"></div>
      <div className="products-cards">
        <div className="product-card">
          <div className="img-wrapper">
            <img src={landing} alt="swim" />
          </div>
          <div className="name">ora animal print one shoulder</div>
          <div className="price">R 450.00</div>
        </div>
        <div className="product-card">
          <div className="img-wrapper">
            <img src={landing} alt="swim" />
          </div>
          <div className="name">ora animal print one shoulder</div>
          <div className="price">R 450.00</div>
        </div>
        <div className="product-card">
          <div className="img-wrapper">
            <img src={landing} alt="swim" />
          </div>
          <div className="name">ora animal print one shoulder</div>
          <div className="price">R 450.00</div>
        </div>
      </div>
    </div>
  )
}

export default Products
