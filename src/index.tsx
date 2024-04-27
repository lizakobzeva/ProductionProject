import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemProvider";
import "shared/config/i18n/i18n";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
