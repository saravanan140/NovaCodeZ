

const Error = () => {
    return(
        <div class="container-xxl bg-white p-0">

        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
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
                        <a href="/service" class="nav-item nav-link">Service</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="/project" class="nav-item nav-link">Project</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div class="nav-item dropdown">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="404.html" class="dropdown-item active">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-primary hero-header">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated slideInDown">Not Found</h1>
                            <hr class="bg-white mx-auto mt-0" style={{ 'width': '90px' }} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item">
                                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item">
                                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">404</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container px-lg-5 text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
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
                        <a class="btn btn-link" href="">About Us</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a class="btn btn-link" href="">Contact Us</a>
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
                                <img class="img-fluid" src="img/portfolio-4.jpg" alt=""  />
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
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ 'height': '48px'}} />
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
                            <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							
							Designed By 
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
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

export default Error;