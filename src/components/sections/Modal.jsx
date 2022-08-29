import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import "../../assets/modal.css";

const Modal = (props) => {
  Modal.propTypes = {
    showCheckBox: PropTypes.bool,
    loadingMessage: PropTypes.string,
    successMessage: PropTypes.string,
  };
  return (
    <div className={props.showCheckBox ? "container fadeOut" : "container"}>
      <div className="statusContainer">
        {props.showCheckBox ? <Check /> : <Loading className="loadingStatus" />}
      </div>
      {props.showCheckBox ? props.successMessage : props.loadingMessage}
    </div>
  );
};

export default Modal;
