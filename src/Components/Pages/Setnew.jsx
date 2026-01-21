import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import logo from "../../assets/login-logo.png";
import bg from "../../assets/login-logo.webp";
import Swal from "sweetalert2";
import { GoLock } from "react-icons/go";
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
        background: "#F9EFD5", // cream color
        confirmButtonColor: "#5B0D0D", // red button
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
      <div className="flex h-screen px-28 py-9 red-bg canela">
        <div className="w-full cream-color">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="" />
          </div>

          <div className="max-w-lg">
            {/* Heading */}
            <h2 className="mb-2 text-2xl font-normal">Reset Password</h2>
            <p className="mb-8 cream-color inter ">enter your new password</p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* New Password */}
              <div>
                <label className="block mb-2 font-light">New Password</label>
                <div className="relative">
                  <GoLock className="absolute -translate-y-1/2 top-1/2 left-3 cream-color" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#f9efd5a2] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute -translate-y-1/2 right-3 top-1/2 cream-color"
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
                  <GoLock className="absolute top-1/2 -translate-y-1/2 left-3 text-[#E8D8C3]" />
                  <input
                    type={showconfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#f9efd5a2] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglenewPasswordVisibility}
                    className="absolute -translate-y-1/2 right-3 top-1/2 cream-color"
                  >
                    {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center w-full gap-2 py-3 mt-6 font-medium transition rounded-md cream-bg red-color hover:opacity-90 disabled:opacity-50"
              >
                {isLoading ? "Updating..." : "Update"}
                {!isLoading && <span>→</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setnew;
