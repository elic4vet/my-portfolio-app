import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <h1>Contact</h1>
      <p>Phone: 555-555-5555</p>
      <p>
        Email:{" "}
        <a
          href="mailto:elisabeth.erkekoglou@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        />
        elisabeth.erkekoglou@gmail.com
      </p>
    </div>
  );
};

export default Contact;
