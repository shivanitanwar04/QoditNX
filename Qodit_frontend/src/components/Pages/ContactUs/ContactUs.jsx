import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If name field, allow only letters
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      toast.error("Name should only contain letters and spaces");
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Message is required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      console.log(response.data);
      toast.success("Message Sent Successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <div>
      <Helmet>
        <link rel="canonical" href=" https://qodit.io/contact_us" />
      </Helmet>
      <div className="background-svg">{/* Background SVG */}</div>
      <div
        className="service-bg cover-background"
        style={{
          zIndex: 1,
          position: "relative",
          paddingTop: "5rem",
        }}
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
              Please fill out the form below to send us an email and we will
              get back to you as soon as possible.
            </p>
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
                      value={formData.name}
                      className="form-control"
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      className="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="msg">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      className="form-control contactFormStyle"
                      rows="4"
                      placeholder="Message"
                      onChange={handleChange}
                    ></textarea>
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
    </div>
  );
};
