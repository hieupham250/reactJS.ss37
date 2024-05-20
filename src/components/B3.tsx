// B3.js
import React, { useContext } from "react";
import ThemeContext from "./B1";

export default function B3() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{ backgroundColor: theme, color: "#fff", padding: "5px 10px" }}
      >
        Click me
      </button>
    </div>
  );
}
