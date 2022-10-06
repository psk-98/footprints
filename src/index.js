import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Nav from "./components/nav/nav"
import reportWebVitals from "./reportWebVitals"

import "./styles/global.css"
import Home from "./components/home/home"
import Footer from "./components/footer/footer"

ReactDOM.render(
  <Provider store={store}>
    <>
      <Nav />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
