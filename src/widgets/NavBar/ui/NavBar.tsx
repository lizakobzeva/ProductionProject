import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemProvider";
import ToggleThemButton from "widgets/ToggleThemeButton";
import { AppRoutes, RoutePath } from "shared/config/RouteConfig/RouteConfig";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(style.navbar, {}, [theme])}>
      <div className={style.container}>
        <ToggleThemButton />
        <LangSwitcher />
        <div className={style.links}>
          {Object.values(RoutePath).map((value) => {
            return (
              <NavLink className={style.link} to={value}>
                Main
              </NavLink>
            );
          })}

          {/* <NavLink className={style.link} to={"/about"}>
            About
          </NavLink>
          <NavLink className={style.link} to={"/cats"}>
            Cats
          </NavLink> */}
        </div>
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
};

export default NavBar;
