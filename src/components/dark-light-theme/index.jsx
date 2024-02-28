import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
export default function DarkLightTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="dark-light-mode" data-theme={theme}>
      <div className="main-container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
