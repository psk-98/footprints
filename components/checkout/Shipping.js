import { useState } from "react"
import checkoutStyles from "../../styles/Checkout.module.css"

const Shipping = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")

  const [postal, setPostal] = useState("")

  const [city, setCity] = useState("")

  const [country, setCountry] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={checkoutStyles.shippingWrapper}>
      <div className={checkoutStyles.shippingHeading}>Shipping details</div>
      <form className={checkoutStyles.shippingForm} onSubmit={handleSubmit}>
        <div className={checkoutStyles.formGroup}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={checkoutStyles.formGroup}>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={checkoutStyles.formGroup}>
          <input
            type="text"
            placeholder="postal code"
            name="postal"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
        </div>
        <div className={checkoutStyles.formGroup}>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={checkoutStyles.formGroup}>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className={checkoutStyles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={checkoutStyles.formGroup}>
          <button type="submit">continue</button>
        </div>
      </form>
    </div>
  )
}

export default Shipping
