import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Container,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { BackgroundSVG } from "../BackgroundSVG";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export const CareerForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email: '',
    phoneNumber: '',
    technology: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message, phoneNumber, technology, file } = formData;

    if (!name || !email || !message || !phoneNumber || !technology || !file) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('message', message);
    formDataToSend.append('email', email);
    formDataToSend.append('phoneNumber', phoneNumber);
    formDataToSend.append('technology', technology);
    formDataToSend.append('attachment', file);

    try {
      const response = await axios.post('http://localhost:5000/send-email-with-attachments', formDataToSend);
      console.log(response.data);
      toast.success("Message Sent Successfully");
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="background-svg">
        <img
          className="background-header"
          src="./img/CAREER-1.jpeg "
          width="100%"
          alt=""
        />
      </div>
      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: "relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">career</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="contact_us">
        <div className="container careersec">
          <div className="row">
            <div className="col-md-5 justify-content-center contact-info">
              <img src="./img/car-1.png" width="100%" alt="" height="600px" />
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="msg">Message</label>
                  <input
                    name="message"
                    id="message"
                    className="form-control contactFormStyle"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Mobile No</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Mobile No"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Technology</label>
                  <input
                    type="text"
                    id="technology"
                    name="technology"
                    className="form-control"
                    placeholder="Technology"
                    value={formData.technology}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Resume</label>
                  <input
                    type="file"
                    name="file"
                    className="form-control"
                    placeholder="Resume"
                    onChange={handleChange}
                  />
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
