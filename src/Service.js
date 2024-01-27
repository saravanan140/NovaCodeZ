// import testmonial1 from './img/testimonial-1.jpg'
// import testmonial2 from './img/testimonial-2.jpg'
// import testmonial3 from './img/testimonial-3.jpg'

import portfolio1 from './img/portfolio-1.jpg'
import portfolio2 from './img/portfolio-2.jpg'
import portfolio3 from './img/portfolio-3.jpg'
import portfolio4 from './img/portfolio-4.png'
import portfolio5 from './img/portfolio-5.jpg'
import portfolio6 from './img/portfolio-6.jpg'

const Service = () => {

    const handleButtonClick = () => {
        alert('Currently the Contact Portal is under Maintenance , Contact us using the mail id or phone number');
      };

    return (
        <div class="container-xxl bg-white p-0">

        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style={{ 'width' : '3rem', 'height': '3rem' }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}

        <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0">NovaCodeZ</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-0">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/" class="nav-item nav-link">Home</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/about" class="nav-item nav-link">About</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/service" class="nav-item nav-link active">Service</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/project" class="nav-item nav-link">Project</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/contact" class="nav-item nav-link">Contact</a>
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="/service" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-primary hero-header">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated slideInDown">Service</h1>
                            <hr class="bg-white mx-auto mt-0" style={{'width' : '90px'}} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Service</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-xxl py-5">
            <div class="container py-5 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
                    <h1 class="text-center mb-5">What Solutions We Provide</h1>
                </div>
                <div class="row g-4">
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
                    <p className="m-0">In an era where digital threats are omnipresent, securing your online assets is paramount. At <b>NovaCodeZ</b>, we specialize in providing robust cybersecurity solutions to safeguard your data, privacy, and digital operations.</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>


                </div>
            </div>
        </div>
        <div class="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <p class="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
                        <h1 class="text-center text-white mb-4">Stay Always In Touch</h1>
                        <p class="text-white mb-4">Stay in the loop with our latest innovations, tech insights, and project highlights! Subscribe to our newsletter and be the first to explore the exciting world of NovaCodeZ's software development journey</p>
                        <div class="position-relative w-100 mt-3">
                            <input onClick={handleButtonClick} class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{'height': '48px' }} />
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <p class="section-title text-secondary justify-content-center"><span></span>Testimonial<span></span></p>
                <h1 class="text-center mb-5">What Say Our Clients!</h1>
                <div class="owl-carousel testimonial-carousel">
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testmonial1} style={{ 'width': '65px', 'height': '65px' }} alt="" />
                            <div class="ps-4">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testmonial2} style={{ 'width': '65px' , 'height': '65px' }} alt="" />
                            <div class="ps-4">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src={testmonial3} style={{ 'width': '65px' , 'height': '65px'}} alt="" />
                            <div class="ps-4">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i class="fa fa-map-marker-alt me-3"></i>13/1 Thanikasalam Street,Perambur,Chennai-11</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+91 63798 37692 and +91 86100 51856</p>
                        <p><i class="fa fa-envelope me-3"></i>novacodez24@gmail.coms</p>
                        <div class="d-flex pt-2">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-link" href="/about">About Us</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-link" href="/contact">Contact Us</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-link" href="">Career</a>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid" src={portfolio1} alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src={portfolio2} alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src={portfolio3} alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src={portfolio4} alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src={portfolio5} alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src={portfolio6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Stay in the loop with our latest innovations, tech insights, and project highlights! Subscribe to our newsletter and be the first to explore the exciting world of NovaCodeZ's software development journey</p>
                        <div class="position-relative w-100 mt-3">
                            <input onClick={handleButtonClick} class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{'height': '48px'}} />
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; 
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="border-bottom" href="#">NovaCodeZ</a> , All Right Reserved. 
							
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="">Home</a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="">Cookies</a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="">Help</a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" class="btn btn-lg btn-secondary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
    );
}


export default Service;