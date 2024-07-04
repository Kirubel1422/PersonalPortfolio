import { Link } from "react-router-dom";
import PropType from "prop-types";
import { navs } from "../constants/nav";

function Navigation({ setText, setOpen }) {
  const show = (name) => {
    setText(name);
  };

  const hide = () => setText("");

  return (
    <div className="flex flex-col items-center justify-center gap-5 z-50">
      {navs.map((item) => (
        <div
          key={item.name}
          onMouseEnter={() => show(item.name)}
          onMouseLeave={() => hide()}
          className="relative"
          onClick={() => setOpen(false)}
        >
          <Link
            className="md:text-[32px] text-[24px] tracking-wider text-[#ECECEC] uppercase font-bold"
            to={item.path}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

Navigation.propTypes = {
  setText: PropType.func,
  setOpen: PropType.func,
};

export default Navigation;
