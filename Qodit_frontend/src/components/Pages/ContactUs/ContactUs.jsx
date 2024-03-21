import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address.");
      return;
    }

    toast.success("Message Sent Successfully");
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <link rel="canonical" href=" https://qodit.io/contact_us" />
      </Helmet>
      <div className="background-svg">
        <img
          className="background-header"
          src="./img/CONTACTUS-1.jpeg"
          width="100%"
          alt=""
        />
      </div>

      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="fw-light">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="contact_us">
        <div className="container">
          <div className="section-title">
            <h2 className="contact-title" style={{ marginTop: "35%" }}>
              Get In Touch
            </h2>
            <p className="contact-title">
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
          </div>
          <div className="row">
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                <h3>USA Office Address:</h3>
                <h5>a 1309 Coffeen Avenue 1200, Sheridan, WY 82801, USA</h5>
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                <h3 className="text-center">India Office Address:</h3>
                <a href="https://www.google.com/maps/place/Qodit+Technology+Pvt.+Ltd/@22.7405821,75.903225,17z/data=!4m6!3m5!1s0x3962e3d4a2f8d07b:0xe7e568886f73dd84!8m2!3d22.7405821!4d75.903225!16s%2Fg%2F11vkjw0bfy?entry=ttu">
                  <h5 className="text-center" style={{ color: "#777" }}>
                    ED3, Scheme 94 Sector ED, Indore, Madhya Pradesh 452010
                  </h5>
                </a>
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h3 className="text-center">Email:</h3>
                <h5 className="text-center">
                  <a
                    style={{ color: "#777", fontWeight: "800" }}
                    href="mailto:info@qodit.io"
                  >
                    info@qodit.io
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container form-sec">
          <div className="row">
            <div className="col-md-5 justify-content-center contact-info">
              <img src="./img/Contact_us.png" width="100%" alt="" />
            </div>
            <div className="col-md-7 form-contact">
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    // onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    // onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control contactFormStyle"
                    rows="4"
                    placeholder="Message"
                    // onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
