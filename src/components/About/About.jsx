import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import eliphoto from "./../../assets/images/eliphoto.png";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me-image">
          <img src={eliphoto} className="eliphoto" alt="About"></img>
        </div>

        <div className="about__me-text">
          <p>
            I am a full stack web developer with a passion for creating
            beautiful, responsive, and functional websites. I have a background
            in graphic design and a passion for learning new technologies. I am
            a team player and I am always looking for ways to improve my skills
            and help others.{" "}
          </p>
          <p>
            I am currently working as a freelance web developer and I am looking
            for new opportunities to work with a team of developers.{" "}
          </p>
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
