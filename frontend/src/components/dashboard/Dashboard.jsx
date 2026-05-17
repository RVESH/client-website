import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../app/context/AuthContext"
import { updateProfile, changePassword, adminDeleteUser } from "./../auth/api"
import "./Dashboard.scss"

const EyeIcon    = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>)
const EyeOffIcon = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>)

const initials = (n="") => n.trim().split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase()
const fmtDate  = (d)    => d ? new Date(d).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"}) : "—"

const Dashboard = () => {
  const { user, token, logout, updateUser } = useAuth()
  const navigate = useNavigate()

  // Profile
  const [prof,    setProf]    = useState({ name: user?.name||"", email: user?.email||"" })
  const [profErr, setProfErr] = useState({})
  const [profMsg, setProfMsg] = useState(null)  // {type,text}
  const [profLoad,setProfLoad]= useState(false)

  // Password
  const [pw,     setPw]     = useState({ old:"", newP:"", confirm:"" })
  const [showPw, setShowPw] = useState({ old:false, newP:false, confirm:false })
  const [pwErr,  setPwErr]  = useState({})
  const [pwMsg,  setPwMsg]  = useState(null)
  const [pwLoad, setPwLoad] = useState(false)

  // Delete
  const [delModal, setDelModal] = useState(false)
  const [delLoad,  setDelLoad]  = useState(false)

  const handleLogout = () => { logout(); navigate("/login"); }

  // ── Profile submit ────────────────────────────────────────────
  const submitProfile = async (e) => {
    e.preventDefault()
    const errs = {}
    if (!prof.name.trim()) errs.name = "Name required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(prof.email)) errs.email = "Invalid email"
    if (Object.keys(errs).length) { setProfErr(errs); return }

    setProfLoad(true); setProfMsg(null)
    try {
      // updateProfile → PUT /update-profile → worker → D1 UPDATE → returns user
      const data = await updateProfile(token, { name: prof.name.trim(), email: prof.email.trim() })
      updateUser(data.user)
      setProfMsg({ type:"success", text:"Profile updated!" })
    } catch (err) {
      setProfMsg({ type:"error", text: err.message })
    } finally { setProfLoad(false) }
  }

  // ── Password submit ───────────────────────────────────────────
  const submitPassword = async (e) => {
    e.preventDefault()
    const errs = {}
    if (!pw.old)                        errs.old     = "Current password required"
    if (pw.newP.length < 8)             errs.newP    = "Min 8 chars"
    if (!/\d/.test(pw.newP))            errs.newP    = "Need a number"
    if (pw.newP !== pw.confirm)         errs.confirm = "Passwords don't match"
    if (Object.keys(errs).length) { setPwErr(errs); return }

    setPwLoad(true); setPwMsg(null)
    try {
      // changePassword → PUT /change-password → worker verifies old → hashes new → D1 UPDATE
      await changePassword(token, pw.old, pw.newP)
      setPw({ old:"", newP:"", confirm:"" })
      setPwMsg({ type:"success", text:"Password changed!" })
    } catch (err) {
      setPwMsg({ type:"error", text: err.message })
    } finally { setPwLoad(false) }
  }

  // ── Delete account ────────────────────────────────────────────
  const handleDelete = async () => {
    setDelLoad(true)
    try {
      // adminDeleteUser → DELETE /admin/user/:id → worker → D1 DELETE
      await adminDeleteUser(token, user.id)
      logout(); navigate("/login")
    } catch (err) {
      setDelModal(false); alert(err.message)
    } finally { setDelLoad(false) }
  }

  const tp = (f) => setShowPw(p => ({ ...p, [f]: !p[f] }))

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* Topbar */}
        <div className="dashboard-topbar">
          <span className="dashboard-brand">auth<span>.</span>dashboard</span>
          <div className="topbar-actions">
            {user?.is_admin && <Link to="/admin" className="admin-badge">⚡ Admin Panel</Link>}
            <button className="logout-btn" onClick={handleLogout}>Sign out</button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="dash-card">
          <div className="card-title">My Profile</div>
          <div className="profile-info">
            <div className="avatar">{initials(user?.name)}</div>
            <div className="profile-meta">
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
              <span className="join-date">Joined {fmtDate(user?.created_at)}</span>
            </div>
          </div>

          {profMsg && <div className={`flash flash-${profMsg.type}`} style={{marginBottom:20}}>{profMsg.type==="success"?"✓":"⚠"} {profMsg.text}</div>}

          <form className="dash-form" onSubmit={submitProfile} noValidate>
            <div className="form-row">
              <div className="field-group">
                <label className="field-label">Full Name</label>
                <input className={`field-input${profErr.name?" error":""}`} type="text" value={prof.name}
                  placeholder="Your name" onChange={e=>setProf(p=>({...p,name:e.target.value}))} disabled={profLoad} />
                <span className="field-message error-msg">{profErr.name||""}</span>
              </div>
              <div className="field-group">
                <label className="field-label">Email Address</label>
                <input className={`field-input${profErr.email?" error":""}`} type="email" value={prof.email}
                  placeholder="your@email.com" onChange={e=>setProf(p=>({...p,email:e.target.value}))} disabled={profLoad} />
                <span className="field-message error-msg">{profErr.email||""}</span>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={profLoad}>
                {profLoad?<><span className="spinner"/> Saving…</>:"Save Changes"}
              </button>
            </div>
          </form>
        </div>

        {/* Password Card */}
        <div className="dash-card" style={{animationDelay:"100ms"}}>
          <div className="card-title">Change Password</div>
          {pwMsg && <div className={`flash flash-${pwMsg.type}`} style={{marginBottom:20}}>{pwMsg.type==="success"?"✓":"⚠"} {pwMsg.text}</div>}

          <form className="dash-form" onSubmit={submitPassword} noValidate>
            <div className="field-group">
              <label className="field-label">Current Password</label>
              <div className="input-wrapper">
                <input className={`field-input${pwErr.old?" error":""}`} type={showPw.old?"text":"password"}
                  value={pw.old} placeholder="••••••••" disabled={pwLoad}
                  onChange={e=>setPw(p=>({...p,old:e.target.value}))} />
                <button type="button" className="toggle-btn" onClick={()=>tp("old")}>{showPw.old?<EyeOffIcon/>:<EyeIcon/>}</button>
              </div>
              <span className="field-message error-msg">{pwErr.old||""}</span>
            </div>

            <div className="form-row">
              <div className="field-group">
                <label className="field-label">New Password</label>
                <div className="input-wrapper">
                  <input className={`field-input${pwErr.newP?" error":""}`} type={showPw.newP?"text":"password"}
                    value={pw.newP} placeholder="Min 8 + number" disabled={pwLoad}
                    onChange={e=>setPw(p=>({...p,newP:e.target.value}))} />
                  <button type="button" className="toggle-btn" onClick={()=>tp("newP")}>{showPw.newP?<EyeOffIcon/>:<EyeIcon/>}</button>
                </div>
                <span className="field-message error-msg">{pwErr.newP||""}</span>
              </div>
              <div className="field-group">
                <label className="field-label">Confirm New Password</label>
                <div className="input-wrapper">
                  <input className={`field-input${pwErr.confirm?" error":""}`} type={showPw.confirm?"text":"password"}
                    value={pw.confirm} placeholder="Repeat" disabled={pwLoad}
                    onChange={e=>setPw(p=>({...p,confirm:e.target.value}))} />
                  <button type="button" className="toggle-btn" onClick={()=>tp("confirm")}>{showPw.confirm?<EyeOffIcon/>:<EyeIcon/>}</button>
                </div>
                <span className="field-message error-msg">{pwErr.confirm||""}</span>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={pwLoad}>
                {pwLoad?<><span className="spinner"/> Updating…</>:"Update Password"}
              </button>
            </div>
          </form>
        </div>

        {/* Danger Zone */}
        <div className="danger-zone">
          <div className="danger-title">Danger Zone</div>
          <p className="danger-desc">Permanently delete your account and all data. Cannot be undone.</p>
          <button className="btn-danger" onClick={()=>setDelModal(true)}>Delete My Account</button>
        </div>
      </div>

      {/* Delete Modal */}
      {delModal && (
        <div className="modal-overlay" onClick={()=>setDelModal(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3>Are you sure?</h3>
            <p>Your account and all data will be permanently deleted from the database.</p>
            <div className="modal-actions">
              <button className="btn-ghost" onClick={()=>setDelModal(false)} disabled={delLoad}>Cancel</button>
              <button className="btn-danger" onClick={handleDelete} disabled={delLoad}>{delLoad?"Deleting…":"Yes, Delete"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard