import { Montserrat } from "@next/font/google"
import { NextSeo } from "next-seo"
import Nav from "../nav/Nav"
import Footer from "./Footer"
import Meta from "./Meta"

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
})

const Layout = ({ children }) => {
  return (
    <div className={montserrat.className}>
      <Meta />
      <NextSeo
        twitter={{
          handle: "@paul_sinci",
          site: "@paul_sinci",
          cardType: "summary_large_image",
        }}
      />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
