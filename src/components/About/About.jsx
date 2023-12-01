import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareJs, faReact, faNode, faHtml5, faCss3Alt, faBootstrap, faSquareGithub, faFigma} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__section-title">
          <h2>About me</h2>
          <span className="section-title-divider"></span>

          <div className="about__me-text">
            <p className="text">
              I am a full stack web developer with a passion for creating
              beautiful, responsive, and functional websites. I have a
              background in graphic design and a passion for learning new
              technologies. I am a team player and I am always looking for ways
              to improve my skills and help others.{" "}
            </p>
            <p>
              I am currently working as a freelance web developer and I am
              looking for new opportunities to work with a team of developers.{" "}
            </p>
          </div>

          <div className="about__skills">
            <h3>Skills</h3>
            <div className="skills__container">
              <div className="skills__box">
               
              <p className="title1"> My tech Stack 👩🏻‍💻</p>
        <ul className="tech-stack">
          <li>
            {" "}
            JavaScript{" "}
            <FontAwesomeIcon
              icon={faSquareJs}
              className="javascript  rotate-vert-center"
            />
          </li>
          <li>
            React{" "}
            <FontAwesomeIcon
              icon={faReact}
              className="react rotate-vert-center"
            />
          </li>
          <li>
            Node.js{" "}
            <FontAwesomeIcon
              icon={faNode}
              className="node rotate-vert-center"
            />
          </li>
          <li>
            HTML5{" "}
            <FontAwesomeIcon
              icon={faHtml5}
              className="html rotate-vert-center"
            />
          </li>
          <li>
            CSS3{" "}
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="css rotate-vert-center"
            />{" "}
          </li>
          <li>
            Bootstrap
            <FontAwesomeIcon
              icon={faBootstrap}
              className="bootstrap rotate-vert-center"
            />
          </li>
        </ul>
        <p className="title2"> My tools 🛠️ </p>
        <ul className="tools">
          <li>
            Github{" "}
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="github rotate-vert-center"
            />
          </li>
          <li>
            VS Code{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              viewBox="0 0 30 30"
              className="vscode rotate-vert-center"
            >
              <path d="M27.324,4.804l-4.75-1.625c-0.315-0.108-0.667-0.051-0.932,0.152l-10.708,8.21L5.517,8.27 c-0.278-0.169-0.62-0.192-0.918-0.061l-2,0.875C2.235,9.243,2,9.603,2,10v10c0,0.397,0.235,0.757,0.599,0.916l2,0.875 c0.297,0.131,0.639,0.107,0.918-0.061l5.416-3.271l10.708,8.21c0.177,0.136,0.392,0.206,0.608,0.206 c0.109,0,0.218-0.018,0.324-0.054l4.75-1.625C27.728,25.058,28,24.678,28,24.25V5.75C28,5.322,27.728,4.942,27.324,4.804z M6,16.766 v-3.532L8.923,15L6,16.766z M22,19.717L15.038,15L22,10.283V19.717z"></path>
            </svg>
          </li>

          <li>
            Netlify
            <svg
              width="30"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="netlify rotate-vert-center"
            >
              <path
                fill="currentColor"
                d="m.5 7.5l-.354-.354a.5.5 0 0 0 0 .708L.5 7.5Zm7-7l.354-.354a.5.5 0 0 0-.708 0L7.5.5Zm7 7l.354.354a.5.5 0 0 0 0-.708L14.5 7.5Zm-7 7l-.354.354a.5.5 0 0 0 .708 0L7.5 14.5ZM.854 7.854l7-7l-.708-.708l-7 7l.708.708Zm6.292-7l7 7l.708-.708l-7-7l-.708.708Zm7 6.292l-7 7l.708.708l7-7l-.708-.708Zm-6.292 7l-7-7l-.708.708l7 7l.708-.708ZM4.314 3.964l10 4l.372-.928l-10-4l-.372.928ZM8.58 1.728l-5.5 8.5l.84.544l5.5-8.5l-.84-.544ZM2.1 5.8l6 8l.8-.6l-6-8l-.8.6ZM.394 7.989l11.5 2.5l.212-.978l-11.5-2.5l-.212.978Zm2.32 1.963l9.5-4.5l-.428-.904l-9.5 4.5l.428.904Zm7.292-6.53l-1.5 9.5l.988.156l1.5-9.5l-.988-.156Z"
              />
            </svg>
          </li>
          <li>
            Vite{" "}
            <svg
              width="30"
              viewBox="0 0 510 512"
              xmlns="http://www.w3.org/2000/svg"
              className="vite rotate-vert-center"
            >
              <path
                fill="currentColor"
                d="M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144zm-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684L256.89 493.71z"
              />
            </svg>
          </li>
          <li>
            Notion
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              viewBox="0 0 50 50"
              className="notion rotate-vert-center"
            >
              <path d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"></path>
            </svg>
          </li>
          <li>
            {" "}
            Figma
            <FontAwesomeIcon
              icon={faFigma}
              className="figma rotate-vert-center"
            />
          </li>
        </ul>
              </div>
            </div>  

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5> Experience </h5>
                <small> 2+ Years working </small>
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
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
