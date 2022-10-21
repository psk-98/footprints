import React, { useState } from "react"
import { closeSymbol, openSymbol, setActive } from "./helpers"
import { motion } from "framer-motion"
import "../../styles/filterbar.css"
import { filterOptionsVariants } from "../../animations/filterbar"
import { updatePriceRange, updateSort } from "../../reducers/params"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../actions/products"
import { updatePanel } from "../../reducers/products"

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
    <div className={panelStatus ? "filter-panel panel-open" : "filter-panel"}>
      <div className="filters-wrapper">
        <div className="price-filter">
          <div className="expand-control">
            <div>Price</div>
            <div onClick={() => setTogglePrice(!togglePrice)}>
              {togglePrice ? closeSymbol(togglePrice) : openSymbol(togglePrice)}
            </div>
          </div>
          <motion.div
            className="price-filter-options"
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
        <div className="sort-by">
          <div className="expand-control">
            <div>Sort by</div>
            <div onClick={() => setToggleSort(!toggleSort)}>
              {toggleSort ? closeSymbol(toggleSort) : openSymbol(toggleSort)}
            </div>
          </div>
          <motion.div
            className="sort-options"
            initial={false}
            animate={toggleSort ? "open" : "closed"}
            variants={filterOptionsVariants}
          >
            <ul>
              <motion.li
                className={
                  setActive(sort, "price")
                    ? "sort-option active"
                    : "sort-option"
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
                    ? "sort-option active"
                    : "sort-option"
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(updateSort("-price"))}
              >
                Price,high to low
              </motion.li>
              <motion.li
                className={
                  setActive(sort, "name") ? "sort-option active" : "sort-option"
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
                    ? "sort-option active"
                    : "sort-option"
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
                    ? "sort-option active"
                    : "sort-option"
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
                    ? "sort-option active"
                    : "sort-option"
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
        <div className="action-btns">
          <button className="apply-btn" onClick={() => handleFilter()}>
            View results
          </button>
          <button className="clear-btn" onClick={() => this.handleReset()}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filterbar
