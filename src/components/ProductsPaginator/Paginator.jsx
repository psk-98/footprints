import Link from "next/link"
import styles from "./Paginator.module.css"

export default function Paginator({ previous, next, props }) {
  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.paginationNav}>
        <ul className={styles.paginationList}>
          <li
            className={
              previous
                ? `${styles.paginationLink} ${styles.active}`
                : styles.paginationLink
            }
          >
            <Link
              href={{
                pathname: `/products/${props?.params?.slug}`,
                query: {
                  ...props?.searchParams,
                  page: (parseInt(props?.searchParams?.page) - 1).toString(),
                },
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z" />
              </svg>
            </Link>
          </li>
          <li className={styles.paginationLink}>
            <span></span>
          </li>
          <li
            className={
              next
                ? `${styles.paginationLink} ${styles.active}`
                : styles.paginationLink
            }
          >
            <Link
              href={{
                pathname: `/products/${props?.params?.slug}`,
                query: {
                  ...props?.searchParams,
                  page: (parseInt(props?.searchParams?.page) + 1).toString(),
                },
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
