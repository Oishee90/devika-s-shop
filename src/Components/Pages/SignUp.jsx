import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdLock, MdPhone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/login-logo.png";
import bg from "../../assets/login-logo.webp";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      toast.error("❌ Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      toast.error("❌ Password must be at least 6 characters!");
      return;
    }

    // Success
    toast.success("Account created successfully!");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      <Toaster />

      {/* LEFT IMAGE */}
      <div className="hidden lg:block">
        <img
          src={bg}
          alt="signup visual"
          className="object-cover w-full h-screen"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex justify-center h-screen px-9 py-9 red-bg inter">
        <div className="w-full max-w-lg cream-color">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          {/* Heading */}
          <h2 className="mb-2 text-2xl font-normal canela">
            Create your account
          </h2>
          <p className="text-sm text-[#E8D8C3] mb-6">
            Sign up to create your account
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-light">Full Name</label>
              <div className="relative">
                <FaUserCircle className="absolute top-1/2 -translate-y-1/2 left-3 text-[#E8D8C3]" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block mb-2 text-sm font-light">
                Email Address
              </label>
              <div className="relative">
                <MdEmail className="absolute top-1/2 -translate-y-1/2 left-3 text-[#E8D8C3]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                  required
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-2 text-sm font-light">
                Contact Number
              </label>
              <div className="relative">
                <MdPhone className="absolute -translate-y-1/2 top-1/2 left-3 cream-color" />
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Your contact number"
                  className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-light">Password</label>
              <div className="relative">
                <MdLock className="absolute -translate-y-1/2 top-1/2 left-3 cream-color" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
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
                <MdLock className="absolute top-1/2 -translate-y-1/2 left-3 text-[#E8D8C3]" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#A04545] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E8D8C3]"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-[#F5E6D3] text-[#7A1F1F] font-medium rounded-md hover:opacity-90 transition"
            >
              Sign up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6 text-[#E8D8C3] font-light">
            Already have an account?{" "}
            <NavLink to="/login" className="font-normal underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
