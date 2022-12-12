import Header from "./components/Header";
import Main from "./components/Main";
import bg_dark from "../src/assets/images/bg-desktop-dark.jpg";
import bg_light from "../src/assets/images/bg-desktop-light.jpg";
import { useContext } from "react";
import { Context } from "./Context";

function App() {
  const { theme } = useContext(Context);
  return (
    <div className={`app ${theme}`}>
      <img src={theme === "dark" ? bg_dark : bg_light} className="bg-img" />
      <div className="to-do-app">
        <Header />
        <Main />
        <p className="footer">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
