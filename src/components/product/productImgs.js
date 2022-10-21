import React, { useState } from "react"
import { useSelector } from "react-redux"
import { nextSymbol, previousSymbol } from "../products/helpers"

const Images = () => {
  const [currentImg, setCurrentImg] = useState(0)
  const state = useSelector((state) => state)
  const { product_images } = state.products?.product

  const handleSlider = (direction) => {
    if (direction === "next" && currentImg < product_images.length - 1)
      setCurrentImg(currentImg + 1)
    if (direction === "prev" && currentImg !== 0) setCurrentImg(currentImg - 1)
  }
  return (
    <div className="product-img">
      <div className="product-img-sm">
        <img src={product_images[currentImg]?.get_image} />
        <div className="img-selectors">
          <div onClick={() => handleSlider("prev")}>{previousSymbol}</div>
          <div className="img-progress">{`${currentImg + 1} / ${
            product_images.length
          }`}</div>
          <div onClick={() => handleSlider("next")}>{nextSymbol}</div>
        </div>
      </div>
      <div className="product-img-md"></div>
    </div>
  )
}

export default Images
