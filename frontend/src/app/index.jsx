import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import * as pages        from "./../pages";
import { Data }          from "../data/data.jsx";
import { AuthProvider }  from "./context/AuthContext";
import ProtectedRoute    from "./routes/ProtectedRoute";
import LoginPage         from "../components/auth/LoginPage";
import SignupPage        from "../components/auth/SignupPage";
import ForgotPassword    from "../components/auth/ForgotPassword";
import CreatorApp        from "../creatorApp/CreatorApp";
import  Header         from "../southBridge/foundations/headers";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/"                element={<pages.Landing />} />
          <Route path="/data"            element={<Data />} />
          <Route path="/login"           element={<LoginPage />} />
          <Route path="/signup"          element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard"       element={<ProtectedRoute><pages.Dashboard /></ProtectedRoute>} />
          <Route path="/admin"           element={<ProtectedRoute adminOnly><pages.AdminPanel /></ProtectedRoute>} />
          <Route path="/creator/*"       element={<CreatorApp />} />
          <Route path="*"                element={<Navigate to="/" replace />} />
          <Route path="/header"          element={<Header />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}
export default App;