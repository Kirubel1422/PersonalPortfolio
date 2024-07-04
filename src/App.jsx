import { motion } from "framer-motion";
import { Link, Route, Routes, useLocation } from "react-router-dom";
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
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      style={{ overflowX: "hidden" }}
      className="bg-[#1f1f1f] py-6 sm:px-4 md:px-10"
    >
      <header
        className={` ${
          isSideOpen ? "hidden" : "flex "
        } items-center justify-between`}
      >
        <Link to="/" className="text-[#ECECEC] text-5xl">
          K
        </Link>

        <BurgerMenu isOpen={isSideOpen} setOpen={setSideOpen} />
      </header>

      <motion.div
        initial="closed"
        animate={isSideOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`fixed !overflow-hidden flex  top-0 left-0 px-10 py-6 bg-[#000] flex-col z-50 w-screen h-screen `}
      >
        <header className="flex items-center justify-between">
          <Link
            onClick={() => setSideOpen(false)}
            to="/"
            className="text-[#ECECEC] text-5xl"
          >
            K
          </Link>

          <BurgerMenu isOpen={isSideOpen} setOpen={setSideOpen} />
        </header>

        <div className=" flex right-1/2 items-center h-full justify-center ">
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
