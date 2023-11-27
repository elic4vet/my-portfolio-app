import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me-image">
          <img src={about} className="about" alt="About"></img>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5> Experience </h5>
            <small> 3+ Years working </small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5> Clients </h5>
            <small> 200+ Worldwide </small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5> Projects </h5>
            <small> 80+ Completed projects </small>
          </article>
        </div>{" "}
        <br />
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>
    </section>
  );
};

export default About;
