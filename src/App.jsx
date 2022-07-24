import React from "react";
import Navigation from "./components/Navigation.jsx";
import WelcomeHeader from "./components/WelcomeHeader.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"


const appStyle = {
  display: 'block',
  position: 'absolute',
  width: '100%',
};

const appBackgroundStyle = {
  background: '#606060',
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: '-1'

};

function App() {

  return (
    <div style={appStyle}>
      <div style={appBackgroundStyle}></div>
      <Navigation/>
      <WelcomeHeader />
      <About />
      <Skills />
    </div>
  );
}

export default App;
