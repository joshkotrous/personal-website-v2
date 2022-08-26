import React, { useState } from "react";
import "../assets/fonts.css";
import "../assets/navigation.css";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";

const Navigation = () => {
  const navOptions = [
    {
      text: "about",
      url: "./#about",
    },
    {
      text: "skills",
      url: "./#skills",
    },
    {
      text: "projects",
      url: "./#projects",
    },
    {
      text: "contact",
      url: "./#contact",
    },
  ];
  const [showMenu, setShowMenu] = useState(false);
  const menuClick = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <div className="navContainer">
      <div className="headerContainer">
        <h1>josh</h1>
        <div>
          <Hamburger onClick={menuClick} />
        </div>
      </div>
      <div
        className="navOptionsContainer"
        style={showMenu ? {} : { display: "none" }}
      >
        {navOptions.map((item) => {
          return (
            <div key={item.text} className="navOptionContainer">
              <a onClick={menuClick} className="navOption" href={item.url}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
