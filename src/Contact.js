import About from "./About";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Subject: ${subject}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/916379837692?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="container-fluid bg-white p-0">
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0">NovaCodeZ</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <a href="/" className="nav-item nav-link">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/service" className="nav-item nav-link">
                Service
              </a>
              <a href="/project" className="nav-item nav-link">
                Project
              </a>
              <a href="/contact" className="nav-item nav-link active">
                Contact
              </a>
            </div>
            <a href="/get-started" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
              Get Started
            </a>
          </div>
        </nav>

        <div className="container-fluid py-5 bg-primary hero-header">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated slideInDown">Contact</h1>
                <hr className="bg-white mx-auto mt-0" style={{ width: "90px" }} />
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a className="text-white" href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#">
                        Pages
                      </a>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Contact Us<span></span>
            </p>
            <h1 className="text-center mb-5">Contact For Any Query</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <p className="text-center mb-4"></p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        onClick={handleButtonClick}
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <p className="section-title text-white h5 mb-4">
                Address<span></span>
              </p>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Perambur,Chennai-11
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 63798 37692 and +91 86100 51856
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>novacodez24@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="section-title text-white h5 mb-4">
                Quick Link<span></span>
              </p>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="#">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="#">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="#">
                Career
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="section-title text-white h5 mb-4">
                Gallery<span></span>
              </p>
              <div className="row g-2">
                <div className="col-4">
                  <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="img/portfolio-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="img/portfolio-5.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="img/portfolio-6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="section-title text-white h5 mb-4">
                Newsletter<span></span>
              </p>
              <p> Send a message through mail</p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <a href="https://wa.me/916379837692?text=Hello%2C%20I%20found%20your%20business%20on%20your%20website">
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  href="https://wa.me/916379837692?text=Hello%2C%20I%20found%20your%20business%20on%20your%20website"
                >
                  Send
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-light py-4" style={{ background: "#051225" }}>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  NovaCodeZ
                </a>
                , All Right Reserved.
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Contact;
