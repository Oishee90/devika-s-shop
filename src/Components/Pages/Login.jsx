import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import logo from "../../assets/login-logo.png";
import bg from "../../assets/login-logo.webp";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineMail } from "react-icons/md";
import { GoLock } from "react-icons/go";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin@gmail.com") {
      toast.success("Login Successful!");
      setTimeout(() => navigate("/"), 1500);
    } else {
      toast.error("❌ Invalid email or password.");
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      <Toaster />

      {/* LEFT IMAGE */}
      <div className="hidden lg:block">
        <img
          src={bg}
          alt="login visual"
          className="object-cover w-full h-screen"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex h-screen px-28 py-9 red-bg inter">
        <div className="w-full cream-color">
          {/* Logo */}
          <Link to="/">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Logo" className="" />
            </div>
          </Link>
          <div className="max-w-lg">
            {/* Heading */}
            <h2 className="mb-2 text-4xl font-normal pt-7 canela ">
              Welcome back
            </h2>
            <p className="text-sm text-[#E8D8C3] mb-8  ">
              Sign in to access your account
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block mb-2 cream-color canela">
                  Email Address
                </label>
                <div className="relative">
                  <MdOutlineMail className="absolute -translate-y-1/2 top-1/2 left-3 cream-color" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@gmail.com"
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#f9efd5a2] rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
                    required
                  />
                </div>
              </div>

              {/* Password */}

              {/* Password */}
              <div>
                <label className="block mb-2 cream-color canela ">
                  Password
                </label>
                <div className="relative">
                  <GoLock className="absolute -translate-y-1/2 top-1/2 left-3 cream-color" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#F9EFD5]  rounded-md focus:outline-none focus:border-[#F5E6D3] placeholder-[#B08080] text-sm"
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

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 accent-[#F5E6D3]"
                  />
                  <span className="text-[#E8D8C3] font-light">Remember me</span>
                </label>
                <NavLink
                  to="/forgot-password"
                  className="text-[#E8D8C3] font-light hover:underline"
                >
                  Forgot password?
                </NavLink>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-[#F5E6D3] text-[#7A1F1F] font-medium rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Sign in
                <span>→</span>
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm mt-6 text-[#E8D8C3] font-light">
              Don't have an account?{" "}
              <NavLink to="/signup" className="font-normal underline">
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
