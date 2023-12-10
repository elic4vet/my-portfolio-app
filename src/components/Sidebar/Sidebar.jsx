import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar top-navbar">
        {/* Navbar content */}
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src="#" alt="Logo" />
            <span></span>
          </a>
        </div>
      </nav>

      {/* Page content */}
      <div className="page-content">
        {/* Your page content goes here */}
        <div className="sidebar">
          {/* Sidebar navigation */}
          <nav id="sidebar-nav">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="index.html">
                  <i className="fa fa-home" /> Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa fa-edit" /> About{" "}
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  {" "}
                  <i class="fa fa-briefcase"></i> Portfolio{" "}
                </a>
              </li>
              ,
              <li>
                <a href="#contact">
                  {" "}
                  <i class="fa fa-envelope"></i> Contact{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Navbar */}
        <nav className="navbar bottom-navbar"></nav>
      </div>
    </div>
  );
};

export default Sidebar;
