import { CiMenuBurger } from "react-icons/ci";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

function BurgerMenu({ isOpen, setOpen, ...props }) {
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {isOpen ? (
        <IoClose
          color="#ECECEC"
          className="cursor-pointer"
          size={40}
          onClick={handleClose}
        />
      ) : (
        <CiMenuBurger
          color="#ECECEC"
          className="cursor-pointer"
          size={40}
          onClick={handleOpen}
        />
      )}
    </div>
  );
}

BurgerMenu.propTypes = {
  isOpen: PropTypes.func,
  setOpen: PropTypes.func,
};

export default BurgerMenu;
