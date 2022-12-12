import React from "react";
import { useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
