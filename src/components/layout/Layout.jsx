import Footer from "./Footer"
import { Montserrat } from "@next/font/google"
import Nav from "../nav/nav"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Layout = ({ children }) => {
  return (
    // <div className={montserrat.className} >
    <>
      <Nav />
      {children}
      <Footer />
    </>
    // </div>
  )
}
export default Layout
