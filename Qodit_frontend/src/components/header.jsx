import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";

const items = [
  <div className="intro">
    <div className="background-svg">
      <img
        className="overlay img-fluid"
        src="./img/banner-1.jpeg"
        width="100%"
        alt=""
      />
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>WEB DEVELOPMENT</span>
            </h1>
            <br />
            <p>
            An interactive web application readily amplifies user engagement. Our user-centred web app is feature-rich.
            </p>
            <br />
            <a href="#features" className=" btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div className="intro">
    <div className="background-svg">
      <img className="overlay" src="./img/banner-2.jpeg" width="100%" alt="" />
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>System Development</span>
            </h1>
            <br />
            <p>
              With a broad selection of web application services, we guarantee
              to meet all of your business needs. Our web developer.
            </p>
            <br />
            <a href="#features" className=" btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div className="intro">
    <div className="background-svg">
      <img className="overlay" src="./img/banner-3.jpeg" width="100%" alt="" />
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>Product Development</span>
            </h1>
            <br />
            <p>
            We believe in bringing new product to the marketplace by implementing innovative businesses 
            </p>
            <br />
            <a href="#features" className=" btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div className="intro">
    <div className="background-svg">
      <img className="overlay" src="./img/banner-4.jpeg" width="100%" alt="" />
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>Cloud Services</span>
            </h1>
            <br />
            <p>
            Our cloud services provide the options of availing remote services via cloud computing servers. 
            </p>
            <br />
            <a href="#features" className=" btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
];

export const Header = (props) => {
  return (
    <header id="header">
      <div className="alicesec">
        <AliceCarousel
         mouseTracking
         items={items}
         autoPlay={true}
         autoPlayInterval={4000}
         infinite={true}
         buttonsDisabled={false}
        />
      </div>
    </header>
  );
};
 