import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider }         from "./context/AuthContext";
import { SubscriptionProvider } from "./context/Subscriptioncontext";
import LandingPage      from "./Landingpage";
import LoginPage        from "./Loginpage";
import Dashboard        from "./Dashboard";
import SubscriptionPage from "./context/Subscriptionpage";
import PaymentPage      from "./Paymentpage";
import ChatRoom         from "./ChatRoom";
import "./CreatorApp.scss";

// Mobile-only guard
const MobileGuard = ({ children }) => {
  if (window.innerWidth > 768) {
    return (
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", flexDirection:"column", gap:16, fontFamily:"sans-serif", color:"#888" }}>
        <span style={{ fontSize:48 }}>📱</span>
        <p style={{ fontSize:16, fontWeight:600 }}>Open this website on mobile</p>
      </div>
    );
  }
  return children;
};

function CreatorApp() {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <MobileGuard>
          <div className="creator-app">
            <Routes>
              <Route path="/"            element={<LandingPage />} />
              <Route path="/login"       element={<LoginPage />} />
              <Route path="/dashboard"   element={<Dashboard />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/payment"     element={<PaymentPage />} />
              <Route path="/chat"        element={<ChatRoom />} />    
              <Route path="*"            element={<Navigate to="" replace />} />
            </Routes>
          </div>
        </MobileGuard>
      </SubscriptionProvider>
    </AuthProvider>
  );
}

export default CreatorApp;