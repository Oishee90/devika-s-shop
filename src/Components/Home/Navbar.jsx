import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

import {
  FiSearch,
  FiHeart,
  FiUser,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
import { useNavigate, useLocation } from "react-router-dom";
import HeadingStyle from "./HeadingStyle";
import CartModal from "../ShortCutModal/CartModal";
import WishlistAuthModal from "../ShortCutModal/WishlistAuthModal";
import SearchModal from "../ShortCutModal/SearchModal";

/* ===== Fake Cart Data ===== */
const fakeCartItems = [
  {
    id: 1,
    name: "Groom Sherwani",
    price: 256,
    qty: 2,
    size: "XL",
    color: "White",
    image: "https://i.ibb.co/2kz5Y7n/sherwani.png",
  },
  {
    id: 2,
    name: "Groom Sherwani",
    price: 256,
    qty: 1,
    size: "XL",
    color: "White",
    image: "https://i.ibb.co/2kz5Y7n/sherwani.png",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menswearOpen, setMenswearOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // new single modal state
  const [activeModal, setActiveModal] = useState(null);
  // values: "cart" | "wishlist" | "search" | null

  // fake user (testing)
  const user = null;

  const [cartItems] = useState(fakeCartItems);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAllDropdowns = () => {
    setMenswearOpen(false);
    setCategoryOpen(false);
    setMobileOpen(false);
  };

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === "/";
  const underlineClass = (path) =>
    `relative transition-colors duration-300
     hover:text-[#F9EFD5]
     after:absolute after:left-0 after:-bottom-1 after:h-[1px]
     after:bg-[#F9EFD5] after:transition-all after:duration-300
     ${isActive(path) ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <div className="w-full canela">
      <HeadingStyle />

      <nav
        className={`fixed top-[48px] left-0 w-full z-50 transition-all
    ${
      isHome
        ? isScrolled
          ? "bg-transparent backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-sm"
        : "bg-[#571010] shadow-md"
    }
  `}
      >
        <div className="mx-auto lg:px-32 px-6 h-[70px] flex items-center justify-between text-white">
          {/* LEFT MENU */}
          <ul className="items-center hidden gap-8 text-base lg:flex">
            <li>
              <button
                onClick={() => {
                  navigate("/");
                  closeAllDropdowns();
                }}
                className={underlineClass("/")}
              >
                Home
              </button>
            </li>

            <li className="relative">
              <button
                onClick={() => {
                  setMenswearOpen(!menswearOpen);
                  setCategoryOpen(false);
                }}
                className={`flex items-center gap-1 ${underlineClass(
                  "/menswear",
                )}`}
              >
                Menswear <FiChevronDown size={14} />
              </button>

              {menswearOpen && (
                <div className="absolute top-8 left-0 w-[220px] cream-bg red-color shadow-lg">
                  <button
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="w-full flex justify-between items-center px-4 py-3 hover:bg-[#222] hover:text-[#fce9cf] text-sm"
                  >
                    Shop By Category <FiChevronRight />
                  </button>

                  {categoryOpen && (
                    <div className="absolute top-0 left-[220px] w-[220px] cream-bg">
                      {[
                        "waistcoats",
                        "jackets",
                        "kurtas",
                        "trousers",
                        "all-products",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            navigate(`/all-product`);
                            closeAllDropdowns();
                          }}
                          className="block w-full text-left px-4 py-3 hover:bg-[#222] hover:text-[#fce9cf]"
                        >
                          {item.replace("-", " ")}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => {
                  navigate("/digital-stylist");
                  closeAllDropdowns();
                }}
                className={underlineClass("/digital-stylist")}
              >
                Digital Stylist
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/my-story");
                  closeAllDropdowns();
                }}
                className={underlineClass("/my-story")}
              >
                My Story
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/rewards");
                  closeAllDropdowns();
                }}
                className={underlineClass("/rewards")}
              >
                Rewards
              </button>
            </li>
          </ul>

          {/* LOGO */}
          <img src={logo} alt="logo" />

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 text-xl">
            <FiSearch
              className="cursor-pointer"
              onClick={() => {
                setActiveModal("search");
                setMobileOpen(false); // close hamburger if open
              }}
            />

            <FiUser />
            <FiHeart
              className="cursor-pointer"
              onClick={() => {
                if (!user) {
                  setActiveModal("wishlist");
                  setMobileOpen(false); // close hamburger if open
                } else {
                  navigate("/wishlist");
                }
              }}
            />

            {/* CART ICON WITH BADGE */}
            <div
              className="relative cursor-pointer"
              onClick={() => {
                setActiveModal("cart");
                setMobileOpen(false); // close hamburger if open
              }}
            >
              <PiShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#571010] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="relative w-6 h-6 lg:hidden"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setActiveModal(null); // close popup if open
              }}
            >
              <span
                className={`absolute h-[2px] w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute h-[2px] w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute h-[2px] w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden fixed right-0 z-50 h-screen
    transition-all duration-500 rounded-l-2xl overflow-hidden inter
    ${isHome ? "top-[70px] cream-bg red-color" : "top-[118px] bg-black/20 backdrop-blur-xl border-l border-l-red/30 red-color"}
    ${mobileOpen ? "sm:w-[40%] w-full" : "w-0"}
  `}
        >
          <ul className="flex flex-col gap-5 px-6 py-8">
            {/* Home */}
            <li>
              <button
                onClick={() => {
                  navigate("/");
                  closeAllDropdowns();
                }}
                className="w-full text-xl text-left hover:text-[#571010]"
              >
                Home
              </button>
            </li>

            {/* Menswear */}
            <li>
              <button
                onClick={() => {
                  setMenswearOpen(!menswearOpen);
                  setCategoryOpen(false);
                }}
                className="flex items-center justify-between w-full hover:text-[#571010] text-xl"
              >
                Menswear
                <FiChevronDown
                  className={`transition-transform ${
                    menswearOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Shop By Category */}
              {menswearOpen && (
                <div className="mt-3 ml-4">
                  <button
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="flex items-center justify-between w-full  hover:text-[#571010] text-lg"
                  >
                    Shop By Category
                    <FiChevronDown
                      className={`transition-transform ${
                        categoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Category List */}
                  {categoryOpen && (
                    <div className="flex flex-col gap-3 mt-3 ml-4 text-base">
                      {["Waistcoats", "Jackets", "Kurtas", "Trousers"].map(
                        (item) => (
                          <button
                            key={item}
                            onClick={() => {
                              navigate(`/menswear/${item}`);
                              closeAllDropdowns();
                            }}
                            className="text-left hover:text-[#571010]"
                          >
                            {item.replace("-", " ")}
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>
              )}
            </li>

            {/* Digital Stylist */}
            <li>
              <button
                onClick={() => {
                  navigate("/digital-stylist");
                  closeAllDropdowns();
                }}
                className="w-full text-xl text-left hover:text-[#571010]"
              >
                Digital Stylist
              </button>
            </li>

            {/* My Story */}
            <li>
              <button
                onClick={() => {
                  navigate("/my-story");
                  closeAllDropdowns();
                }}
                className="w-full text-xl text-left hover:text-[#571010]
                "
              >
                My Story
              </button>
            </li>

            {/* Rewards */}
            <li>
              <button
                onClick={() => {
                  navigate("/rewards");
                  closeAllDropdowns();
                }}
                className="w-full text-xl text-left hover:text-[#571010]"
              >
                Rewards
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* CART MODAL */}
      <CartModal
        open={activeModal === "cart"}
        onClose={() => setActiveModal(null)}
        cartItems={cartItems}
      />
      <WishlistAuthModal
        open={activeModal === "wishlist"}
        onClose={() => setActiveModal(null)}
      />
      <SearchModal
        open={activeModal === "search"}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
};

export default Navbar;
