import React from "react"

import landing from "../../styles/mk products images/img.webp"
import Featured from "./featured"

const Home = () => {
  return (
    <>
      <div className="landing-wrapper">
        <div className="landing">
          <img src={landing} alt="swim suit" />
          <div className="shop-btn">shop</div>
        </div>
      </div>
      <div className="about">
        <div className="header">
          Twinning ZA by MK is a beachwear and accessory clothing brand.
        </div>
        <div className="desc">
          Twinning ZA by MK is beachwear and accessory clothing brand, offering
          our customer trendy, stylish beachwear for men, women and kids.Finding
          perfect matching beachwear for your family trip, girls trips ,
          beacation has just been made easy with our wide selection of styles
          and inclusive size range (XS-4XL) women.
        </div>
      </div>
      <Featured />
    </>
  )
}

export default Home
