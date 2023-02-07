import Layout from "@/components/layout/Layout"
import { wrapper } from "@/store/store"
import "@/styles/globals.css"
import { AnimatePresence } from "framer-motion"
import { Provider } from "react-redux"

function App({ Component, router, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Layout>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...props.pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Provider>
  )
}

export default App
