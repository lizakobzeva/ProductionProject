import "./styles/index.scss";
import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import Router from "./providers/router";
import NavBar from "widgets/NavBar";
import Loader from "shared/ui/Loader";
import { useDispatch } from "react-redux";
import { initAuthData } from "entities/User/model/slice/UserSlice";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initAuthData());
  }, []);
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="container">
          <Suspense fallback={<Loader />}>
            <Router />
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
