import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Here are some of my projects:</p>

      <div className="row">
        <div className="col-md-6">
          <div className="card card1">
            <img src="..." className="card-img-top" alt="..." />
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
    </div>
  );
};

export default Portfolio;
