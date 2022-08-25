import React from "react";
import packageJSON from "../../package.json";
import "../assets/fonts.css";

const versionStyle = {
  position: "fixed",
  zIndex: "9999",
  width: "100%",
  bottom: "0",
  right: "0",
  textAlign: "right",
  padding: "16px",
  fontFamily: "Urbanist",
  fontWeight: "bold",
  color: "white",
  fontSize: "12px",
};

const VersionNumber = () => {
  return <div style={versionStyle}>v{packageJSON["version"]}</div>;
};

export default VersionNumber;
