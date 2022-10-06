import React from "react"

const Top = () => {
  return (
    <div className="nav-top">
      <div className="burger-wrapper">
        <div className="burger">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
      <div className="logo">TwinningZA</div>
      <div className="nav-list">
        <div className="nav-item">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16L13.0199 12.8474C14.2052 11.6196 14.9005 10.0006 14.9748 8.29554C15.0491 6.5905 14.4971 4.91719 13.4231 3.59098C12.349 2.26477 10.8269 1.37728 9.14379 1.09578C7.46065 0.814276 5.73268 1.15821 4.28557 2.06275C2.83846 2.9673 1.77217 4.36997 1.28767 6.0064C0.803171 7.64282 0.93393 9.39997 1.6553 10.9466C2.37667 12.4933 3.63883 13.7227 5.20388 14.403C6.76893 15.0834 8.52877 15.1677 10.1517 14.6402"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item">
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 16H1V3.67857H13V13.8571" stroke="black" />
            <path
              d="M4.5 3.14286V2.07143V2.07143C4.5 1.47969 4.97969 1 5.57143 1H6H8V1C8.55228 1 9 1.44772 9 2V2.07143V3.14286"
              stroke="black"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Top
