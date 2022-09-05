import React from "react";
import PropTypes from "prop-types";
import Failed from "../../assets/failed.svg";
import Check from "../../assets/check.svg";
import Loading from "../../assets/loading.svg";
import "../../assets/modal.css";

const Modal = (props) => {
  Modal.propTypes = {
    showCheckBox: PropTypes.bool,
    showFailed: PropTypes.bool,
    loadingMessage: PropTypes.string,
    successMessage: PropTypes.string,
    fadeOut: PropTypes.bool,
    failedMessage: PropTypes.string,
  };
  return (
    <div
      className={
        props.fadeOut ? "modalContainer fadeOut" : "modalContainer fadeIn"
      }
    >
      <div className="statusContainer">
        {props.showCheckBox ? (
          <img src={Check} className="statusIcon" />
        ) : props.showFailed ? (
          <img src={Failed} className="statusIcon" />
        ) : (
          <img src={Loading} className="statusIcon loadingStatus" />
        )}
      </div>
      {props.showCheckBox
        ? props.successMessage
        : props.showFailed
        ? props.failedMessage
        : props.loadingMessage}
    </div>
  );
};

export default Modal;
