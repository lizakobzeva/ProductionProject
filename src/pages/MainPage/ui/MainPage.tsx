import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("MainPage text")}</h1>
    </div>
  );
};
export default MainPage;
