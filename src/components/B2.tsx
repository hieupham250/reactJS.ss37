import React, { useState } from "react";
import ThemeContext from "./B1";
import B3 from "./B3";

export default function B2() {
  const [theme, setTheme] = useState("blue");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "blue" ? "red" : "blue"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>B1 đến 4</h1>
        <B3 />
      </div>
    </ThemeContext.Provider>
  );
}
