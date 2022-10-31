import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import { Provider } from "react-redux"
import { wrapper, store } from "../store/store"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
