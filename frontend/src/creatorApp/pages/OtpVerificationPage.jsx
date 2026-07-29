import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../api/auth.api";
import "./VerifyOtp.scss";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email =
    location.state?.email ||
    sessionStorage.getItem("verify_email");
console.log("location.state:", location.state);
console.log("stored email:", sessionStorage.getItem("verify_email"));
console.log("email:", email);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);
  const [message, setMessage] = useState("");

useEffect(() => {
  if (email) return;

  navigate("/creator/register", { replace: true });
}, [email, navigate]);

  useEffect(() => {
    if (timer === 0) return;

    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setMessage("Enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const res = await verifyOtp({
        email,
        otp,
        purpose: "REGISTER",
      });

      setMessage(res.message);

      sessionStorage.removeItem("verify_email");

      setTimeout(() => {
        navigate("/creator/login");
      }, 2000);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResending(true);

      const res = await resendOtp({
        email,
        purpose: "REGISTER",
      });

      setMessage(res.message);
      setTimer(60);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="verify-page">
      <div className="verify-card">
        <h2>Verify Your Email Address</h2>

        <p>{email}</p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            disabled={loading}
          />

          {message && <p>{message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {timer > 0 ? (
          <p>Resend OTP in {timer}s</p>
        ) : (
          <button
            onClick={handleResend}
            disabled={resending}
          >
            {resending ? "Sending..." : "Resend OTP"}
          </button>
        )}
      </div>
    </div>
  );
}