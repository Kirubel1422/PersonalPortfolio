import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import { useState } from "react";
import "./static/style.css";
import Navigation from "./components/Navigation";

function App() {
  const [isSideOpen, setSideOpen] = useState(false);
  return (
    <div className="bg-[#1f1f1f] py-6 px-10 h-screen">
      <header
        className={` ${
          isSideOpen ? "hidden" : "flex "
        } items-center justify-between`}
      >
        <span className="text-[#ECECEC] text-5xl">K</span>

        <BurgerMenu isOpen={isSideOpen} setOpen={setSideOpen} />
      </header>

      <div
        className={`absolute overflow-hidden top-0 left-0 px-10 py-6 bg-[#1F1F1F] flex flex-col z-50 w-screen h-screen ${
          !isSideOpen ? "hidden" : "flex"
        }`}
      >
        <header className="flex items-center justify-between">
          <span className="text-[#ECECEC] text-5xl">K</span>

          <BurgerMenu isOpen={isSideOpen} setOpen={setSideOpen} />
        </header>

        <motion.div className="absolute left-[46%] h-full flex items-center">
          <Navigation />
        </motion.div>
      </div>

      <main>
        <Routes>
          {["/", "/home"].map((item, index) => (
            <Route path={item} key={index} element={<Home />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
