import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <h1>Contact</h1>
 
      <p>
        Email:{" "}
        <a
          href="mailto:elisabeth.erkekoglou@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
 <i class="fa fa-envelope"></i> </a>
      </p>
    </div>
  );
};

export default Contact;
