import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSubscription } from "./context/Subscriptioncontext";
import "./PaymentPage.scss";

// ── Part 1.1: Booking Form (The "Modal" Data Collection) ──────
const BookingStep = ({ product, onContinue }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const isFormValid = formData.name && formData.email.includes("@") && formData.phone.length >= 10;

  return (
    <div className="pg-step">
      <p className="pg-select-label">Booking Details</p>
      <div className="pg-booking-form">
        <div className="pg-field">
          <label>Full Name</label>
          <input 
            placeholder="e.g. Rahul Sharma" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
          />
        </div>
        <div className="pg-field">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="you@example.com" 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
        </div>
        <div className="pg-field">
          <label>WhatsApp Number</label>
          <input 
            type="tel" 
            placeholder="+91 00000 00000" 
            value={formData.phone} 
            onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g,"")})} 
            maxLength={10}
          />
        </div>
      </div>
      <button className="pg-btn" onClick={() => onContinue(formData)} disabled={!isFormValid}>
        Continue to Payment →
      </button>
    </div>
  );
};

// ── Part 1.2: Payment Gateway (Method Selection) ──────────────
const MethodSelect = ({ onSelect }) => {
  const [active, setActive] = useState("upi");
  const METHODS = [
    { id: "upi",  icon: "📱", label: "UPI",                 sub: "Google Pay, PhonePe, Paytm" },
    { id: "card", icon: "💳", label: "Credit / Debit Card", sub: "Visa, Mastercard, RuPay" },
    { id: "nb",   icon: "🏦", label: "Net Banking",         sub: "All major Indian banks" },
  ];
  return (
    <div className="pg-step">
      <p className="pg-select-label">Select payment method</p>
      <div className="pg-methods">
        {METHODS.map(m => (
          <div key={m.id} className={`pg-method${active===m.id?" pg-method--active":""}`} onClick={() => setActive(m.id)}>
            <span className="pg-method__icon">{m.icon}</span>
            <div>
              <p className="pg-method__label">{m.label}</p>
              <p className="pg-method__sub">{m.sub}</p>
            </div>
            <span className="pg-method__radio">{active===m.id?"🔵":"⚪"}</span>
          </div>
        ))}
      </div>
      <button className="pg-btn" onClick={() => onSelect(active)}>Proceed →</button>
    </div>
  );
};

// ── Gateway Sub-steps (UPI, Card, NetBanking) ─────────────────
const UpiStep = ({ price, onPay, onBack }) => {
  const [sel, setSel] = useState(null);
  const [loading, setLoading] = useState(false);
  const APPS = [
    { id:"gpay",    icon:"🟢", label:"Google Pay" },
    { id:"phonepe", icon:"🟣", label:"PhonePe" },
    { id:"paytm",   icon:"🔵", label:"Paytm" },
  ];
  const proceed = () => {
    if (!sel) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); onPay(); }, 1500);
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
        ? <div className="pg-fetching"><div className="pg-spinner"/><p>Opening App…</p></div>
        : <button className="pg-btn" onClick={proceed} disabled={!sel}>Pay Securely ₹{price}</button>
      }
      <button className="pg-back-btn" onClick={onBack}>← Change method</button>
    </div>
  );
};

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

// ── Processing Step ───────────────────────────────────────────
const ProcessingStep = () => (
  <div className="pg-processing">
    <div className="pg-spinner--lg"/>
    <h2>Processing Payment</h2>
    <p>Please wait, do not close or refresh this page…</p>
  </div>
);

// ── Part 1.3: Payment Success ─────────────────────────────────
const SuccessStep = ({ onDashboard }) => (
  <div className="pg-result pg-result--success">
    <div className="pg-result__icon-wrap">
      <div className="pg-result__icon">✓</div>
    </div>
    <h2>Payment Successful!</h2>
    <p>Your booking/subscription is now active. We've sent a confirmation to your email.</p>
    <button className="pg-btn" onClick={onDashboard}>Go to Dashboard</button>
  </div>
);

// ── Part 1.4: Payment Failed ──────────────────────────────────
const FailStep = ({ onRetry, onCancel }) => (
  <div className="pg-result pg-result--fail">
    <div className="pg-result__icon-wrap">
      <div className="pg-result__icon">✕</div>
    </div>
    <h2>Payment Failed</h2>
    <p>We couldn't process your payment. Your account has not been charged.</p>
    <button className="pg-btn" onClick={onRetry}>Retry Payment</button>
    <button className="pg-back-btn" onClick={onCancel}>Cancel Booking</button>
  </div>
);

// =============================================================================
// MAIN PaymentPage orchestrator
// =============================================================================
// =============================================================================
// MAIN PaymentPage orchestrator
// =============================================================================
const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activateSubscription } = useSubscription();

  // 🐛 THE FIX: Handle data from BOTH Subscriptions ('plan') and Services ('service'/'product')
  const incomingData = location.state?.plan || location.state?.service || location.state?.product;

  // Format the data dynamically based on where the user came from
  const product = incomingData ? {
    name: incomingData.label || incomingData.title || "Premium Plan",
    // Remove '₹' if it already exists so we don't accidentally show ₹₹499
    price: incomingData.price ? incomingData.price.replace('₹', '').trim() : "499",
    type: incomingData.label ? "subscription" : "service" // Differentiates for booking form
  } : { name: "Premium Plan", price: "499", type: "subscription" };

  // Start at booking form if it's a 1-on-1 service, otherwise go straight to method selection
  const initialStep = product.type === "service" ? "booking" : "method";
  const [step, setStep] = useState(initialStep);
  const [userData, setUserData] = useState(null);

  const startProcessing = () => {
    setStep("processing");
    setTimeout(() => {
      const fail = Math.random() < 0.1; // 10% chance of failure for realistic feel
      if (fail) { setStep("fail"); }
      else { 
        if(product.type === "subscription") activateSubscription(product);
        setStep("success"); 
      }
    }, 2500);
  };

  const showHeader = !["success", "processing"].includes(step);
  const showAmount = !["success", "processing", "fail"].includes(step);

  return (
    <div className="pg-page">
      {showHeader && (
        <div className="pg-header">
          <button className="pg-header__back" onClick={() => navigate(-1)}>←</button>
          <div className="pg-header__brand">
            <span className="pg-header__dot"/>
            Sarahaf Secure Pay
          </div>
          <button className="pg-header__cancel" onClick={() => navigate(-1)}>✕</button>
        </div>
      )}

      {showAmount && (
        <div className="pg-amount-pill">
          <span className="pg-amount-pill__name">{product.name}</span>
          <span className="pg-amount-pill__price">₹{product.price}</span>
        </div>
      )}

      <div className="pg-content">
        {step === "booking"    && <BookingStep    product={product} onContinue={(data) => { setUserData(data); setStep("method"); }} />}
        {step === "method"     && <MethodSelect   onSelect={(m) => setStep(m)} />}
        {step === "upi"        && <UpiStep        price={product.price} onPay={startProcessing} onBack={() => setStep("method")}/>}
        {step === "card"       && <CardStep       price={product.price} onPay={startProcessing} onBack={() => setStep("method")}/>}
        {step === "nb"         && <NetBankingStep price={product.price} onPay={startProcessing} onBack={() => setStep("method")}/>}
        {step === "processing" && <ProcessingStep />}
        {step === "success"    && <SuccessStep    onDashboard={() => navigate("/creator/dashboard")} />}
        {step === "fail"       && <FailStep       onRetry={() => setStep("method")} onCancel={() => navigate("/creator")} />}
      </div>

      {showAmount && (
        <div className="pg-trust">🔒 100% Secure &nbsp;·&nbsp; 256-bit Encryption &nbsp;·&nbsp; Razorpay</div>
      )}
    </div>
  );
};

export default PaymentPage;