import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import Privacy from "./Components/Settings/Privacy";
// import Terms from "./Components/Settings/Terms";

import "./index.css";
import Login from "./Components/Pages/Login";
import Forgot from "./Components/Pages/Forgot";
import SignUp from "./Components/Pages/SignUp";
import MantraaStory from "./Components/about/MantraaStory";
import Rewards from "./Components/rewards/Rewards";
import Profile from "./Components/profile/Profile";
import TermsnConditions from "./Components/policy_pages/TermsnConditions";
import PrivacyPolicy from "./Components/policy_pages/PrivacyPolicy";
import RefundPolicy from "./Components/policy_pages/RefundPolicy";
import ShippingPolicy from "./Components/policy_pages/ShippingPolicy";
import Wishlist from "./Components/wishlist/Wishlist";
import Orders from "./Components/orders/Orders";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import AllProduct from "./Components/AllProduct/AllProduct";
import ProductDetails from "./Components/ProductDetails.jsx/Productid";
import Productid from "./Components/ProductDetails.jsx/Productid";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Chekout from "./Components/Checkout/Chekout";
import ScrollToTop from "./Components/Pages/ScrollToTop";
// import ScrollToTop from "./Components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },

  {
    path: "/login",
    element: (
      <>
        <Login></Login>
      </>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <>
        <SignUp></SignUp>
      </>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <>
        <Forgot></Forgot>
      </>
    ),
  },
  {
    path: "mantraa-story",
    element: <MantraaStory />,
  },
  {
    path: "rewards",
    element: <Rewards />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "terms",
    element: <TermsnConditions />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
  {
    path: "orders",
    element: (
      <div>
        <Navbar />
        <Orders />
        <Footer />
      </div>
    ),
  },
  {
    path: "refund-policy",
    element: <RefundPolicy />,
  },
  {
    path: "shipping-policy",
    element: <ShippingPolicy />,
  },
  {
    path: "all-product",
    element: (
      <>
        <AllProduct></AllProduct>
      </>
    ),
  },
  {
    path: "product-details",
    element: (
      <>
        <Productid></Productid>
      </>
    ),
  },
  {
    path: "checkout",
    element: (
      <>
        <Chekout></Chekout>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
