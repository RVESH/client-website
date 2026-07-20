import React, { useState, useCallback } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAuth } from "../../app/context/AuthContext"
import { loginUser } from "./../auth/api"
import "./LoginPage.scss"

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)

const LoginPage = () => {
  const navigate  = useNavigate()
  const location  = useLocation()
  const { login } = useAuth()

  const from = location.state?.from?.pathname || "/dashboard"

  const [values,     setValues]     = useState({ email:"", password:"" })
  const [errors,     setErrors]     = useState({ email:"", password:"" })
  const [touched,    setTouched]    = useState({ email:false, password:false })
  const [showPw,     setShowPw]     = useState(false)
  const [isLoading,  setIsLoading]  = useState(false)
  const [loginError, setLoginError] = useState("")

  const validate = (name, value) => {
    if (name === "email")    return !value.trim() ? "Email required" : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? "Invalid email" : ""
    if (name === "password") return !value ? "Password required" : ""
    return ""
  }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(p => ({ ...p, [name]: value }))
    setLoginError("")
    if (touched[name]) setErrors(p => ({ ...p, [name]: validate(name, value) }))
  }, [touched])

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    setTouched(p => ({ ...p, [name]: true }))
    setErrors(p => ({ ...p, [name]: validate(name, value) }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ email:true, password:true })
    const errs = { email: validate("email", values.email), password: validate("password", values.password) }
    setErrors(errs)
    if (Object.values(errs).some(Boolean)) return

    setIsLoading(true)
    setLoginError("")
    try {
      // loginUser → POST /login → worker → D1 DB → returns { user, token }
      const data = await loginUser(values.email.trim(), values.password)
      login(data.user, data.token)          // AuthContext + localStorage
      navigate(from, { replace: true })
    } catch (err) {
      setLoginError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const ic = (f) => !touched[f] ? "field-input" : errors[f] ? "field-input error" : values[f] ? "field-input success" : "field-input"

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-wordmark">auth<span>.</span>system</span>
          <h1 className="login-title">Welcome back.</h1>
          <p className="login-subtitle">Sign in to continue.</p>
        </div>

        {loginError && (
          <div className="login-error">⚠ {loginError}</div>
        )}

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label className="field-label" htmlFor="l-email">Email</label>
            <input id="l-email" name="email" type="email" autoComplete="email"
              placeholder="you@example.com" className={ic("email")}
              value={values.email} onChange={handleChange} onBlur={handleBlur} disabled={isLoading} />
            <span className="field-message error-msg">{touched.email && errors.email ? `⚠ ${errors.email}` : ""}</span>
          </div>

          <div className="field-group">
            <div className="field-label-row">
              <label className="field-label" htmlFor="l-pw">Password</label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>
            <div className="input-wrapper">
              <input id="l-pw" name="password" type={showPw ? "text" : "password"}
                autoComplete="current-password" placeholder="••••••••"
                className={ic("password")} value={values.password}
                onChange={handleChange} onBlur={handleBlur} disabled={isLoading} />
              <button type="button" className="toggle-btn" onClick={() => setShowPw(v => !v)}>
                {showPw ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <span className="field-message error-msg">{touched.password && errors.password ? `⚠ ${errors.password}` : ""}</span>
          </div>

          <button type="submit" className="login-submit" disabled={isLoading}>
            {isLoading ? <><span className="spinner" /> Signing in…</> : "Sign In →"}
          </button>
        </form>

        <p className="login-footer">
          No account? <Link to="/signup">Create one free</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage