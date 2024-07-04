import { motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import "./static/style.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const [isSideOpen, setSideOpen] = useState(false);
  const [text, setText] = useState("");

  // for framer motion - variants
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.4 },
    },
  };

  const hoveredTextVariant = {
    open: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.6 },
    },
    closed: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const sliderVariant = {
    open: {
      x: "300%",
      transition: { duration: 0 },
      opacity: 0,
      y: "5%",
    },
    closed: {
      x: "-300%",
      transition: { duration: 1.3 },
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-[#1f1f1f] py-6 sm:px-4 md:px-10 overflow-x-hidden">
      <header
        className={` ${
          isSideOpen ? "hidden" : "flex "
        } items-center justify-between`}
      >
        <span className="text-[#ECECEC] text-5xl">K</span>

        <BurgerMenu isOpen={isSideOpen} setOpen={setSideOpen} />
      </header>

      <motion.div
        initial="closed"
        animate={isSideOpen ? "open" : "closed"}
        variants={sliderVariant}
        className="top-0 absolute left-0 bg-red-500 h-screen w-[20%] z-50"
      ></motion.div>

      <motion.div
        initial="closed"
        animate={isSideOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`fixed !overflow-hidden flex top-0 left-0 px-10 py-6 bg-[#000] flex-col z-50 w-screen h-screen `}
      >
        <header className="flex items-center justify-between">
          <span className="text-[#ECECEC] text-5xl">K</span>

          <BurgerMenu isOpen={isSideOpen} setOpen={setSideOpen} />
        </header>

        <div className="absolute top-[40%] flex w-full items-center justify-center">
          <Navigation setText={setText} setOpen={setSideOpen} />
        </div>

        <div className="absolute top-[40%] flex items-center justify-center w-full">
          <motion.h4
            initial="closed"
            animate={!text ? "open" : "closed"}
            variants={hoveredTextVariant}
            transition={{ delay: 0.1 }}
            className="text-[#999999] text-[160px] uppercase text-opacity-20 font-extrabold tracking-widest font-sans"
          >
            {text}
          </motion.h4>
        </div>
      </motion.div>

      <main className="bg-[#1f1f1f]">
        <Routes>
          {["/", "/home"].map((item, index) => (
            <Route path={item} key={index} element={<Home />} />
          ))}
          <Route path={"/about"} element={<About />} />
          <Route path={"/portfolio"} element={<Portfolio />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
