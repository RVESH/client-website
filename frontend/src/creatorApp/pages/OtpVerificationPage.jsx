import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../api/auth.api";
import OtpInput from "../components/otp/OtpInput";

export default function OtpVerificationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const purpose = location.state?.purpose || "REGISTER";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (!email) {
      navigate("/creator/register", { replace: true });
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("Enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await verifyOtp({
        email,
        otp,
        purpose,
      });

      navigate("/creator/login", {
        replace: true,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResending(true);
      setError("");

      await resendOtp({
        email,
        purpose,
      });

      setMessage("OTP sent successfully.");
      setTimer(60);
    } catch (err) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  };

  return (
    <div>
      <h1>Verify Email</h1>

      <p>{email}</p>

      <form onSubmit={handleVerify}>
        {/* <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, ""))
          }
        /> */}
<OtpInput
  value={otp}
  onChange={setOtp}
/>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}

        <button disabled={loading}>
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
  );
}