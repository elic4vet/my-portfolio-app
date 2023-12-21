import React from "react";
import "./Portfolio.css";
import image1 from "./../../assets/images/addtocart.png";
import image2 from "./../../assets/images/dictionary_app.png";
import image3 from "./../../assets/images/weather1.png";
import image4 from "./../../assets/images/Desktop-App.png";
import image5 from "./../../assets/images/nft-preview-card .png";
import image6 from "./../../assets/images/product-preview-screenshot eli.png";
import image7 from "./../../assets/images/desktop_app1.png";
import image8 from "./../../assets/images/Desktop-App1.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1 className="title">Portfolio</h1>
      <p className="subtitle">Here are some of my recent projects:</p>

      <div className="row row1">
        <div className="col-md-6">
          <div className="card card1">
            <img src={image1} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">Description</p>
            <a
              href="https://famous-daffodil-e8cf06.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live preview
            </a>
            <a
              href="https://github.com/elic4vet/Add_to_cart"
              className="btn btn-primary"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card2">
            <img src={image2} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a
              href="https://starlit-zabaione-17278b.netlify.app/"
              className="btn btn-primary"
            >
              Live preview
            </a>
            <a
              href="https://github.com/elic4vet/dictionary-project"
              className="btn btn-primary"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card3">
            <img src={image3} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a
              href="https://jolly-snyder-21730a.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live preview
            </a>
            <a
              href="https://github.com/elic4vet/react-weather-app"
              className="btn btn-primary"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card4">
            <img src={image4} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a
              href="https://results-summary23.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live preview
            </a>
            <a
              href="https://github.com/elic4vet/results-component"
              className="btn btn-primary"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>
      </div>

      <div className="row row2">
        <div className="col-md-6">
          <div className="card card5">
            <img src={image5} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a
              href="https://prismatic-syrniki-15a3cd.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live preview
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card6">
            <img src={image6} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary" target="_blank">
              Live preview
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              View Code
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card7">
            <img src={image7} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary" target="_blank">
              Live preview
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card8">
            <img src={image8} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary" target="_blank">
              Live preview
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
