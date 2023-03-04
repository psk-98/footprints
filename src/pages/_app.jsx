import Layout from "@/components/layout/Layout"
import { wrapper } from "@/store/store"
import "@/styles/globals.css"
import { AnimatePresence } from "framer-motion"
import { Provider } from "react-redux"

function App({ Component, router, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2VNZVQ54PG"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{page_path: window.location.pathname,} );`,
        }}
      />

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
    </>
  )
}

export default App
