// App.jsx — Demo harness wiring all three auth screens together
// Delete this file and import the components directly in your real app.
import React, { useState } from "react"
import SignupPage     from "./components/SignupPage"
import LoginPage      from "./components/LoginPage"
import ForgotPassword from "./components/ForgotPassword"

 

// Reset browser default styles
import "./styles/reset.css"

const VIEWS = { login: "login", signup: "signup", forgot: "forgot" }

const App = () => {
  const [view, setView] = useState(VIEWS.login)

  return (
    <>
      {view === VIEWS.login  && (
        <LoginPage
          onNavigateToSignup={() => setView(VIEWS.signup)}
          onNavigateToForgot={() => setView(VIEWS.forgot)}
        />
      )}
      {view === VIEWS.signup && (
        <SignupPage
          onNavigateToLogin={() => setView(VIEWS.login)}
        />
      )}
      {view === VIEWS.forgot && (
        <ForgotPassword
          onNavigateToLogin={() => setView(VIEWS.login)}
          onNavigateToSignup={() => setView(VIEWS.signup)}
        />
      )}
    </>
  )
}

export default App
