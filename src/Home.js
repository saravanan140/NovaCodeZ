import React from 'react';
import aboutImage from './img/about.png';
import heroImage from './img/hero.png';
import portfolioImage1 from './img/portfolio-1.jpg';
import portfolioImage2 from './img/portfolio-2.jpg';
import portfolioImage3 from './img/portfolio-3.jpg';
import portfolioImage4 from './img/portfolio-4.jpg';
import portfolioImage5 from './img/portfolio-5.jpg';
import portfolioImage6 from './img/portfolio-6.jpg';
import testimonialImage1 from './img/testimonial-1.jpg';
import testimonialImage2 from './img/testimonial-2.jpg';
import testimonialImage3 from './img/testimonial-3.jpg';
import teamImage1 from './img/team-1.jpg';
import teamImage2 from './img/team-2.jpg';
import teamImage3 from './img/team-3.jpg';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="container-xxl bg-white p-0">
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

        <div className="container-xxl position-relative p-0">
            <nav classNameName="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="#" className="navbar-brand p-0">
                    <h1 className="m-0">NovaCodeZ</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="index.html" className="nav-item nav-link active">Home</Link>
                        <Link to="about.html" className="nav-item nav-link">About</Link>
                        <Link to="service.html" className="nav-item nav-link">Service</Link>
                        <Link to="project.html" className="nav-item nav-link">Project</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="team.html" className="dropdown-item">Our Team</Link>
                                <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                <Link to="404.html" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="#" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</Link>
                </div>
            </nav>

            <div className="container-xxl bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">A Digital Agency Of Inteligents & Creative People</h1>
                            <p className="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                            <Link to="#" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</Link>
                            <Link to="#" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid animated zoomIn" src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h5 className="mb-3">Digital Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-search text-primary mb-4"></i>
                            <h5 className="mb-3">SEO & Backlinks</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                            <h5 className="mb-3">Design & Development</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary">About Us<span></span></p>
                        <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                        <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Digital Marketing</p>
                                <p className="mb-2">85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">SEO & Backlinks</p>
                                <p className="mb-2">90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Design & Development</p>
                                <p className="mb-2">95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link to="#" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</Link>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={aboutImage} alt='' />
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Years Experience</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Team Members</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Compleate Projects</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
                    <h1 className="text-center mb-5">What Solutions We Provide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-search fa-2x"></i>
                            </div>
                            <h5 className="mb-3">SEO Optimization</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="#"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Web Design</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="#"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-facebook-f fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Social Media Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="#"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mail-bulk fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Email Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="#"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-thumbs-up fa-2x"></i>
                            </div>
                            <h5 className="mb-3">PPC Advertising</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="#"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-android fa-2x"></i>
                            </div>
                            <h5 className="mb-3">App Development</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="#"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <p className="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
                        <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                        <p className="text-white mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: '48px' }} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Projects<span></span></p>
                    <h1 className="text-center mb-5">Recently Completed Projects</h1>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="mx-2 active" data-filter="*">All</li>
                            <li className="mx-2" data-filter=".first">Web Design</li>
                            <li className="mx-2" data-filter=".second">Graphic Design</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={portfolioImage1} alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to="#"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={portfolioImage2} alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to="#"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={portfolioImage3} alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to="#"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={portfolioImage4} alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to="#"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={portfolioImage5} alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to="#"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={portfolioImage6} alt="" />
                                <div className="portfolio-overlay">
                                    <Link className="btn btn-square btn-outline-light mx-1" to="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-square btn-outline-light mx-1" to="#"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <p className="section-title text-secondary justify-content-center"><span></span>Testimonial<span></span></p>
                <h1 className="text-center mb-5">What Say Our Clients!</h1>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-light rounded my-4">
                        <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonialImage1} style={{ width: '65px', height: '65px' }} alt=''/>
                            <div className="ps-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded my-4">
                        <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonialImage2} style={{ width: '65px', height: '65px' }} alt=''/>
                            <div className="ps-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded my-4">
                        <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonialImage3} style={{ width: '65px', height: '65px' }} alt=''/>
                            <div className="ps-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                    <h1 className="text-center mb-5">Our Head Team</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src={teamImage1} alt="" />
                                <h5>SARAVANAN A</h5>
                                <span>CEO & Founder</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src={teamImage2} alt="" />
                                <h5></h5>
                                <span>CFO & Developer and Data Analyst</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src={teamImage3} alt="" />
                                <h5>ASKAR BASHA R</h5>
                                <span>Designer and Data Analyst</span>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-instagram"></i></Link>
                                <Link className="btn btn-square mx-1" to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i className="fa fa-map-marker-alt me-3">13/1 Thanikasalam Street,Perambur,Chennai-11</i></p>
                        <p><i className="fa fa-phone-alt me-3">+91 63798 37692 and +91 86100 51856</i></p>
                        <p><i className="fa fa-envelope me-3"></i>novacodez24@gmail.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" to="#"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to="#"><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to="#"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <Link className="btn btn-link" to="#">About Us</Link>
                        <Link className="btn btn-link" to="#">Contact Us</Link>
                        <Link className="btn btn-link" to="#">Privacy Policy</Link>
                        <Link className="btn btn-link" to="#">Terms & Condition</Link>
                        <Link className="btn btn-link" to="#">Career</Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src={portfolioImage1} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolioImage2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolioImage3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolioImage4} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolioImage5} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolioImage6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="#">NovaCodeZ</Link>, All Right Reserved. Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="#">Home</Link>
                                <Link to="#">Cookies</Link>
                                <Link to="#">Help</Link>
                                <Link to="#">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link to="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  );
};

export default Home;
