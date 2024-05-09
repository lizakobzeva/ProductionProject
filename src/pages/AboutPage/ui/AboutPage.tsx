import { useTranslation } from "react-i18next";
import image from "shared/assets/Alpaca.png";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <section className="section">
      <h2>{t("AboutePage text aaaaaaaaaaa")}</h2>
    </section>
  );
};

export default AboutPage;
