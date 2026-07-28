import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { register } from "../api/auth.api";
const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  // instagram: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Minimum 3 characters required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    // Instagram
    // if (formData.instagram.trim()) {
    //   if (!/^[a-zA-Z0-9._]+$/.test(formData.instagram)) {
    //     newErrors.instagram = "Invalid username";
    //   }
    // }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Minimum 8 chars with uppercase, lowercase, number & symbol";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agree) {
      newErrors.agree = "Please accept Terms & Conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);

    await register({
      name: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    });

    navigate("verify-otp", {
      state: {
        email: formData.email.trim().toLowerCase(),
        purpose: "REGISTER",
      },
    });
  } catch (error) {
    console.error(error);

    alert(error.message || "Registration failed.");
  } finally {
    setLoading(false);
  }
};

    return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-header">

          <h1>Create Account</h1>

          <p>
            Join the Premium Creator Community
          </p>

        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* Full Name */}

          <div className="form-group">

            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
            />

            {errors.fullName && (
              <span className="error">
                {errors.fullName}
              </span>
            )}

          </div>

          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}

          </div>

          {/* Phone */}

          <div className="form-group">

            <label htmlFor="phone">
              Mobile Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              maxLength={10}
            />

            {errors.phone && (
              <span className="error">
                {errors.phone}
              </span>
            )}

          </div>

          {/* Instagram */}

          <div className="form-group">

            {/* <label htmlFor="instagram">
              Instagram Username
            </label> */}

            {/* <input
              id="instagram"
              type="text"
              name="instagram"
              placeholder="@username"
              value={formData.instagram}
              onChange={handleChange}
            /> */}

            {/* {errors.instagram && (
              <span className="error">
                {errors.instagram}
              </span>
            )} */}

          </div>

          {/* Password */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {errors.password && (
              <span className="error">
                {errors.password}
              </span>
            )}

          </div>

          {/* Confirm Password */}

          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div className="password-wrapper">

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}

          </div>



                    {/* Terms & Conditions */}

          <div className="form-group checkbox-group">

            <label className="checkbox-label">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />

              <span>
                I agree to the{" "}
                <Link to="/creator/terms">
                  Terms & Conditions
                </Link>{" "}
                and Privacy Policy.
              </span>

            </label>

            {errors.agree && (
              <span className="error">
                {errors.agree}
              </span>
            )}

          </div>

          {/* Register Button */}

          <button
            type="submit"
            className="register-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Divider */}

        <div className="divider">
          <span>OR</span>
        </div>

        {/* Login */}

        <div className="login-section">

          <p>
            Already have an account?
          </p>

          <Link
            to="/creator/login"
            className="login-link"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}