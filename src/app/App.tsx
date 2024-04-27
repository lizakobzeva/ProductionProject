import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import Router from "./providers/router";
import NavBar from "widgets/NavBar";
import PageLoader from "widgets/PageLoader";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="container">
          <Suspense fallback={<PageLoader />}>
            <Router />
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
