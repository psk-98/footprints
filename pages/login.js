import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/accounts"
import authStyles from "../styles/Accounts.module.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const router = useRouter()
  const { accounts } = state
  useEffect(() => {
    if (accounts?.isAuthenticated) router.push("/")
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      dispatch(login({ username: email, password }))
    } else {
      console.log("empty")
    }
  }

  return (
    <div className={authStyles.theForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={authStyles.formGroup}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={authStyles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={authStyles.subBtn}>
          Login
        </button>
      </form>
      <div>
        Don't have an account?
        <Link className={authStyles.formRedirect} href="/register">
          register
        </Link>
      </div>
    </div>
  )
}

export default Login
