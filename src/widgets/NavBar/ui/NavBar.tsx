import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemProvider";
import ToggleThemButton from "widgets/ToggleThemeButton";
import LangSwitcher from "widgets/LangSwitcher";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames(style.navbar, {}, [theme])}>
      <div className={style.container}>
        <ToggleThemButton />
        <LangSwitcher />
        <div className={style.links}>
          <NavLink className={style.link} to={"/"}>
            Main
          </NavLink>
          <NavLink className={style.link} to={"/about"}>
            About
          </NavLink>
        </div>
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
};

export default NavBar;
