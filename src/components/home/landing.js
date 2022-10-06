import React from "react"
import sneakers from "../../styles/sneakers.webp"

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing" style={{ backgroundImage: `url(${sneakers})` }}>
        <div className="shop-btn">
          For Him
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z" />
          </svg>
        </div>
        <div className="shop-btn">
          For her
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z" />
          </svg>
        </div>
        <div className="shop-btn">
          Shop all
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="m10 16-1.062-1.062 4.187-4.188H4v-1.5h9.125L8.938 5.062 10 4l6 6Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Landing
