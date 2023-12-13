import React from "react";
import "./Portfolio.css";
import image1 from "./../../assets/images/addtocart.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1 className="title">Portfolio</h1>
      <p className="subtitle">Here are some of my recent projects:</p>

      <div className="row">
        <div className="col-md-6">
          <div className="card card1">
            <img src={image1} className="card-img-top" alt="..." />
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary">
              Live preview
            </a>
            <a href="#" className="btn btn-primary">
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card2">
            <img src="..." className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary">
              Live preview
            </a>
            <a href="#" className="btn btn-primary">
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card3">
            <img src="..." className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary">
              Live preview
            </a>
            <a href="#" className="btn btn-primary">
              View Code
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card4">
            <img src="..." className="card-img-top" alt="..." />
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary">
              Live preview
            </a>
            <a href="#" className="btn btn-primary">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
