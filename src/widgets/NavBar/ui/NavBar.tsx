import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemProvider";
import ToggleThemButton from "widgets/ToggleThemeButton";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(style.navbar, {}, [theme])}>
      <div className={style.container}>
        <ToggleThemButton />
        <div className={style.links}>
          <NavLink className={style.link} to={"/"}>
            Main
          </NavLink>
          <NavLink className={style.link} to={"/about"}>
            About
          </NavLink>
          <NavLink className={style.link} to={"/cats"}>
            Cats
          </NavLink>
        </div>
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
};

export default NavBar;
