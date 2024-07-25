import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

const Main = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMob(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
        {!isMob && (
          <AnimatedCursor
            innerSize={20}
            outerSize={26}
            color="199, 0, 57"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              "select",
              "button",
            ]}
          />
        )}
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
