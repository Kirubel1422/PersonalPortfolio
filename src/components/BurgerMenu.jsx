import { CiMenuBurger } from "react-icons/ci";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function BurgerMenu({ openSideNav, ...props }) {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  openSideNav: PropTypes.func,
};

export default BurgerMenu;
