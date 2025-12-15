import { useEffect } from "react";
import theme from "./theme";

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}-color`, value);
    });
  }, []);

  return children;
};

export default ThemeProvider;
