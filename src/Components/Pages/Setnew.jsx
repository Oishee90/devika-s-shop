import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import logo from "../../assets/login-logo.png";
import bg from "../../assets/login-logo.webp";
import Swal from "sweetalert2";

const Setnew = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showconfirmPassword, setConfirmShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const togglenewPasswordVisibility = () => {
    setConfirmShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "❌ Passwords do not match!",
      });
      return;
    }

    setIsLoading(true);

    // Simulate password reset logic
    setTimeout(() => {
      setIsLoading(false);

      Swal.fire({
        title: "Success!",
        text: "Your password has been reset.",
        icon: "success",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#28a745",
        allowOutsideClick: false, // prevents accidental closing
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }, 2000);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block">
        <img
          src={bg}
          alt="reset password visual"
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

          {/* Heading */}
          <h2 className="mb-2 text-2xl font-normal">Reset Password</h2>
          <p className="text-sm text-[#E8D8C3] mb-8">enter your new password</p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password */}
            <div>
              <label className="block mb-2 text-sm font-light">
                New Password
              </label>
              <div className="relative">
                <MdLock className="absolute top-1/2 -translate-y-1/2 left-3 text-[#E8D8C3]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E8D8C3]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-light">
                Confirm Password
              </label>
              <div className="relative">
                <MdLock className="absolute top-1/2 -translate-y-1/2 left-3 text-[#E8D8C3]" />
                <input
                  type={showconfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={togglenewPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E8D8C3]"
                >
                  {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-6 bg-[#F5E6D3] text-[#7A1F1F] font-medium rounded-md hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? "Updating..." : "Update"}
              {!isLoading && <span>→</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setnew;
