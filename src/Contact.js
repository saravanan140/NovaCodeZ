import About from "./About";

const Contact = () => {

    const handleButtonClick = () => {
          alert('Currently the Contact Portal is under Maintenance , Contact us using the mail id or phone number');
        };

    return(
        <div class="container-fluid bg-white p-0">
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}

        <div class="container-fluid position-relative p-0">
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
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="/" class="nav-item nav-link">Home</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={About} class="nav-item nav-link">About</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/service" class="nav-item nav-link">Service</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/project" class="nav-item nav-link">Project</a>
                       
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/contact" class="nav-item nav-link active">Contact</a>
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                </div>
            </nav>

            <div class="container-fluid py-5 bg-primary hero-header">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated slideInDown">Contact</h1>
                            <hr class="bg-white mx-auto mt-0" style={{ 'width': '90px'}} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="container-fluid py-5">
            <div class="container py-5 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
                    <h1 class="text-center mb-5">Contact For Any Query</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <p class="text-center mb-4"> </p>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style={{'height': '150px' }}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button onClick={handleButtonClick} class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i class="fa fa-map-marker-alt me-3"></i>Perambur,Chennai-11</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+91 63798 37692 and +91 86100 51856</p>
                        <p><i class="fa fa-envelope me-3"></i>novacodez24@gmail.com</p>
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
                                <img class="img-fluid" src="img/portfolio-1.jpg" alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-2.jpg" alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-3.jpg" alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-4.png" alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-5.jpg" alt="" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Stay in the loop with our latest innovations, tech insights, and project highlights! Subscribe to our newsletter and be the first to explore the exciting world of NovaCodeZ's software development journey</p>
                        <div class="position-relative w-100 mt-3">
                            <input onClick={handleButtonClick} class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ 'height': '48px' }} />
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
                            <a class="border-bottom" href="#">NovaCodeZ</a>, All Right Reserved. 
						
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

export default Contact;
