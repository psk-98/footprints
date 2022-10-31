import { useDispatch, useSelector } from "react-redux"
import { getNewPage } from "../../actions/products"
import paginationStyles from "../../styles/Products.module.css"

const Pagination = () => {
  const state = useSelector((state) => state)
  const { prevPage, nextPage } = state.products
  const dispatch = useDispatch()

  return (
    <div className={paginationStyles.paginationWrapper}>
      <div className={paginationStyles.paginationNav}>
        <ul className={paginationStyles.paginationList}>
          <li
            className={
              prevPage
                ? `${paginationStyles.paginationLink} ${paginationStyles.active}`
                : paginationStyles.paginationLink
            }
            onClick={() => dispatch(getNewPage(prevPage))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z" />
            </svg>
          </li>
          <li className={paginationStyles.paginationLink}>
            <span></span>
          </li>
          <li
            className={
              nextPage
                ? `${paginationStyles.paginationLink} ${paginationStyles.active}`
                : paginationStyles.paginationLink
            }
            onClick={() => dispatch(getNewPage(nextPage))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pagination
