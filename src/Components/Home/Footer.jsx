import React from "react";
import logo from "../../assets/Footer-logo.png";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#D8CBB8] red-color py-16 lg:px-32 px-6 canela">
      <div className="grid grid-cols-1 gap-10 px-4 pb-16 mx-auto lg:px-8 md:grid-cols-12 lg:grid-cols-5">
        {/* Logo and Store Links */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold red-color">Quick Links</h3>
          <ul className="space-y-3 text-[#5B0D0D] text-lg inter">
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="mantraa-story">
              <li className="mt-2">Maantra Story</li>
            </Link>
            <Link to="rewards">
              <li className="mt-2">Reward</li>
            </Link>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold red-color">Legal</h3>
          <ul className="space-y-8 text-[#5B0D0D] text-lg inter">
            <Link to="/terms">
              <li>Terms & Conditions</li>
            </Link>
            <Link to="/privacy-policy">
              {" "}
              <li className="mt-2">Privacy Policy</li>
            </Link>
            <Link to="/shipping-policy">
              {" "}
              <li className="mt-2">Shipping Policy</li>
            </Link>
            <Link to="/refund-policy">
              <li className="mt-2">Refund and Exchange Policy</li>
            </Link>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold red-color">Follow Us</h3>
          <ul className="space-y-3 text-[#5B0D0D] text-xl font-semibold inter">
            <li className="flex items-center gap-3">
              <FaTiktok />
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
