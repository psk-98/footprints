import { useState } from "react"
import { closeSymbol, openSymbol, setActive } from "./helpers"
import { motion } from "framer-motion"
import { filterOptionsVariants } from "../../animations/filterbar"
import { updatePriceRange, updateSort } from "../../reducers/params"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../actions/products"
import { updatePanel } from "../../reducers/products"
import filterStyles from "../../styles/Filterbar.module.css"

const Filterbar = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const [togglePrice, setTogglePrice] = useState(false)
  const [toPrice, setToPrice] = useState()
  const [fromPrice, setFromPrice] = useState()
  const [toggleSort, setToggleSort] = useState(false)

  const { sort } = state.params
  const { panelStatus } = state.products

  const handleFilter = () => {
    const priceRange = {
      fromPrice,
      toPrice,
    }
    if (fromPrice >= 0 || toPrice > fromPrice)
      dispatch(updatePriceRange(priceRange))

    dispatch(updatePanel())
    dispatch(getProducts())
  }

  return (
    <div
      className={
        panelStatus
          ? `${filterStyles.filterPanel} ${filterStyles.panelOpen}`
          : filterStyles.filterPanel
      }
    >
      <div className={filterStyles.filterWrapper}>
        <div className={filterStyles.priceFilter}>
          <div className={filterStyles.expandControl}>
            <div>Price</div>
            <div onClick={() => setTogglePrice(!togglePrice)}>
              {togglePrice ? closeSymbol(togglePrice) : openSymbol(togglePrice)}
            </div>
          </div>
          <motion.div
            className={filterStyles.priceFilterOptions}
            initial={false}
            animate={togglePrice ? "open" : "closed"}
            variants={filterOptionsVariants}
          >
            <input
              type="number"
              name="fromPrice"
              step="0.01"
              min="0"
              value={fromPrice}
              placeholder="from"
              onChange={(e) => setFromPrice(e.target.value)}
            />
            <input
              type="text"
              name="toPrice"
              placeholder="to"
              value={toPrice}
              step="0.01"
              min="0"
              onChange={(e) => setToPrice(e.target.value)}
            />
          </motion.div>
        </div>
        <div className={filterStyles.sortBy}>
          <div className={filterStyles.expandControl}>
            <div>Sort by</div>
            <div onClick={() => setToggleSort(!toggleSort)}>
              {toggleSort ? closeSymbol(toggleSort) : openSymbol(toggleSort)}
            </div>
          </div>
          <motion.div
            className={filterStyles.sortOptions}
            initial={false}
            animate={toggleSort ? "open" : "closed"}
            variants={filterOptionsVariants}
          >
            <ul>
              <motion.li
                className={
                  setActive(sort, "price")
                    ? `${filterStyles.sortOption} ${filterStyles.active}`
                    : filterStyles.sortOption
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("price"))}
              >
                Price,low to high
              </motion.li>
              <motion.li
                className={
                  setActive(sort, "-price")
                    ? `${filterStyles.sortOption} ${filterStyles.active}`
                    : filterStyles.sortOption
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("-price"))}
              >
                Price,high to low
              </motion.li>
              <motion.li
                className={
                  setActive(sort, "name")
                    ? `${filterStyles.sortOption} ${filterStyles.active}`
                    : filterStyles.sortOption
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("name"))}
              >
                Alphabetically,A-Z
              </motion.li>
              <motion.li
                className={
                  setActive(sort, "-name")
                    ? `${filterStyles.sortOption} ${filterStyles.active}`
                    : filterStyles.sortOption
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("-name"))}
              >
                Alphabetically,Z-A
              </motion.li>
              <motion.li
                className={
                  setActive(sort, "-date_added")
                    ? `${filterStyles.sortOption} ${filterStyles.active}`
                    : filterStyles.sortOption
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("-date_added"))}
              >
                Newest
              </motion.li>
              <motion.li
                className={
                  setActive(sort, "date_added")
                    ? `${filterStyles.sortOption} ${filterStyles.active}`
                    : filterStyles.sortOption
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("date_added"))}
              >
                Oldest
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <div className={filterStyles.actionBtns}>
          <button
            className={filterStyles.applyBtn}
            onClick={() => handleFilter()}
          >
            View results
          </button>
          <button
            className={filterStyles.clearBtn}
            onClick={() => this.handleReset()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filterbar
