import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Cursor from "react-cursor-follow";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Cursor
        className="z-[100]"
        hollow
        duration={0}
        color={"#ECECEC"}
        size={45}
      />
    </BrowserRouter>
  </React.StrictMode>
);
