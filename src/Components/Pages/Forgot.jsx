import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/login-logo.png";
import bg from "../../assets/login-logo.webp";
import Verification from "./Verification";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation: check if email is test@example.com
    if (email.trim() === "admin@gmail.com") {
      setShowVerification(true); // Show verification section if email is valid
    } else {
      alert("Invalid email address"); // Show alert for invalid email
      setShowVerification(false); // Ensure verification section remains hidden
    }
  };

  return (
    <div>
      {!showVerification ? (
        // Show Email Form Section
        <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="hidden lg:block">
            <img
              src={bg}
              alt="forgot password visual"
              className="object-cover w-full h-screen"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex justify-center h-screen px-9 py-9 red-bg inter">
            <div className="w-full max-w-lg cream-color">
              {/* Logo */}
              <div className="flex justify-center mb-12">
                <img src={logo} alt="Logo" className="h-16" />
              </div>

              {/* Back to Sign In Link */}
              <NavLink
                to="/login"
                className="flex items-center gap-2 mb-8 text-sm font-light cream-color hover:underline"
              >
                <span>←</span>
                Back to Sign In
              </NavLink>

              {/* Description */}
              <p className="mb-8 text-sm leading-relaxed cream-color">
                No worries! Enter your email address and we'll send you a
                verification code to reset your password.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-light">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute -translate-y-1/2 top-1/2 left-3 cream-color" />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@company.com"
                      className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                      required
                    />
                  </div>
                  <p className="text-xs text-[#E8D8C3] mt-2 font-light">
                    We'll send a 6-digit verification code to this email.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 mt-6 bg-[#F5E6D3] text-[#7A1F1F] font-medium rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  Send Verification Code
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // Show Verification Section
        <Verification email={email} />
      )}
    </div>
  );
};

export default Forgot;
