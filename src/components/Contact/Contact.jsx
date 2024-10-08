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
          <i className="fa fa-envelope"></i>{" "}
        </a>
      </p>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/eerkekoglou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/elic4vet">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/elisa.codes23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
