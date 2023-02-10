import { useState } from "react"
import Sidebar from "./Sidebar"
import NavTop from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <NavTop
        toggle={toggle}
        setToggle={setToggle}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <Sidebar setToggle={setToggle} toggle={toggle} />
    </>
  )
}
