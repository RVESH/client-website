import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// =============================================================================
// ProtectedRoute.jsx
// src/app/routes/ProtectedRoute.jsx
// =============================================================================
// Wraps any route that requires authentication.
//
// Usage in index.jsx (App):
//   <Route path="/dashboard" element={
//     <ProtectedRoute><Dashboard /></ProtectedRoute>
//   } />
//
//   <Route path="/admin" element={
//     <ProtectedRoute adminOnly><AdminPanel /></ProtectedRoute>
//   } />
// =============================================================================

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  // Not logged in → redirect to /login, remember where they came from
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // Logged in but not admin, and this route requires admin
  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;