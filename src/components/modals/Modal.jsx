import React from "react";
import PropTypes from "prop-types";

import Check from "../../assets/check.svg";
import Loading from "../../assets/loading.svg";
import "../../assets/modal.css";

const Modal = (props) => {
  Modal.propTypes = {
    showCheckBox: PropTypes.bool,
    loadingMessage: PropTypes.string,
    successMessage: PropTypes.string,
  };
  return (
    <div
      className={
        props.showCheckBox ? "modalContainer fadeOut" : "modalContainer fadeIn"
      }
    >
      <div className="statusContainer">
        {props.showCheckBox ? (
          <img src={Check} className="statusIcon" />
        ) : (
          <img src={Loading} className="statusIcon loadingStatus" />
        )}
      </div>
      {props.showCheckBox ? props.successMessage : props.loadingMessage}
    </div>
  );
};

export default Modal;
