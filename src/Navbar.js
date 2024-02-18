import React from 'react';
import hero from './img/hero.png'
import about from './img/about.jpg'
import Project from './Project';
import Testimonial from './Testimonial';
import Footer from './Footer';


const Navbar = () => {
    return (
        <div>
        {/* <div className="container-fluid bg-white p-0"> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
        </div> */}
 
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0">NovaCodeZ</h1>
                    {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/" className="nav-item nav-link active">Home</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/about" className="nav-item nav-link">About</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/service" className="nav-item nav-link">Service</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/project" className="nav-item nav-link">Project</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        
                        
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="/service" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                </div>
            </nav>

            <div className="container-fluid bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown"> A Digital Company of Intelligent & Creative Minds</h1>
                            <p className="text-white pb-3 animated slideInDown">Welcome to <b>NovaCodeZ</b>, a dynamic hub where intelligence converges with creativity to redefine the possibilities in the digital realm. We are more than just a digital agency; we are a collective of innovative minds dedicated to delivering intelligent solutions with a creative edge.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="/about" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="/contact" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid animated zoomIn" src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>



<div className="container-fluid py-5">
    <div className="container py-5 px-lg-5">
        <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded text-center p-4">
                    <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                    <h5 className="mb-3">Digital Marketing</h5>
                    <p className="m-0">Welcome to the forefront of the digital landscape! At <b>NovaCodeZ</b>, we specialize in dynamic and results-driven digital marketing strategies that propel businesses to new heights in the online world.</p>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded text-center p-4">
                    <i className="fa fa-3x fa-search text-primary mb-4"></i>
                    <h5 className="mb-3">SEO & Backlinks</h5>
                    <p className="m-0">Welcome to the gateway of digital prominence! At <b>NovaCodeZ</b>, we specialize in elevating your online presence through strategic Search Engine Optimization (SEO) and the art of cultivating high-quality backlinks.</p>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded text-center p-4">
                    <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                    <h5 className="mb-3">Design & Development</h5>
                    <p className="m-0">Welcome to <b>NovaCodeZ</b>, where innovation meets aesthetics and functionality. As a leading force in the digital landscape, we specialize in delivering bespoke design and development solutions that transcend expectations.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="container-fluid py-5">
    <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary">About Us<span></span></p>
                <h1 className="mb-5">#1 Digital solution with 3+ years of experience</h1>
                <p className="mb-4">Welcome to <b>NovaCodeZ</b>, where innovation meets experience to redefine digital excellence. As a pioneering force in the industry, we have proudly held the position as the #1 digital solution provider for over 15 years.</p>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Full stack development</p>
                        <p className="mb-2">95%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ 'width' : '95%'}}></div>
                    </div>
                </div>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Cross Platforms Application Development <b>(Android , Ios, Windows , Linux etc..)</b></p>
                        <p className="mb-2">90%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ 'width' : '90%'}}></div>
                    </div>
                </div>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Data Analytics</p>
                        <p className="mb-2">85%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ 'width' : '85%'}}></div>
                    </div>
                </div>
                <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Cyber Security</p>
                        <p className="mb-2">90%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ 'width' : '90%'}}></div>
                    </div>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="/about" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
            </div>
            <div className="col-lg-6">
                <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={about} alt='' style={{ 'width' : '600px', 'height' : '450px' }} />
            </div>
        </div>
    </div>
</div>

<div className="container-fluid bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
        <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">3+</h1>
                <p className="text-white mb-0">Years Experience</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">25</h1>
                <p className="text-white mb-0">Team Members</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">60+</h1>
                <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">100+</h1>
                <p className="text-white mb-0">Compleate Projects</p>
            </div>
        </div>
    </div>
</div>


<div className="container-fluid py-5">
    <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
            <h1 className="text-center mb-5">What Solutions We Provide</h1>
        </div>
        <div className="row g-4">
            
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                        <i className="fab fa-android fa-2x"></i>
                    </div>
                    <h5 className="mb-3">App Development</h5>
                    <h6 className="mb-3">Android and iOS</h6>
                    <p className="m-0">Innovate and Connect: App Development for iOS and Android. Welcome to a world where possibilities unfold at your fingertips! At <b>NovaCodeZ</b>, we specialize in crafting seamless and innovative mobile applications for both iOS and Android platforms.</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                        <i className="fa fa-laptop-code fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Full Stack</h5>
                    <p className="m-0">Certainly! Here's a note on Full Stack that you can use for your website. Welcome to the World of Full Stack Development!. At <b>NovaCodeZ</b>, we believe in delivering comprehensive Web and App Solutions, and that's where Full Stack Development comes into play.</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Social Media Marketing</h5>
                    <p className="m-0">Social Media Marketing is the strategic use of social media platforms to build brand awareness, drive traffic, and promote products or services. It's more than just posting content; it's about creating meaningful interactions and fostering a community around your brand.</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                        <i className="fa fa-mail-bulk fa-2x"></i>
                    </div>
                    <h5 className="mb-3">24/7 Service</h5>
                    <p className="m-0">Always Open, Always Ready: Your 24/7 Service Partner. Welcome to a service experience that never sleeps! At <b>NovaCodeZ</b>, we take pride in offering round-the-clock support to ensure that your needs are met, no matter the time or place. </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                        <i className="fa fa-thumbs-up fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Fast Deployment and Hosting</h5>
                    <p className="m-0">Robust Hosting: Empowering Your Online Presence. Welcome to the era of rapid digital transformation! At <b>NovaCodeZ</b>, we specialize in providing fast deployment solutions and reliable hosting services to ensure your online presence is not just live, but thriving.</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                        <i className="fa fa-search fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Cyber Security</h5>
                    <h6 className='mb-3' >Cybersecurity Solutions for a Safer Tomorrow</h6>
                    <p className="m-0">In an era where digital threats are omnipresent, securing your online assets is paramount. At <b>NovaCodeZ</b>, we specialize in providing robust cybersecurity solutions to safeguard your data, privacy, and digital operations.</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
            
        </div>
    </div>
</div>
<Project />
<Testimonial />
<Footer />

{/* 
</div> */}
</div>

    );
}

export default Navbar;
