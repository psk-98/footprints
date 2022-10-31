import axios from "axios"
import { BASE_URL } from "../actions/type"
import { containerVariants } from "../animations/routes"
import { motion } from "framer-motion"
import Featured from "../components/home/Featured"
import Landing from "../components/home/Landing"
import { setProducts } from "../reducers/products"
import { wrapper } from "../store/store"

export default function Home() {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            type: "spring",
            delay: 0.5,
          },
        }}
        exit="exit"
      ></motion.div>
      <Landing />
      <Featured />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await axios.get(`${BASE_URL}/products`)

    const { data } = await res
    store.dispatch(setProducts(data))
  }
)
