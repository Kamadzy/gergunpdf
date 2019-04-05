import React from "react";
import main_logo from "../landingpage/img/main_logo.jpg";
import "../landingpage/landingPage.css";

export default function Quote() {
  return (
    <div>
      <header className="large">
        <nav id="menu" className="navbar navbar-expand-sm navbar-light">
          <div className="container">
            <a href="index.html">
              <img src={main_logo} className="logo" alt="Company logo" />
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="index.html#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#about-us" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#services" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#quote-section" className="nav-link">
                    Get a Quote
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#contact-section" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index.html#cdriver-appl" className="nav-link">
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
      <section id="quote-section">
        <div className="container">
          <div className="section-title p-4">
            <h1 className="text-center">GET A QUOTE</h1>
          </div>
          <div className="row">
            <div className="quote-text">
              <p> Please fill out the form below to get an quote.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <form method="POST" action="https://formspree.io/gerguntrans@gmail.com">
              <div className="form-group">
                <label htmlFor="companyInput">Company Name</label> <br />
                <input
                  type="text"
                  className="form-control"
                  name="Company"
                  id="companyInput"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">
                  Your Name <span className="red-star">*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  id="nameInput"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneInput">
                  Phone<span className="red-star">*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="Phone"
                  id="phoneInput"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">
                  Email<span className="red-star">*</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  id="emailInput"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="originInput">
                  Origin<span className="red-star">*</span>
                </label>{" "}
                <br />
                <input
                  type="Origin"
                  className="form-control"
                  name="Origin"
                  id="originInput"
                  placeholder="Origin"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="destinationInput">
                  Destination<span className="red-star">*</span>
                </label>{" "}
                <br />
                <input
                  type="Destination"
                  className="form-control"
                  name="Destination"
                  id="destinationInput"
                  placeholder="Destination"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="detailsInput">Other Details</label> <br />
                <textarea
                  name="Other Details"
                  className="form-control quote-ta"
                  id="detailsInput"
                  placeholder="Other Details"
                />
              </div>
              <button type="submit" className="btn btn-lg btn-primary">
                Send
              </button>
            </form>
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
  );
}
