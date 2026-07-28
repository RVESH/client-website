// pages/CreatorApp.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider }         from "./context/AuthContext";
import { SubscriptionProvider } from "./context/Subscriptioncontext";

// Import the dynamic guard we created
import MobileGuard from "./components/MobileGuard"; 

// Importing all pages
import LandingPage      from "./Landingpage";
import LoginPage        from "./Loginpage";
import Dashboard        from "./Dashboard";
import SubscriptionPage from "./context/Subscriptionpage";
import PaymentPage      from "./Paymentpage";
import ChatRoom         from "./ChatRoom";     
import TermsPage        from "./pages/TermsPage";    // NEW
import Register     from "./pages/RegisterPage";  // NEW
import "./CreatorApp.scss";

function CreatorApp() {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        {/* Guard applied ONCE, inside the providers so context still works */}
        <MobileGuard>
          <div className="creator-app">
            <Routes>
              <Route path="/"             element={<LandingPage />} />
              <Route path="/login"        element={<LoginPage />} />
              <Route path="/dashboard"    element={<Dashboard />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/payment"      element={<PaymentPage />} />
              <Route path="/chat"         element={<ChatRoom />} />
              <Route path="/terms"        element={<TermsPage />} />
              <Route path="/register"      element={<Register />} />
              <Route path="*"             element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </MobileGuard>
      </SubscriptionProvider>
    </AuthProvider>
  );
}

export default CreatorApp;