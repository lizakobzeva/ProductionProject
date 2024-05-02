import React from "react";
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button";

const MainPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("MainPage text")}</h1>
      <Button>Кнопька</Button>
    </div>
  );
};
export default MainPage;
