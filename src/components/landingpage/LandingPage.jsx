import React from "react";
import "./landingPage.css";
import main_logo from "./img/main_logo.jpg";
import power_only from "./img/Power-Only.jpg";
import dw_image from "./img/dv-image.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>
        <header className="large">
          <nav id="menu" className="navbar navbar-expand-sm navbar-light">
            <div className="container">
              <Link to="/">
                <img src={main_logo} className="logo" alt="Company logo" />
              </Link>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#about-us" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/quote" className="nav-link">
                      Get a Quote
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#contact-section" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#driver-appl" className="nav-link">
                      Driver Application
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section id="home-section">
          <div className="overlay">
            <div className="home-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 home-welcome">
                    <h1>
                      <strong>
                        Welcome to
                        <br /> Gergun Transportation Inc.
                      </strong>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-us">
          <div className="container">
            <div className="about-inner">
              <div className="section-title">
                <h1 className="text-center">About Us</h1>
              </div>
              <div className="row">
                <div className="about-content">
                  <p>
                    {" "}
                    Gergun Transportation Inc. offers the highest quality transportation services.
                    We work around the clock to ensure that we provide our customers with unbeatable
                    service and rates. We take care of your load as if it's our only load. To ensure
                    the quality, timeliness, and cost-effectiveness of your shipments, we hold our
                    team to high performance expectations and safety guidelines. Our dispatchers
                    undergo rigorous training and showcase extensive knowledge of mileage rates,
                    preferred routes, and market fluctuations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="container">
            <div className="services-inner my-4">
              <h1 className="display-4 text-center">
                <strong>Our Services</strong>
              </h1>
              <div className="row services-inner">
                <div className="services-content">
                  <p>
                    {" "}
                    Gergun Transportation Inc. offers a variety of equpment to accomodate all of
                    your transportation needs, along with 24/7 dispatch. Also we provide service to
                    all around North America to get your freight wherever it needs to go in a safely
                    and timely manner.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-row p-4">
                    <img src={power_only} className="service-img" alt="" />
                  </div>
                  <div className="p-1 mx-auto text-center">
                    <h4>Power Only</h4>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="d-flex flex-row p-4">
                    <img src={dw_image} className="service-img" alt="" />
                  </div>
                  <div className="p-1 mx-auto text-center">
                    <h4>Dry Van</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="quote-btn p-4 mx-auto">
                <Link to="/quote#quote-section" className="btn btn-primary btn-lg">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact-section">
          <div className="container">
            <div className="contact-inner">
              <div className="section-title p-4 ">
                <h1 className="text-center">Contact</h1>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    Oleg Gherghi: Cell (916) 743-1590
                    <br /> Alex Onatsko: Cell (916) 220-1043
                    <br /> Fax: (916) 914-2111
                    <br /> gerguntrans@gmail.com
                  </p>
                </div>
                <div className="col-md-6 align-self-start">
                  <a href="facebook.com">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="twitter.com">
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="linkedin.com">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="driver-appl">
          <div className="container">
            <div className="driver-inner">
              <div className="section-title p-4">
                <h1 className="text-center">Driver Application</h1>
              </div>

              <div className="row">
                <p>Fill the forms to generate driver application document</p>
              </div>
              <div className="dowload-btn p-4 text-center">
                <Link to="/driver-application" className="btn btn-primary btn-lg">
                  Fill Driver Application
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer id="copyright-section">
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-6 align-self-start">
                  <p>&copy; 2019 Gergun Transportation Inc. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
