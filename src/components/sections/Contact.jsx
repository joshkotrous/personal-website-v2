import { React, useState } from "react";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import axios from "axios";
import Modal from "./Modal.jsx";
import "../../assets/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const sendEmail = (subject, body) => {
    const endpoint =
      "https://rosuwl2qmr3lddcwrxigiwxpv40zsrul.lambda-url.us-east-1.on.aws/";

    axios
      .post(endpoint, {
        subject: subject,
        body: body,
      })
      .then(() => {
        setSubmitSuccessful(true);
        setTimeout(() => {
          setShowModal(false);
          setSubmitSuccessful(false);
        }, 4000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    sendEmail("Inquiry from " + name, "Email: " + email + "\n\n" + note);
    setName("");
    setEmail("");
    setNote("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
        <a
          href="https://github.com/joshkotrous"
          rel="noreferrer"
          target="_blank"
        >
          <GitHub className="contactIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/joshkotrous/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedIn className="contactIcon" />
        </a>
      </div>
      <form
        style={{ alignSelf: "flex-start", width: "100%" }}
        onSubmit={handleSubmit}
      >
        <input
          className="emailInput"
          type="text"
          name="name"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <div className="separator"></div>
        <input
          className="emailInput"
          type="email"
          name="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <div className="separator"></div>
        <textarea
          className="textInput"
          type="text"
          name="note"
          placeholder="leave a note"
          onChange={(event) => setNote(event.target.value)}
          value={note}
        />
        <button className="submitButton" type="submit" value="submit">
          submit
        </button>
      </form>
      {showModal ? (
        <Modal
          loadingMessage="Sending message..."
          successMessage="Successfully sent message."
          showCheckBox={submitSuccessful}
        />
      ) : null}
    </div>
  );
};

export default Contact;
