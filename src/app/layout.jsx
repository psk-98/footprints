import { containerVariants } from "@/animations/routes"
import Footer from "@/components/Footer/Footer"
import { MotionDiv } from "@/components/MotionComponents/MotionComponents"
import Nav from "@/components/Nav/Nav"
import { store } from "@/store/store"
import { Montserrat } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import Loading from "./loading"
import StoreProvider from "./storeProvider"

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
})

export const metadata = {
  title: { default: "Footprints", template: "%s | Footprints" },
  twitter: {
    card: "summary_large_image",
  },
  description: "Mock online sneaker store by Paul Khoza",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider store={store}>
          <Nav />
          <MotionDiv
            className="container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </MotionDiv>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
