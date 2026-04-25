import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSubscription } from "./context/Subscriptioncontext";
import "./PaymentPage.scss";

const PaymentPage = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const { activateSubscription } = useSubscription();

  const plan = location.state?.plan || { label: "1 Month", price: "₹499" };

  const [method,  setMethod]  = useState("upi");
  const [status,  setStatus]  = useState("idle"); // idle | loading | success | failed

  const handlePayment = () => {
    // 10% chance of failure (realistic feel)
    const willFail = Math.random() < 0.1;

    setStatus("loading");
    setTimeout(() => {
      if (willFail) {
        setStatus("failed");
      } else {
        setStatus("success");
        activateSubscription(plan);
        setTimeout(() => navigate("/creator/dashboard"), 1500);
      }
    }, 2000);
  };

  const METHODS = [
    { id: "upi",  icon: "📱", label: "UPI",                sub: "Google Pay, PhonePe, Paytm" },
    { id: "card", icon: "💳", label: "Credit / Debit Card", sub: "Visa, Mastercard, RuPay" },
    { id: "nb",   icon: "🏦", label: "Net Banking",         sub: "All major Indian banks" },
  ];

  return (
    <div className="pay-page">
      <div className="pay-page__header">
        <button className="pay-page__back" onClick={() => navigate(-1)}>← Back</button>
        <h1>Secure Checkout</h1>
        <p>Complete your premium subscription</p>
      </div>

      <div className="pay-page__content">
        {/* Order Summary */}
        <div className="pay-summary">
          <h3>Order Summary</h3>
          <div className="pay-summary__row">
            <span>{plan.label} Plan</span>
            <span>{plan.price}</span>
          </div>
          <div className="pay-summary__row pay-summary__row--light">
            <span>Duration: {plan.label === "1 Month" ? "30" : plan.label === "3 Months" ? "90" : plan.label === "6 Months" ? "180" : "365"} Days</span>
          </div>
          <div className="pay-summary__divider" />
          <div className="pay-summary__row pay-summary__total">
            <span>Total to Pay</span>
            <span>{plan.price}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="pay-methods">
          <h3>Select Payment Method</h3>
          {METHODS.map(m => (
            <div
              key={m.id}
              className={`pay-method${method === m.id ? " pay-method--active" : ""}`}
              onClick={() => setMethod(m.id)}
            >
              <span className="pay-method__icon">{m.icon}</span>
              <div>
                <p className="pay-method__label">{m.label}</p>
                <p className="pay-method__sub">{m.sub}</p>
              </div>
              <span className="pay-method__radio">{method === m.id ? "🔵" : "⚪"}</span>
            </div>
          ))}
        </div>

        {/* Status messages */}
        {status === "failed" && (
          <div className="pay-status pay-status--fail">
            ❌ Payment Failed. Please try again.
            <button onClick={() => setStatus("idle")}>Retry</button>
          </div>
        )}

        {status === "success" && (
          <div className="pay-status pay-status--success">
            ✅ Payment Successful! Redirecting…
          </div>
        )}

        {/* Pay Button */}
        {(status === "idle" || status === "failed") && (
          <button className="pay-btn" onClick={handlePayment} disabled={status === "loading"}>
            🔒 Pay Securely {plan.price}
          </button>
        )}

        {status === "loading" && (
          <div className="pay-loading">
            <div className="pay-spinner" />
            <p>Processing Payment…</p>
          </div>
        )}

        {/* Trust badges */}
        <div className="pay-trust">
          <span>100% Secure Payment</span>
          <div className="pay-trust__badges">
            <span>Razorpay</span>
            <span>•</span>
            <span>UPI</span>
            <span>•</span>
            <span>Visa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;