import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSubscription } from "./context/Subscriptioncontext";
import "./PaymentPage.scss";

// ── Step: Method selection ────────────────────────────────────
const MethodSelect = ({ price, onSelect }) => {
  const [active, setActive] = useState("upi");
  const METHODS = [
    { id: "card", icon: "💳", label: "Credit / Debit Card", sub: "Visa, Mastercard, RuPay" },
    { id: "upi",  icon: "📱", label: "UPI",                 sub: "Google Pay, PhonePe, Paytm" },
    { id: "nb",   icon: "🏦", label: "Net Banking",         sub: "All major Indian banks" },
  ];
  return (
    <div className="pg-step">
      <p className="pg-select-label">Select payment method</p>
      <div className="pg-methods">
        {METHODS.map(m => (
          <div key={m.id} className={`pg-method${active===m.id?" pg-method--active":""}`} onClick={() => setActive(m.id)}>
            <span className="pg-method__icon">{m.icon}</span>
            <div><p className="pg-method__label">{m.label}</p><p className="pg-method__sub">{m.sub}</p></div>
            <span className="pg-method__radio">{active===m.id?"🔵":"⚪"}</span>
          </div>
        ))}
      </div>
      <button className="pg-btn" onClick={() => onSelect(active)}>Continue →</button>
    </div>
  );
};

// ── Step: UPI ─────────────────────────────────────────────────
const UpiStep = ({ price, onPay, onBack }) => {
  const [sel, setSel]       = useState(null);
  const [loading, setLoading] = useState(false);
  const APPS = [
    { id:"gpay",    icon:"🟢", label:"Google Pay" },
    { id:"phonepe", icon:"🟣", label:"PhonePe" },
    { id:"paytm",   icon:"🔵", label:"Paytm" },
  ];
  const proceed = () => {
    if (!sel) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); onPay(); }, 1800);
  };
  return (
    <div className="pg-step">
      <p className="pg-select-label">Choose UPI App</p>
      <div className="pg-upi-apps">
        {APPS.map(a => (
          <div key={a.id} className={`pg-upi-app${sel===a.id?" pg-upi-app--active":""}`} onClick={() => setSel(a.id)}>
            <span style={{fontSize:28}}>{a.icon}</span>
            <span className="pg-upi-app__label">{a.label}</span>
          </div>
        ))}
      </div>
      {loading
        ? <div className="pg-fetching"><div className="pg-spinner"/><p>Fetching UPI Apps…</p></div>
        : <button className="pg-btn" onClick={proceed} disabled={!sel}>Proceed</button>
      }
      <button className="pg-back-btn" onClick={onBack}>← Change method</button>
    </div>
  );
};

// ── Step: Card ────────────────────────────────────────────────
const CardStep = ({ price, onPay, onBack }) => {
  const [c, setC] = useState({ number:"", expiry:"", cvv:"" });
  const [err, setErr] = useState("");
  const fmt    = v => v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
  const fmtExp = v => { const d=v.replace(/\D/g,"").slice(0,4); return d.length>2?d.slice(0,2)+"/"+d.slice(2):d; };
  const pay = () => {
    if (c.number.replace(/\s/g,"").length<16) { setErr("Enter valid 16-digit card number"); return; }
    if (c.expiry.length<5)                    { setErr("Enter expiry MM/YY"); return; }
    if (c.cvv.length<3)                       { setErr("Enter 3-digit CVV"); return; }
    setErr(""); onPay();
  };
  return (
    <div className="pg-step">
      <p className="pg-select-label">Enter Card Details</p>
      <div className="pg-card-form">
        <div className="pg-field"><label>Card Number</label>
          <input placeholder="1234 5678 9012 3456" value={c.number} onChange={e=>setC(p=>({...p,number:fmt(e.target.value)}))}/>
        </div>
        <div className="pg-field-row">
          <div className="pg-field"><label>MM/YY</label>
            <input placeholder="MM/YY" value={c.expiry} onChange={e=>setC(p=>({...p,expiry:fmtExp(e.target.value)}))}/>
          </div>
          <div className="pg-field"><label>CVV</label>
            <input placeholder="•••" type="password" maxLength={3} value={c.cvv} onChange={e=>setC(p=>({...p,cvv:e.target.value.replace(/\D/g,"")}))}/>
          </div>
        </div>
        {err && <p className="pg-field-err">⚠ {err}</p>}
      </div>
      <button className="pg-btn" onClick={pay}>🔒 Pay Securely ₹{price}</button>
      <button className="pg-back-btn" onClick={onBack}>← Change method</button>
    </div>
  );
};

// ── Step: Net Banking ─────────────────────────────────────────
const NetBankingStep = ({ price, onPay, onBack }) => {
  const [bank, setBank] = useState(null);
  const BANKS = ["SBI","HDFC","ICICI","Axis","Kotak","PNB","BOB","Canara"];
  return (
    <div className="pg-step">
      <p className="pg-select-label">Select Your Bank</p>
      <div className="pg-banks">
        {BANKS.map(b => (
          <div key={b} className={`pg-bank${bank===b?" pg-bank--active":""}`} onClick={() => setBank(b)}>
            🏛 {b}
          </div>
        ))}
      </div>
      <button className="pg-btn" onClick={onPay} disabled={!bank}>🔒 Pay Securely ₹{price}</button>
      <button className="pg-back-btn" onClick={onBack}>← Change method</button>
    </div>
  );
};

// ── Step: Processing ──────────────────────────────────────────
const ProcessingStep = () => (
  <div className="pg-processing">
    <div className="pg-spinner--lg"/>
    <h2>Processing Payment</h2>
    <p>Please wait, do not close this page…</p>
  </div>
);

// ── Step: Success ─────────────────────────────────────────────
const SuccessStep = ({ onDashboard }) => (
  <div className="pg-result pg-result--success">
    <div className="pg-result__icon">✅</div>
    <h2>Payment Successful!</h2>
    <p>Your subscription is now active. Enjoy exclusive content! 🎉</p>
    <button className="pg-btn" onClick={onDashboard}>Go to Dashboard</button>
  </div>
);

// ── Step: Fail ────────────────────────────────────────────────
const FailStep = ({ onRetry, onCancel }) => (
  <div className="pg-result pg-result--fail">
    <div className="pg-result__icon">❌</div>
    <h2>Payment Failed</h2>
    <p>Something went wrong. Please try again or use a different method.</p>
    <button className="pg-btn" onClick={onRetry}>Retry Payment</button>
    <button className="pg-back-btn" onClick={onCancel}>Cancel</button>
  </div>
);

// ── Step: Cancel feedback ─────────────────────────────────────
const CancelStep = ({ onSubmit, onSkip }) => {
  const [reason, setReason] = useState("");
  const REASONS = ["Too expensive","Will pay later","Changed my mind","Technical issue","Other"];
  return (
    <div className="pg-cancel-step">
      <div className="pg-result__icon">😕</div>
      <h2>Why did you cancel?</h2>
      <p>Your feedback helps us improve.</p>
      <div className="pg-reasons">
        {REASONS.map(r => (
          <div key={r} className={`pg-reason${reason===r?" pg-reason--active":""}`} onClick={() => setReason(r)}>{r}</div>
        ))}
      </div>
      <button className="pg-btn" onClick={() => onSubmit(reason)} disabled={!reason}>Submit Feedback</button>
      <button className="pg-back-btn" onClick={onSkip}>Skip →</button>
    </div>
  );
};

// =============================================================================
// MAIN PaymentPage
// =============================================================================
const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activateSubscription } = useSubscription();

  const product = location.state?.product || { name: "Premium Plan", price: "499" };

  const [step,   setStep]   = useState("method");
  const [method, setMethod] = useState(null);

  const startProcessing = () => {
    setStep("processing");
    setTimeout(() => {
      const fail = Math.random() < 0.08;
      if (fail) { setStep("fail"); }
      else { activateSubscription(product); setStep("success"); }
    }, 2200);
  };

  const handleMethodSelect = (m) => { setMethod(m); setStep(m); };

  const showHeader  = !["success","processing"].includes(step);
  const showAmount  = ["method","upi","card","nb"].includes(step);
  const showTrust   = ["method","upi","card","nb"].includes(step);

  return (
    <div className="pg-page">
      {/* Header */}
      {showHeader && (
        <div className="pg-header">
          <button className="pg-header__back" onClick={() => navigate(-1)}>←</button>
          <div className="pg-header__brand">
            <span className="pg-header__dot"/>
            Sarahaf Pay
          </div>
          <button className="pg-header__cancel" onClick={() => setStep("cancel")}>✕</button>
        </div>
      )}

      {/* Amount pill */}
      {showAmount && (
        <div className="pg-amount-pill">
          <span className="pg-amount-pill__name">{product.name}</span>
          <span className="pg-amount-pill__price">₹{product.price}</span>
        </div>
      )}

      {/* Step content */}
      <div className="pg-content">
        {step==="method"     && <MethodSelect    price={product.price} onSelect={handleMethodSelect}/>}
        {step==="upi"        && <UpiStep         price={product.price} onPay={startProcessing} onBack={() => setStep("method")}/>}
        {step==="card"       && <CardStep        price={product.price} onPay={startProcessing} onBack={() => setStep("method")}/>}
        {step==="nb"         && <NetBankingStep  price={product.price} onPay={startProcessing} onBack={() => setStep("method")}/>}
        {step==="processing" && <ProcessingStep/>}
        {step==="success"    && <SuccessStep onDashboard={() => navigate("/creator/dashboard")}/>}
        {step==="fail"       && <FailStep onRetry={() => setStep("method")} onCancel={() => setStep("cancel")}/>}
        {step==="cancel"     && <CancelStep onSubmit={() => navigate("/creator")} onSkip={() => navigate("/creator")}/>}
      </div>

      {/* Trust */}
      {showTrust && (
        <div className="pg-trust">🔒 100% Secure &nbsp;·&nbsp; Razorpay &nbsp;·&nbsp; UPI &nbsp;·&nbsp; Visa</div>
      )}
    </div>
  );
};

export default PaymentPage;