import { useRef } from "react";

export default function OtpInput({ value, onChange }) {
  const inputs = useRef([]);

  const values = value.padEnd(6, "").split("");

  const updateOtp = (index, digit) => {
    const otp = [...values];
    otp[index] = digit;
    onChange(otp.join("").trimEnd());
  };

  const handleChange = (index, e) => {
    const val = e.target.value.replace(/\D/g, "");

    if (!val) {
      updateOtp(index, "");
      return;
    }

    updateOtp(index, val[0]);

    if (index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (values[index]) {
        updateOtp(index, "");
      } else if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    onChange(pasted);

    const index = Math.min(pasted.length - 1, 5);
    inputs.current[index]?.focus();
  };

  return (
    <div className="otp-input-group">
      {values.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          className="otp-input"
        />
      ))}
    </div>
  );
}