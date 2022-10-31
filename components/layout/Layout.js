import Nav from "../nav/Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}
export default Layout
