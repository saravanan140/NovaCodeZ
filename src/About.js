const About = () => {


    const handleButtonClick = () => {
        alert('Currently the Contact Portal is under Maintenance , Contact us using the mail id or phone number');
      };

    return(
        <div class="container-fluid bg-white p-0">

        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style={{ 'width' : '3rem', 'height': '3rem'}} role="status">
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/" class="nav-item nav-link">Home</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/about" class="nav-item nav-link active">About</a>                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/service" class="nav-item nav-link">Service</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/project" class="nav-item nav-link">Project</a>
                        
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/contact" class="nav-item nav-link">Contact</a>
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="/service" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                </div>
            </nav>

            <div class="container-fluid py-5 bg-primary hero-header">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated slideInDown">About Us</h1>
                            <hr class="bg-white mx-auto mt-0" style={{ 'width' : '90px' }} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <div class="container py-5 px-lg-5">
                <div class="row g-4">
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

        <div class="container-fluid py-5">
            <div class="container py-5 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p class="section-title text-secondary">About Us<span></span></p>
                        <h1 className="mb-5">#1 Digital solution with 1+ years of experience</h1>
                <p className="mb-4">Welcome to <b>NovaCodeZ</b>, where innovation meets experience to redefine digital excellence. As a pioneering force in the industry, we have proudly held the position as the #1 digital solution provider for over 1+ years.</p>
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
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ 'width' : '90%'}}></div>
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
                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ 'width' : '90%'}}></div>
                    </div>
                </div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="" class="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg" alt="" style={{ 'width': '550px', 'height': '500px' }} />
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i class="fa fa-certificate fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">1+</h1>
                        <p class="text-white mb-0">Years Experience</p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <i class="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">15</h1>
                        <p class="text-white mb-0">Team Members</p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <i class="fa fa-users fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">20</h1>
                        <p class="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <i class="fa fa-check fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">14</h1>
                        <p class="text-white mb-0">Compleate Projects</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5">
            <div class="container py-5 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                    <h1 class="text-center mb-5">Our Head Team</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4"  src="./img/team-1.jpg" alt="" />
                                <h5>Saravanan A</h5>
                                <span>CEO & Founder</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4"  src="./img/team-2.jpg" alt="" style={{ 'width': '380px', 'height': '330px' }} />
                                <h5>Vinoth Kumar L</h5>
                                <span>CFO & Developer and Data Analyst</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="./img/team-3.jpg" alt="" style={{ 'width': '380px', 'height': '330px' }} />
                                <h5>Askar Basha R </h5>
                                <span>Designer & Data Analyst</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
]
        <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i class="fa fa-map-marker-alt me-3"></i>13/1 Thanikasalam Street,Perambur,Chennai-11</p>
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
                    {/*Quick Link*/}
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
                                <img class="img-fluid" src="img/portfolio-1.jpg" alt=""  />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-2.jpg" alt=""  />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-3.jpg" alt=""  />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-4.png" alt=""  />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-5.jpg" alt=""  />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-6.jpg" alt=""  />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Stay in the loop with our latest innovations, tech insights, and project highlights! Subscribe to our newsletter and be the first to explore the exciting world of NovaCodeZ's software development journey</p>
                        <div class="position-relative w-100 mt-3">
                            <input onClick={handleButtonClick} class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style= {{ 'height' : '48px' }} />
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

export default About;
