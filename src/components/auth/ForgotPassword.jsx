import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { forgotPassword } from "../auth/api"
import "./ForgotPassword.scss"

const BackIcon    = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>)
const MailIcon    = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>)
const CheckCircle = () => (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>)

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email,     setEmail]     = useState("")
  const [emailErr,  setEmailErr]  = useState("")
  const [touched,   setTouched]   = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [success,   setSuccess]   = useState(false)
  const [srvErr,    setSrvErr]    = useState("")
  const [cooldown,  setCooldown]  = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setInterval(() => setCooldown(c => c-1), 1000)
    return () => clearInterval(id)
  }, [cooldown])

  const ve = (v) => !v.trim() ? "Email required" : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "Invalid email" : ""

  const send = async () => {
    setLoading(true); setSrvErr("")
    try {
      // forgotPassword → POST /forgot-password → worker → D1 token save → (email TODO)
      await forgotPassword(email.trim())
      setSuccess(true); setCooldown(60)
    } catch (err) {
      setSrvErr(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); setTouched(true)
    const err = ve(email); setEmailErr(err)
    if (err) return
    await send()
  }

  const ic = () => !touched ? "field-input" : emailErr ? "field-input error" : email ? "field-input success" : "field-input"

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <button className="back-btn" onClick={() => navigate("/login")}><BackIcon/> Back to login</button>

        {success ? (
          <>
            <div className="forgot-success">
              <div className="success-icon-ring"><CheckCircle/></div>
              <h3>Check your inbox.</h3>
              <p>Reset link sent to <strong style={{color:"#f0f0f8"}}>{email}</strong>. Valid for 1 hour.</p>
            </div>
            <div className="resend-row">
              Didn't get it?{" "}
              <button onClick={send} disabled={cooldown>0||loading}>
                {cooldown>0 ? `Resend in ${cooldown}s` : loading ? "Sending…" : "Resend"}
              </button>
            </div>
            <p className="forgot-footer"><Link to="/login">Back to sign in</Link></p>
          </>
        ) : (
          <>
            <div className="forgot-icon-wrap"><MailIcon/></div>
            <div className="forgot-header">
              <h1 className="forgot-title">Reset password</h1>
              <p className="forgot-desc">Enter your email — we'll send a reset link.</p>
            </div>
            {srvErr && <div className="forgot-error" style={{marginBottom:"16px"}}>⚠ {srvErr}</div>}
            <form className="forgot-form" onSubmit={handleSubmit} noValidate>
              <div className="field-group">
                <label className="field-label" htmlFor="fp-email">Email address</label>
                <input id="fp-email" type="email" autoComplete="email" placeholder="you@example.com"
                  className={ic()} value={email}
                  onChange={e => { setEmail(e.target.value); setSrvErr(""); if(touched) setEmailErr(ve(e.target.value)); }}
                  onBlur={() => { setTouched(true); setEmailErr(ve(email)); }}
                  disabled={loading} autoFocus />
                <span className="field-message error-msg">{touched && emailErr ? `⚠ ${emailErr}` : ""}</span>
              </div>
              <button type="submit" className="forgot-submit" disabled={loading}>
                {loading ? <><span className="spinner"/> Sending…</> : "Send Reset Link →"}
              </button>
            </form>
            <p className="forgot-footer">No account? <Link to="/signup">Sign up free</Link></p>
          </>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword