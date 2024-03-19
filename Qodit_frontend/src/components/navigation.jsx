import { Link, withRouter } from "react-router-dom";
export const Navigation = () => {
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
          {/* <Link className="navbar-brand page-scroll" to="/">
            Qodit
          </Link> */}
          <a href="/">
            <img className="navbar-brand page-scroll" src="img/logo1.png"></img>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a
                exact
                activeClassName="active"
                href="/about"
                className="page-scroll hover-underline-animation"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                activeClassName="active"
                href="/services"
                className="page-scroll  hover-underline-animation"
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                exact
                activeClassName="active"
                href="/features"
                className="page-scroll hover-underline-animation"
              >
                Feature
              </a>
            </li>

            <li>
              <a
                exact
                activeClassName="active"
                href="/career"
                style={{ textDecoration: "none" }}
                className="page-scroll hover-underline-animation"
              >
                Career
              </a>
            </li>
            <button className="contactusbtn">
              <a className="contactlink" href="/contactus">
                {" "}
                CONTACT US
              </a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
 