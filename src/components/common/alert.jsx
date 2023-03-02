import { AnimatePresence, motion } from "framer-motion"

export default function Alert({ msg, isAlert }) {
  return (
    <AnimatePresence mode="wait">
      {isAlert && (
        <motion.div
          className="alertWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="alert">{msg}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
