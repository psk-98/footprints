import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import { nextSymbol, previousSymbol } from "../products/helpers"
import productStyles from "../../styles/Product.module.css"
import Loader from "../layout/Loader"

const Images = () => {
  const [currentImg, setCurrentImg] = useState(0)
  const state = useSelector((state) => state)
  const { product } = state.products

  const handleSlider = (direction) => {
    if (direction === "next" && currentImg < product?.product_images.length - 1)
      setCurrentImg(currentImg + 1)
    if (direction === "prev" && currentImg !== 0) setCurrentImg(currentImg - 1)
  }
  return state.products.loading ? (
    <Loader />
  ) : (
    <div className={productStyles.imgsWrapper}>
      <div className={productStyles.imgSm}>
        <Image
          src={product?.product_images[currentImg]?.get_image}
          alt={currentImg}
          width="800px"
          height="800px"
          layout="responsive"
          placeholder="blur"
          blurDataURL="Logo.png"
        />
        <div className={productStyles.imgSelectors}>
          <div onClick={() => handleSlider("prev")}>{previousSymbol}</div>
          <div className={productStyles.imgProgress}>{`${currentImg + 1} / ${
            product?.product_images.length
          }`}</div>
          <div onClick={() => handleSlider("next")}>{nextSymbol}</div>
        </div>
      </div>
      <div className={productStyles.imgMd}>
        {product?.product_images.map((img) => {
          return (
            <Image
              key={img.id}
              src={img?.get_image}
              alt={product.name}
              width="800px"
              height="800px"
              layout="responsive"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Images
