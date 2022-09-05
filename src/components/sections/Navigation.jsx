import { React, useEffect, useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import Hamburger from "../../assets/hamburger.svg";
import "../../assets/navigation.css";

const Navigation = (props) => {
  Navigation.propTypes = {
    showMenu: PropTypes.bool,
    setShowMenu: PropTypes.func,
  };
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
  const menuClick = () => {
    if (props.showMenu) {
      props.setShowMenu(false);
    } else {
      props.setShowMenu(true);
    }
  };
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width <= 768);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setIsMobile(width <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="navContainer">
      <div className="headerContainer">
        <h1>josh</h1>
        {isMobile ? (
          <div>
            <img src={Hamburger} onClick={menuClick} />
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            {navOptions.map((item) => {
              return (
                <div key={item.text} className="navOptionContainer">
                  <Link
                    className="navOption"
                    to={item.text}
                    smooth={true}
                    duration={300}
                  >
                    {item.text}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        className={
          props.showMenu && isMobile
            ? "navOptionsContainer"
            : "navOptionsContainer-hidden"
        }
      >
        {navOptions.map((item) => {
          return (
            <div key={item.text} className="navOptionContainer">
              <Link
                onClick={menuClick}
                className="navOption"
                to={item.text}
                smooth={true}
                duration={300}
              >
                {item.text}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
