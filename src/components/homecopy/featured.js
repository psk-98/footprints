import React from "react"

import landing from "../../styles/mk products images/img.webp"

const Featured = () => {
  return (
    <div className="featured-wrapper">
      <div className="featured">
        <div className="header">Featured products</div>
        <div className="cards-wrapper">
          <div className="featured-card">
            <div className="img-wrapper">
              <img src={landing} alt="swim" />
            </div>
            <div className="featured-name">ora animal print one shoulder</div>
            <div className="featured-price">R 450.00</div>
          </div>
          <div className="featured-card">
            <div className="img-wrapper">
              <img src={landing} alt="swim" />
            </div>
            <div className="featured-name">ora animal print one shoulder</div>
            <div className="featured-price">R 450.00</div>
          </div>
          <div className="featured-card">
            <div className="img-wrapper">
              <img src={landing} alt="swim" />
            </div>
            <div className="featured-name">ora animal print one shoulder</div>
            <div className="featured-price">R 450.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
