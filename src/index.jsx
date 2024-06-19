import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddProduct from "./components/AddProduct.jsx";
import SignUpUser from "./components/SignUpUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main">
      <AddProduct />
      <SignUpUser />
    </div>
  </React.StrictMode>
);
