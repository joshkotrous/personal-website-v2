import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import "../assets/fonts.css";
import "../assets/navigation.css";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";

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

  return (
    <div className="navContainer">
      <div className="headerContainer">
        <h1>josh</h1>
        <div>
          <Hamburger onClick={menuClick} />
        </div>
      </div>
      <div
        className={
          props.showMenu ? "navOptionsContainer" : "navOptionsContainer-hidden"
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
