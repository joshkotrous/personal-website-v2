import { React, useState } from "react";
import Section from "./components/Section.jsx";
import Navigation from "./components/Sections/Navigation.jsx";
import HeroBanner from "./components/Sections/HeroBanner.jsx";
import About from "./components/Sections/About.jsx";
import Skills from "./components/Sections/Skills.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Contact from "./components/Sections/Contact.jsx";
import VersionNumber from "./components/VersionNumber.jsx";
import "./assets/global.css";
import "./assets/app.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app" onClick={() => (showMenu ? setShowMenu(false) : null)}>
      <div className="appBackground"></div>
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroBanner />
      <Section header="about me" id="about">
        <About />
      </Section>
      <Section header="skills" id="skills" backgroundColor="#4D4D4D">
        <Skills />
      </Section>
      <Section header="projects" id="projects">
        <Projects />
      </Section>
      <Section header="contact" id="contact" backgroundColor="#4D4D4D">
        <Contact />
      </Section>
      <VersionNumber />
    </div>
  );
}

export default App;
