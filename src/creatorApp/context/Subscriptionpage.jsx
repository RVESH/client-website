import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SubscriptionPage.scss";

const PLANS = [
  { id: "1m",  label: "1 Month",   sub: "Billed once",  price: "₹499",  popular: false },
  { id: "3m",  label: "3 Months",  sub: "Billed once",  price: "₹1299", popular: true  },
  { id: "6m",  label: "6 Months",  sub: "Billed once",  price: "₹2299", popular: false },
  { id: "1y",  label: "1 Year",    sub: "Billed once",  price: "₹3999", popular: false },
];

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("3m");

  const plan = PLANS.find(p => p.id === selected);

  return (
    <div className="sub-page">
      <Header />
      <div className="sub-page__content">
        <h1 className="sub-page__title">Choose Your Plan</h1>

        <div className="sub-page__plans">
          {PLANS.map(p => (
            <div
              key={p.id}
              className={`plan-card${selected === p.id ? " plan-card--active" : ""}${p.popular ? " plan-card--popular" : ""}`}
              onClick={() => setSelected(p.id)}
            >
              {p.popular && <span className="plan-card__badge">Most Popular</span>}
              <p className="plan-card__label">{p.label}</p>
              <p className="plan-card__sub">{p.sub}</p>
              <p className="plan-card__price">{p.price}</p>
            </div>
          ))}
        </div>

        <button
          className="sub-page__btn"
          onClick={() => navigate("/creator/payment", { state: { plan } })}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;