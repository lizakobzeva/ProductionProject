import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
// import { useTheme } from "app/providers/ThemProvider";

import Button from "shared/ui/Button";
import Modal from "shared/ui/Modal";
import ToggleThemButton from "shared/ui/ToggleThemeButton";
import LangSwitcher from "shared/ui/LangSwitcher";
import LoginRegister from "shared/ui/LoginRegister";
import { useState } from "react";

const NavBar = () => {
  const [IsModal, setIsModal] = useState(false);
  return (
    <div className={classNames(style.navbar, {}, [])}>
      <div className={style.container}>
        <div className={style.settings}>
          <ToggleThemButton />
          <LangSwitcher />
        </div>

        <div className={style.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/"}
          >
            Main
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/about"}
          >
            About
          </NavLink>
        </div>

        <div className={style.auth} onClick={() => setIsModal(true)}>
          <Button>Login</Button>
        </div>
        <Modal isOpend={IsModal} onClose={() => setIsModal(false)}>
          <LoginRegister></LoginRegister>
        </Modal>
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
};

export default NavBar;
