import { MotionConfig } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TooltipProvider } from "./components/common/Tooltip";
import { ThemeProvider } from "./hooks/useTheme";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* reducedMotion="user" makes every Framer Motion animation in the app honor prefers-reduced-motion automatically. */}
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <TooltipProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>,
);
