import { Link } from "react-router-dom";

function Navigation() {
  const navs = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 z-50">
      {navs.map((item) => (
        <Link
          className="text-[26px] text-[#ECECEC] uppercase font-bold"
          to={item.path}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
