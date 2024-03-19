// import { withRouter } from "react-router";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const FooterPage = withRouter((props) => {

//   const { location } = props;
//   const style = {
//     li: {
//       color: "#37474F",
//       fontSize: "1.5rem",
//     },
//     contactUsInLine: {
//       display: "inline-block",
//       color: "#37474F",
//       fontWeight: 400,
//       fontSize: "1.5rem",

//     },
//   };

//   function checkRouter() {
//     if (location) {
//       switch (location.pathname) {
//         case "/login":
//           return true;
//         case "/admin/dashboard":
//           return true;
//         case "/hr/dashboard":
//           return true;
//         case "/sales/dashboard":
//           return true;
//         default:
//           return false;
//       }
//     }
//   }

//   if (checkRouter()) {
//     return null;
//   }
//   return (
//     <div style={{}}>
//       <div style={{ position: "absolute", width: "100%"}}>
//         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#fff"
//             fill-opacity="1"
//             d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,192C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
//           ></path>
//         </svg> */}
//       </div>
//       <MDBFooter
//         color="#37474F"
//         className="font-small footerMainDiv  pt-4 mt-4"
//       >
//         <MDBContainer fluid className="text-center text-md-left">
//           <MDBRow>
//             <MDBCol md="9" className="text-left">
//                   <h2 style={{ color: "black" }} className="title  footerTitle">
// QUICK LINKS                  </h2>

//               <MDBCol color="black" md="3" className=" background">
//                 <ul>
//                   <li className="list-unstyled Footerbg footerAnch">
//                     <a href="/" style={style.li}>
//                       <p className="text-dark textcolor">Home</p>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href="/about" style={style.li}>
//                       <p className="text-dark textcolor">About</p>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href="/services" style={style.li}>
//                       <p className="text-dark textcolor">Services</p>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href="/FEATURES" style={style.li}>
//                       <p className="text-dark textcolor

//                       ">Features</p>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href="/career" style={style.li}>
//                       <p className="text-dark textcolor">Career</p>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href="/contact_us" style={style.li}>
//                       <p className="text-dark textcolor">Contact Us</p>
//                     </a>
//                   </li>
//                 </ul>
//               </MDBCol>
//             </MDBCol>
//             <MDBCol md="3" className="text-left">
//               <div id="fotterContactus">
//                 <h2 className="title text-dark " style={{ color: "black" }}>
//                   Contact US
//                 </h2>
//                 <ul>

//                   <li className="list-unstyled">
//                     <a href="https://www.google.com/maps/place/TheRapidHire+Private+Limited/@22.7405008,75.9009652,17z/data=!3m1!4b1!4m5!3m4!1s0x3962e32b2894590f:0x4e73ebc1261cc50!8m2!3d22.7404959!4d75.9031539">
//                       <h4 className="contact-us textcolor">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
//   <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
// </svg>
//                         <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
//                         51, Electronic Complex,<br/>
//                          Pardesipura, Indore, Madhya Pradesh 452007                      </h4>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href="mailto:info@qodit.io">
//                       <h4 className="contact-us textcolor">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
//   <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
// </svg>
//                         <i className="fa fa-envelope"></i> &nbsp;
//                         info@qodit.io</h4>
//                     </a>
//                   </li>
//                   <li className="list-unstyled">
//                     <a href={`tel:${props.data ? props.data.phone : " "}`}>
//                       <h4 className="contact-us textcolor">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
// </svg>
//                         <i className="fa fa-phone"></i> &nbsp;
//                         +1 (917) 628 2406                      </h4>
//                     </a> &nbsp;
//                     {/* <a href={`tel:${props.data ? props.data.phone : " "}`}>
//                       <h4 className="contact-us" style={style.contactUsInLine}>
//                         <i className="fa fa-phone"></i>  &nbsp;
//                         Copyright © 2021 Qodit All Rights Reserved.Web Designed by Qodit  Privacy Policies Terms & Conditions                      </h4>
//                     </a> */}
//                   </li>
//                 </ul>
//               </div>
//             </MDBCol>
//           </MDBRow>

//           {/* <div className=" text-center footerCopyWrite py-2">
//             <MDBContainer >

//               <div id="footer ">
//                 <div className="container-fluid  text-center ">
//                   <p style={{ color: "fff", fontSize: "14px",  fontWeight:"500"}}>
//                     Copyright © 2021 Qodit All Rights Reserved.Web Designed by Qodit</p>
//                     <a href="/policy" rel="nofollow" style={{ color: "fff" }}>
//                       Privacy Policies
//                     </a>  &nbsp;
//                     <a href="/term" rel="nofollow" style={{ color: "fff" }}>
//                       Terms &amp; Conditions
//                     </a>

//                 </div>
//               </div>
//             </MDBContainer>
//           </div> */}
//         </MDBContainer>

//       </MDBFooter>
//       <div>
//         <p style={{ color: "fff", fontSize: "14px",  fontWeight:"500", backgroundColor:"black", padding:"10px 0 10px 0", textAlign:"center"}}>
//                     Copyright © 2021 Qodit All Rights Reserved.Web Designed by Qodit</p>
//         </div>
//     </div>
//   );
// });

// export default FooterPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://qoditdev.herokuapp.com/footer").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  const { location } = props;
  const style = {
    li: {
      color: "#37474F",
      fontSize: "1.5rem",
    },
    contactUsInLine: {
      display: "inline-block",
      color: "#37474F",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
  };

  function checkRouter() {
    if (location) {
      switch (location.pathname) {
        case "/login":
          return true;
        case "/admin/dashboard":
          return true;
        case "/hr/dashboard":
          return true;
        case "/sales/dashboard":
          return true;
        default:
          return false;
      }
    }
  }

  if (checkRouter()) {
    return null;
  }
  return (
    // <div>
    //   <div style={{ position: "absolute", width: "100%" }}>

    //   </div>
    //   <MDBFooter
    //     color="#37474F"
    //     className="font-small footerMainDiv  pt-4 mt-4"
    //   >
    //     <MDBContainer fluid className="text-center text-md-left">
    //       <MDBRow>
    //         <MDBCol md="9" className="text-left">
    //               <h2 style={{ color: "black" }} className="title  footerTitle">COMPANY                 </h2>

    //           <MDBCol color="black" md="3" className=" background">
    //             <ul>
    //               <li className="list-unstyled Footerbg footerAnch">
    //                 <a href="/" style={style.li}>
    //                   <p className="text-dark">Home</p>
    //                 </a>
    //               </li>
    //               <li className="list-unstyled">
    //                 <a href="/about" style={style.li}>
    //                   <p className="text-dark">About</p>
    //                 </a>
    //               </li>
    //               <li className="list-unstyled">
    //                 <a href="/services" style={style.li}>
    //                   <p className="text-dark">Services</p>
    //                 </a>
    //               </li>
    //               <li className="list-unstyled">
    //                 <a href="/FEATURES" style={style.li}>
    //                   <p className="text-dark">Features</p>
    //                 </a>
    //               </li>
    //               <li className="list-unstyled">
    //                 <a href="/career" style={style.li}>
    //                   <p className="text-dark">Career</p>
    //                 </a>
    //               </li>
    //               <li className="list-unstyled">
    //                 <a href="/contact_us" style={style.li}>
    //                   <p className="text-dark">Contact Us</p>
    //                 </a>
    //               </li>
    //             </ul>
    //           </MDBCol>
    //         </MDBCol>
    //         <MDBCol md="3" className="text-left">
    //           <div id="fotterContactus">
    //             <h2 className="title text-dark " style={{ color: "black" }}>
    //               Contact US
    //             </h2>

    //             <ul>

    //                              <li className="list-unstyled">
    //                                  <a href="https://www.google.com/maps/place/TheRapidHire+Private+Limited/@22.7405008,75.9009652,17z/data=!3m1!4b1!4m5!3m4!1s0x3962e32b2894590f:0x4e73ebc1261cc50!8m2!3d22.7404959!4d75.9031539">
    //                                    <h4 className="contact-us textcolor">
    //                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    //                 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    //               </svg>
    //                                       <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
    //                                      51, Electronic Complex, Pardesipura, Indore, Madhya Pradesh 452007                      </h4>
    //                                   </a>
    //                                 </li>
    //                                 <li className="list-unstyled">
    //                                <a href="mailto:info@qodit.io">
    //                                     <h4 className="contact-us textcolor">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
    //                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
    //               </svg>
    //                                 <i className="fa fa-envelope"></i> &nbsp;
    //                                       info@qodit.io</h4>
    //                                  </a>
    //                                </li>
    //                                <li className="list-unstyled">
    //                               <a href={`tel:${props.data ? props.data.phone : " "}`}>
    //                                    <h4 className="contact-us textcolor">
    //                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    //                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
    //               </svg>
    //                                       <i className="fa fa-phone"></i> &nbsp;
    //                                       +1 (917) 628 2406                      </h4>
    //                                  </a> &nbsp;
    //                                  {/* <a href={`tel:${props.data ? props.data.phone : " "}`}>
    //              //                       <h4 className="contact-us" style={style.contactUsInLine}>
    //              //                         <i className="fa fa-phone"></i>  &nbsp;
    //              //                         Copyright © 2021 Qodit All Rights Reserved.Web Designed by Qodit  Privacy Policies Terms & Conditions                      </h4>
    //              //                     </a> */}
    //                               </li>
    //                              </ul>

    //           </div>
    //         </MDBCol>
    //       </MDBRow>
    //       <div className="text-center footerCopyWrite py-3">
    //         <MDBContainer>
    //           <div id="footer">
    //             <div className="container text-center" >

    //               <p style={{ color: "black", fontSize: "12px",}}>
    //                 Copyright © 2021 Qodit All Rights Reserved.
    //                 <br />
    //                 Web Designed by Qodit &nbsp;
    //                 <a href="/policy" rel="nofollow" style={{ color: "grey" }}>
    //                   Privacy Policies
    //                 </a>  &nbsp;
    //                 <a href="/term" rel="nofollow" style={{ color: "grey" }}>
    //                   Terms &amp; Conditions
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </MDBContainer>
    //       </div>
    //     </MDBContainer>
    //   </MDBFooter>
    //   <div>
    //     <p style={{ color: "fff", fontSize: "14px",  fontWeight:"500", backgroundColor:"black", padding:"10px 0 10px 0", textAlign:"center"}}>
    //                 Copyright © 2021 Qodit All Rights Reserved.Web Designed by Qodit</p>
    //     </div>

    // </div>

    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3 className="qoditsec">QODIT</h3>

          <p class="footer-links">
            <a href="/" class="link-1">
              Home
            </a>
            <br />
            <a href="/about" class="link-1">
              About
            </a>
            <br />
            <a href="/services" class="link-1">
              Services
            </a>
            <br />
            <a href="/contactus" class="link-1">
              Contact Us
            </a>
            <br />
            <a href="/features" class="link-1">
              Features
            </a>
            <br />
            <a href="/career" class="link-1">
              Career
            </a>
            <br />
          </p>
        </div>

        <div class="footer-center">
          <span className="qoditsec">CONTACT US</span>

          <div className="footercontact">
            <a href="https://www.google.com/maps/place/Qodit+Technology+Pvt.+Ltd/@22.7405821,75.903225,17z/data=!4m6!3m5!1s0x3962e3d4a2f8d07b:0xe7e568886f73dd84!8m2!3d22.7405821!4d75.903225!16s%2Fg%2F11vkjw0bfy?entry=ttu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
                color="white"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </a>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>
                {" "}
                <a href="https://www.google.com/maps/place/Qodit+Technology+Pvt.+Ltd/@22.7405821,75.903225,17z/data=!4m6!3m5!1s0x3962e3d4a2f8d07b:0xe7e568886f73dd84!8m2!3d22.7405821!4d75.903225!16s%2Fg%2F11vkjw0bfy?entry=ttu">
                  ED3, Scheme 94 Sector ED
                </a>
              </span>
              <a href="">Indore, Madhya Pradesh 452010</a>
            </p>
          </div>

          <div style={{ margin: "0 -42px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />{" "}
            </svg>
            <i className="fa fa-phone"></i>

            <p>
              {" "}
              <a href="tel:0731 356 2005">+0731 4901461</a>
            </p>
          </div>

          <div style={{ margin: "0 -42px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:info@qodit.io">info@qodit.io</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
                      <span className="qoditsec">ABOUT US</span>

          <p class="footer-company-about">
            Qodit, an Indian software development and IT outsourcing company, offers cost-effective solutions to enhance your online presence, fostering collaboration among businesses for customer acquisition.
           
          </p>

          <div class="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=100091484453584">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>{" "}
            </a>
            <a href="https://twitter.com/qodit_?s=20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/qodit_/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/qodit_/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@user-mv7lf6bn6o/featured">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <p class="footer-company-name text-center">
        ©2021 Qodit Pvt. Ltd . All Rights Reserved.
      </p>iiiii
    </div>
  );
};
export default FooterPage;

