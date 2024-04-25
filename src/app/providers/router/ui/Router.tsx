import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/RouteConfig/RouteConfig";

const Router = () => {
  return (
    <Routes>
      {/* {Object.values(routeConfig).map(({ path, element }) => {
        <Route path={path} element={element} />;
      })} */}
      <Route path={"/"} element={<MainPage />} />;
      <Route path={"/about"} element={<AboutPage />} />;
    </Routes>
  );
};

export default Router;
