import React from "react";
import packageJSON from "../../package.json";
import "../assets/fonts.css";
import "../assets/versionnumber.css";

const VersionNumber = () => {
  return <div className="versionNumber">v{packageJSON["version"]}</div>;
};

export default VersionNumber;
