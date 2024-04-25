import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import Router from "./providers/router";
import NavBar from "widgets/NavBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </div>
  );
};

export default App;
