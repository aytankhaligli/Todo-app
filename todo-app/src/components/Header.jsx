import React from "react";
import { useContext } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { Context } from "../Context";
export default function Header() {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <div className="header">
      <h1 className="title">TODO</h1>
      {/* <img src={moon} /> */}
      <img
        className="theme"
        src={theme === "dark" ? sun : moon}
        onClick={toggleTheme}
      />
    </div>
  );
}
