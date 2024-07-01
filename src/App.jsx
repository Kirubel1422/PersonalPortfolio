import { Route, Routes } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#1f1f1f] py-6 px-10 h-screen">
      <header className="flex items-center justify-between">
        <span className="text-[#ECECEC] text-5xl">K</span>

        <BurgerMenu />
      </header>

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
