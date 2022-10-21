import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Nav from "./components/nav/nav"
import reportWebVitals from "./reportWebVitals"

import "./styles/global.css"
import Home from "./components/home/home"
import Footer from "./components/footer/footer"
import Products from "./components/products/products"
import Filterbar from "./components/products/filterbar"
import Product from "./components/product/product"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path=":catSlug" element={<Products />} />
          </Route>
          <Route path=":catSlug/:productSlug" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
