import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import HeadingStyle from "./HeadingStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Menswear", id: "features" },
    { name: "Digital Stylist", id: "review" },
    { name: "My Story", id: "faq" },
    { name: "Rewards", id: "rewards" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Optional top strip */}
      <HeadingStyle />

      {/* NAVBAR */}
      <nav
        className={`fixed top-[48px] left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-transparent backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between text-white">
          {/* Left Menu */}
          <ul className="items-center hidden gap-8 text-sm tracking-wide uppercase lg:flex">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => navigate("/")}
                  className="relative hover:text-[#f5c27a] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#f5c27a] after:transition-all"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Logo (Center) */}
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="object-contain h-8" />
          </div>

          {/* Right Icons */}
          <div className="items-center hidden gap-6 text-xl lg:flex">
            <FiSearch className="cursor-pointer hover:text-[#f5c27a]" />
            <FiHeart className="cursor-pointer hover:text-[#f5c27a]" />
            <FiShoppingBag className="cursor-pointer hover:text-[#f5c27a]" />
            <FiUser className="cursor-pointer hover:text-[#f5c27a]" />
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl lg:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-[118px] w-full bg-black/90 text-white z-40 lg:hidden">
          <ul className="flex flex-col gap-4 py-6 text-center">
            {menuItems.map(({ name }) => (
              <li key={name}>
                <button className="text-lg">{name}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
