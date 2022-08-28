import { React, useState } from "react";
import Navigation from "./components/Navigation.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import VersionNumber from "./components/VersionNumber.jsx";
import "./assets/global.css";

const appStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
};

const appBackgroundStyle = {
  background: "#606060",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  zIndex: "-1",
};

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={appStyle}
      onClick={() => (showMenu ? setShowMenu(false) : null)}
    >
      <div style={appBackgroundStyle}></div>
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroBanner />
      <About />
      <Skills backgroundColor="#4D4D4D" />
      <Projects />
      <Contact backgroundColor="#4D4D4D" />
      <VersionNumber />
    </div>
  );
}

export default App;
