import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/login-logo.png";
import bg from "../../assets/login-logo.webp";
import { useNavigate } from "react-router-dom";
import Setnew from "./Setnew";

const Verification = ({ email }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const navigate = useNavigate();
  const [newpass, setNew] = useState(false);

  // Handle input change
  const handleInputChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numeric input

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus(); // Focus next input
    }
  };

  // Handle keydown for navigating between inputs
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !code[index]) {
      document.getElementById(`input-${index - 1}`).focus(); // Focus previous input
    }
  };

  // Handle paste event (only numeric values are allowed)
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").split("");
    if (
      pastedData.length === 6 &&
      pastedData.every((char) => /^\d$/.test(char))
    ) {
      setCode(pastedData);
    }
  };

  // Handle submit (Verification logic)
  const handleSubmit = () => {
    const otpCode = code.join(""); // Convert array to string
    if (otpCode.length === 6) {
      setSuccessMessage("✅ Verification Successful! Redirecting...");
      setTimeout(() => {
        setSuccessMessage(""); // Clear message after a few seconds
      }, 3000);
      setNew(true);
    } else {
      setSuccessMessage("❌ Please enter a valid 6-digit code.");
      setNew(false);
    }
  };

  return (
    <div>
      {!newpass ? (
        <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="hidden lg:block">
            <img
              src={bg}
              alt="verification visual"
              className="object-cover w-full h-screen"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex h-screen px-28 py-9 red-bg inter">
            <div className="w-full cream-color">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img src={logo} alt="Logo" className="" />
              </div>

              <div className="max-w-lg">
                {/* Back Link */}
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 text-[#F5E6D3] mb-8 text-sm font-light hover:underline"
                >
                  <span>←</span>
                  Back
                </button>

                {/* Heading */}
                <h2 className="mb-3 text-xl font-normal canela">
                  Enter Verification Code
                </h2>
                <p className="text-sm text-[#E8D8C3] mb-8">
                  We've sent a 6-digit code to:
                  <br />
                  <span className="font-normal">
                    {email || "saifmahmud142@gmail.com"}
                  </span>
                </p>

                {/* Verification Code Label */}
                <label className="block mb-3 text-sm font-light">
                  Verification Code
                </label>

                {/* OTP Input Fields */}
                <div className="flex gap-2 mb-6" onPaste={handlePaste}>
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`input-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 border-2 border-[#CAD5E2] bg-transparent rounded-md text-center text-lg text-[#F5E6D3] focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080]"
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 mt-4 bg-[#F5E6D3] text-[#7A1F1F] font-medium rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  Verify Code
                  <span>→</span>
                </button>

                {/* Success/Error Message */}
                {successMessage && (
                  <p className="mt-4 text-sm text-center text-[#F5E6D3]">
                    {successMessage}
                  </p>
                )}

                {/* Resend Code */}
                <div className="text-center mt-6 text-sm text-[#E8D8C3] font-light">
                  Didn't receive the code?
                  <br />
                  <button className="underline font-normal mt-1 hover:text-[#F5E6D3]">
                    Resend verification code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Show Set New Password Section
        <Setnew />
      )}
    </div>
  );
};

export default Verification;
