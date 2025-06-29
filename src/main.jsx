import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import App from "./App.jsx";

Aos.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
