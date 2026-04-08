import React, { useState, useCallback } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../app/context/AuthContext"
import { signupUser } from "./../auth/api"
import "./SignupPage.scss"

const EyeIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>)
const EyeOffIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>)
const CheckIcon = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>)

const vf = (n, v, ex={}) => {
  if (n==="name")     return !v.trim() ? "Name required" : v.trim().length<2 ? "Min 2 chars" : ""
  if (n==="email")    return !v.trim() ? "Email required" : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "Invalid email" : ""
  if (n==="password") return !v ? "Password required" : v.length<8 ? "Min 8 chars" : !/\d/.test(v) ? "Need a number" : ""
  if (n==="confirm")  return !v ? "Confirm password" : v!==ex.password ? "Passwords don't match" : ""
  return ""
}
const strength = (p) => { if(!p) return 0; let s=0; if(p.length>=8)s++; if(/[A-Z]/.test(p))s++; if(/\d/.test(p)&&/[^A-Za-z0-9]/.test(p))s++; return Math.max(1,s); }
const sLabel = ["","Weak","Fair","Strong"]
const sCls   = ["","filled-weak","filled-fair","filled-strong"]

const SignupPage = () => {
  const navigate  = useNavigate()
  const { login } = useAuth()

  const [values,  setValues]  = useState({ name:"", email:"", password:"", confirm:"" })
  const [errors,  setErrors]  = useState({ name:"", email:"", password:"", confirm:"" })
  const [touched, setTouched] = useState({ name:false, email:false, password:false, confirm:false })
  const [showPw,  setShowPw]  = useState(false)
  const [showCf,  setShowCf]  = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [gErr,    setGErr]    = useState("")

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(p => ({ ...p, [name]: value }))
    setGErr("")
    if (touched[name]) setErrors(p => ({ ...p, [name]: vf(name, value, { password: name==="confirm" ? values.password : undefined }) }))
    if (name==="password" && touched.confirm) setErrors(p => ({ ...p, confirm: vf("confirm", values.confirm, { password: value }) }))
  }, [touched, values])

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    setTouched(p => ({ ...p, [name]: true }))
    const ex = name==="confirm" ? { password: values.password } : {}
    setErrors(p => ({ ...p, [name]: vf(name, value, ex) }))
  }, [values.password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name:true, email:true, password:true, confirm:true })
    const errs = {
      name:     vf("name",     values.name),
      email:    vf("email",    values.email),
      password: vf("password", values.password),
      confirm:  vf("confirm",  values.confirm, { password: values.password }),
    }
    setErrors(errs)
    if (Object.values(errs).some(Boolean)) return

    setLoading(true); setGErr("")
    try {
      // signupUser → POST /signup → worker → D1 INSERT → { user, token }
      const data = await signupUser(values.name.trim(), values.email.trim(), values.password)
      login(data.user, data.token)
      setSuccess(true)
      setTimeout(() => navigate("/dashboard", { replace:true }), 1200)
    } catch (err) {
      setGErr(err.message)
    } finally {
      setLoading(false)
    }
  }

  const ic = (f) => !touched[f] ? "field-input" : errors[f] ? "field-input error" : values[f] ? "field-input success" : "field-input"
  const str = strength(values.password)

  if (success) return (
    <div className="signup-page"><div className="signup-card">
      <div className="signup-success">
        <div className="success-icon"><CheckIcon /></div>
        <h3>Account created!</h3>
        <p>Taking you to dashboard…</p>
      </div>
    </div></div>
  )

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-header">
          <span className="signup-badge">New account</span>
          <h1 className="signup-title">Create account</h1>
          <p className="signup-subtitle">Join in seconds. No credit card.</p>
        </div>

        {gErr && <div className="global-error">⚠ {gErr}</div>}

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label className="field-label" htmlFor="s-name">Full name</label>
            <input id="s-name" name="name" type="text" autoComplete="name" placeholder="Ada Lovelace"
              className={ic("name")} value={values.name} onChange={handleChange} onBlur={handleBlur} disabled={loading} />
            <span className="field-message error-msg">{touched.name && errors.name ? `⚠ ${errors.name}` : ""}</span>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="s-email">Email address</label>
            <input id="s-email" name="email" type="email" autoComplete="email" placeholder="ada@example.com"
              className={ic("email")} value={values.email} onChange={handleChange} onBlur={handleBlur} disabled={loading} />
            <span className="field-message error-msg">{touched.email && errors.email ? `⚠ ${errors.email}` : ""}</span>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="s-pw">Password</label>
            <div className="input-wrapper">
              <input id="s-pw" name="password" type={showPw?"text":"password"} autoComplete="new-password"
                placeholder="Min 8 chars + number" className={ic("password")}
                value={values.password} onChange={handleChange} onBlur={handleBlur} disabled={loading} />
              <button type="button" className="toggle-btn" onClick={() => setShowPw(v => !v)}>{showPw?<EyeOffIcon/>:<EyeIcon/>}</button>
            </div>
            {values.password && <div className="strength-bar">{[1,2,3].map(i=><span key={i} className={i<=str?sCls[str]:""}/>)}</div>}
            <span className="field-message">
              {touched.password && errors.password ? <span className="error-msg">⚠ {errors.password}</span>
               : values.password && !errors.password ? <span className="success-msg">✓ {sLabel[str]}</span> : ""}
            </span>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="s-cf">Confirm password</label>
            <div className="input-wrapper">
              <input id="s-cf" name="confirm" type={showCf?"text":"password"} autoComplete="new-password"
                placeholder="Repeat password" className={ic("confirm")}
                value={values.confirm} onChange={handleChange} onBlur={handleBlur} disabled={loading} />
              <button type="button" className="toggle-btn" onClick={() => setShowCf(v => !v)}>{showCf?<EyeOffIcon/>:<EyeIcon/>}</button>
            </div>
            <span className="field-message">
              {touched.confirm && errors.confirm ? <span className="error-msg">⚠ {errors.confirm}</span>
               : touched.confirm && values.confirm && !errors.confirm ? <span className="success-msg">✓ Match</span> : ""}
            </span>
          </div>

          <button type="submit" className="signup-submit" disabled={loading}>
            {loading ? <><span className="spinner"/> Creating…</> : "Create Account →"}
          </button>
        </form>

        <p className="signup-footer">Have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  )
}

export default SignupPage