import React, { useState, useEffect, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../app/context/AuthContext"
import { adminGetUsers, adminToggleBlock, adminDeleteUser } from "./../auth/api"
import "./AdminPanel.scss"

const SearchIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>)

const initials = (n="") => n.trim().split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase()
const fmtDate  = (d)    => d ? new Date(d).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"}) : "—"

const AdminPanel = () => {
  const { user, token, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => { if (!isAdmin) navigate("/dashboard", { replace:true }) }, [isAdmin, navigate])

  const [users,    setUsers]    = useState([])
  const [loading,  setLoading]  = useState(true)
  const [fetchErr, setFetchErr] = useState("")
  const [search,   setSearch]   = useState("")
  const [actionId, setActionId] = useState(null)
  const [delTarget,setDelTarget]= useState(null)
  const [delLoad,  setDelLoad]  = useState(false)

  // Fetch all users from D1 via worker
  useEffect(() => {
    if (!isAdmin) return
    setLoading(true); setFetchErr("")
    // adminGetUsers → GET /admin/users → worker → SELECT * FROM users → returns array
    adminGetUsers(token)
      .then(data => setUsers(data.users || []))
      .catch(err => setFetchErr(err.message))
      .finally(() => setLoading(false))
  }, [token, isAdmin])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return q ? users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) : users
  }, [users, search])

  const stats = useMemo(() => ({
    total:   users.length,
    active:  users.filter(u=>!u.is_blocked).length,
    blocked: users.filter(u=> u.is_blocked).length,
    admins:  users.filter(u=> u.is_admin).length,
  }), [users])

  // Block / Unblock → PUT /admin/block/:id → worker → D1 UPDATE is_blocked
  const toggleBlock = async (u) => {
    setActionId(u.id)
    try {
      const data = await adminToggleBlock(token, u.id)
      setUsers(prev => prev.map(x => x.id===u.id ? { ...x, is_blocked: data.is_blocked } : x))
    } catch (err) { alert(err.message) }
    finally { setActionId(null) }
  }

  // Delete → DELETE /admin/user/:id → worker → D1 DELETE
  const handleDelete = async () => {
    if (!delTarget) return
    setDelLoad(true)
    try {
      await adminDeleteUser(token, delTarget.id)
      setUsers(prev => prev.filter(u => u.id !== delTarget.id))
      setDelTarget(null)
    } catch (err) { alert(err.message) }
    finally { setDelLoad(false) }
  }

  return (
    <div className="admin-page">
      <div className="admin-container">

        <div className="admin-topbar">
          <span className="admin-brand">auth<span>.</span>admin</span>
          <Link to="/dashboard" className="back-link">← My Dashboard</Link>
        </div>

        <div className="stats-row">
          <div className="stat-card stat-primary"><span className="stat-label">Total</span><span className="stat-value">{stats.total}</span></div>
          <div className="stat-card stat-success"><span className="stat-label">Active</span><span className="stat-value">{stats.active}</span></div>
          <div className="stat-card stat-error"  ><span className="stat-label">Blocked</span><span className="stat-value">{stats.blocked}</span></div>
          <div className="stat-card stat-warning" ><span className="stat-label">Admins</span><span className="stat-value">{stats.admins}</span></div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <span className="admin-card-title">All Users</span>
            <div className="search-wrap">
              <SearchIcon/>
              <input className="search-input" type="text" placeholder="Search name or email…"
                value={search} onChange={e=>setSearch(e.target.value)} />
            </div>
          </div>

          <div className="table-wrap">
            {loading ? (
              <div className="table-loading"><span className="spinner-sm"/> Loading from database…</div>
            ) : fetchErr ? (
              <div className="table-empty" style={{color:"#ff4757"}}>⚠ {fetchErr}</div>
            ) : filtered.length===0 ? (
              <div className="table-empty">{search ? "No matches." : "No users yet."}</div>
            ) : (
              <table className="users-table">
                <thead><tr><th>User</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead>
                <tbody>
                  {filtered.map(u => (
                    <tr key={u.id}>
                      <td>
                        <div className="user-name-cell">
                          <div className="table-avatar">{initials(u.name)}</div>
                          <div>
                            <div className="user-name">{u.name}</div>
                            <div className="user-email">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {u.is_admin   ? <span className="status-badge admin">Admin</span>
                         : u.is_blocked ? <span className="status-badge blocked">Blocked</span>
                         :               <span className="status-badge active">Active</span>}
                      </td>
                      <td>{fmtDate(u.created_at)}</td>
                      <td>
                        {u.id===user?.id ? <span style={{color:"#55556a",fontSize:12}}>You</span>
                         : u.is_admin   ? <span style={{color:"#55556a",fontSize:12}}>—</span>
                         : (
                          <div className="table-actions">
                            <button className={u.is_blocked?"action-btn unblock-btn":"action-btn block-btn"}
                              onClick={()=>toggleBlock(u)} disabled={actionId===u.id}>
                              {actionId===u.id ? "…" : u.is_blocked ? "Unblock" : "Block"}
                            </button>
                            <button className="action-btn delete-btn"
                              onClick={()=>setDelTarget({id:u.id,name:u.name})} disabled={actionId===u.id}>
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {delTarget && (
        <div className="modal-overlay" onClick={()=>setDelTarget(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3>Delete user?</h3>
            <p><strong style={{color:"#f0f0f8"}}>{delTarget.name}</strong>'s account will be permanently deleted from the database.</p>
            <div className="modal-actions">
              <button className="btn-ghost" onClick={()=>setDelTarget(null)} disabled={delLoad}>Cancel</button>
              <button className="btn-danger-solid" onClick={handleDelete} disabled={delLoad}>{delLoad?"Deleting…":"Delete User"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel