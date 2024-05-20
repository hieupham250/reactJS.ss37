import { createContext } from "react";

const ThemeContext = createContext<string | any>({
  theme: null,
  toggleTheme: () => {},
});

export default ThemeContext;
