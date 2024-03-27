import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the contactus page
    navigate("/contactus");
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link to="/">
            <img
              className="navbar-brand page-scroll"
              src="img/logo1.png"
              alt="logo"
            ></img>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link
                to="/about"
                className="page-scroll hover-underline-animation"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="page-scroll hover-underline-animation"
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/features"
                className="page-scroll hover-underline-animation"
              >
                Feature
              </Link>
            </li>

            <li>
              <Link
                to="/career"
                style={{ textDecoration: "none" }}
                className="page-scroll hover-underline-animation"
              >
                Career
              </Link>
            </li>
            <button className="contactusbtn" onClick={handleClick}>
              CONTACT US
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
