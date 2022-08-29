import { React, useState } from "react";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import axios from "axios";
import "../../assets/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const sendEmail = (subject, body) => {
    const endpoint =
      "https://rosuwl2qmr3lddcwrxigiwxpv40zsrul.lambda-url.us-east-1.on.aws/";

    axios
      .post(endpoint, {
        subject: subject,
        body: body,
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail("Inquiry from " + name, "Email: " + email + "\n\n" + note);
    setName("");
    setEmail("");
    setNote("");
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
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
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Contact;
