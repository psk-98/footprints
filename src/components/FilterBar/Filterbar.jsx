"use client"

import {
  activeVariants,
  appearVariants,
  filterOptionsVariants,
  filterOptionVariants,
  panelVariants,
} from "@/animations/filterbar"
import { containerVariants } from "@/animations/routes"
import {
  aToZName,
  highLowPrice,
  lowHighPrice,
  newest,
  oldest,
  zToAName,
} from "@/utils/productSortTypes"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"
import { sortFilter } from "../../../public/svgs"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import { downArrow, setActive, upArrow } from "../Products/helpers"
import styles from "./Filterbar.module.css"

export default function Filterbar({ count }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [isPanelOpen, setPanelOpen] = useState(false)
  const [togglePrice, setTogglePrice] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)
  const [priceFrom, setPriceFrom] = useState(null)
  const [priceTo, setPriceTo] = useState(null)
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || newest)

  // const createQueryString = useCallback(
  //   (name, value) => {
  //     const params = new URLSearchParams(searchParams)
  //     params.set(name, value)

  //     return params.toString()
  //   },
  //   [searchParams]
  // )

  const updateFilters = () => {
    let tempParams = {}
    if (priceFrom >= 0 && priceFrom != null) tempParams.priceFrom = priceFrom
    if (priceTo >= 0 && priceTo > priceFrom) tempParams.priceTo = priceTo
    tempParams.sort = sortBy

    return tempParams
  }

  return (
    <>
      <MotionDiv
        className={styles.settingsWrapper}
        variants={containerVariants}
      >
        <div className={styles.sortFilter} onClick={() => setPanelOpen(true)}>
          {sortFilter}
          filter & sort
        </div>
        <div className={styles.numShow}>{count} products</div>
      </MotionDiv>
      <motion.div
        className={styles.filterPanel}
        initial="open"
        animate={isPanelOpen ? "open" : "closed"}
        variants={panelVariants}
      >
        <motion.div
          className={styles.filterWrapper}
          initial="dis"
          animate={isPanelOpen ? "appear" : "dis"}
          variants={appearVariants}
        >
          <div className={styles.panelControls}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="8"
              fill="none"
              viewBox="0 0 23 8"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPanelOpen(false)}
            >
              <path
                fill="#000"
                d="M.643 3.896a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.704 4.25l2.829-2.828a.5.5 0 10-.708-.708L.643 3.896zm21.365-.146H.997v1h21.011v-1z"
              ></path>
            </motion.svg>
          </div>
          <div className={styles.priceFilter}>
            <div
              className={styles.expandControl}
              onClick={() => setTogglePrice(!togglePrice)}
            >
              <div>Price</div>
              <div>
                {upArrow(togglePrice)} {downArrow(togglePrice)}
              </div>
            </div>
            <motion.div
              className={styles.priceFilterOptions}
              initial={false}
              animate={togglePrice ? "open" : "closed"}
              variants={filterOptionsVariants}
            >
              <motion.div variants={filterOptionVariants}>
                <input
                  type="number"
                  name="fromPrice"
                  step="0.01"
                  min="0"
                  placeholder="from"
                  onChange={(e) => setPriceFrom(e.target.value)}
                />
              </motion.div>
              <span>-</span>
              <motion.div variants={filterOptionVariants}>
                <input
                  type="text"
                  name="toPrice"
                  placeholder="to"
                  step="0.01"
                  min="0"
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className={styles.sortBy}>
            <div
              className={styles.expandControl}
              onClick={() => setToggleSort(!toggleSort)}
            >
              <div>Sort by</div>
              <div>
                {upArrow(toggleSort)} {downArrow(toggleSort)}
              </div>
            </div>
            <motion.div
              className={styles.sortOptions}
              initial={false}
              animate={toggleSort ? "open" : "closed"}
              variants={filterOptionsVariants}
            >
              <motion.div
                className={styles.sortOption}
                initial={{ opacity: 1 }}
                animate={setActive(sortBy, lowHighPrice) ? "active" : "not"}
                variants={activeVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(lowHighPrice)}
              >
                Price, low to high
              </motion.div>
              <motion.div
                className={styles.sortOption}
                initial={false}
                animate={setActive(sortBy, highLowPrice) ? "active" : "not"}
                variants={activeVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(highLowPrice)}
              >
                Price, high to low
              </motion.div>
              <motion.div
                className={styles.sortOption}
                initial={false}
                animate={setActive(sortBy, aToZName) ? "active" : "not"}
                variants={activeVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(aToZName)}
              >
                Alphabetically, A-Z
              </motion.div>
              <motion.div
                className={styles.sortOption}
                initial={false}
                animate={setActive(sortBy, zToAName) ? "active" : "not"}
                variants={activeVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(zToAName)}
              >
                Alphabetically, Z-A
              </motion.div>
              <motion.div
                className={styles.sortOption}
                initial={false}
                animate={setActive(sortBy, newest) ? "active" : "not"}
                variants={activeVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(newest)}
              >
                Newest
              </motion.div>
              <motion.div
                className={styles.sortOption}
                initial={false}
                animate={setActive(sortBy, oldest) ? "active" : "not"}
                variants={activeVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(oldest)}
              >
                Oldest
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <div className={styles.panelReset}>
          <Link href={{ pathname: pathname, query: updateFilters() }}>
            <motion.div
              className={styles.applyBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="dis"
              animate={isPanelOpen ? "appear" : "dis"}
              variants={appearVariants}
            >
              apply
            </motion.div>
          </Link>
          <Link href={{ pathname: pathname, query: { sort: newest } }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="dis"
              animate={isPanelOpen ? "appear" : "dis"}
              variants={appearVariants}
            >
              Reset
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </>
  )
}
