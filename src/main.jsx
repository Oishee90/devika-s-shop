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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
