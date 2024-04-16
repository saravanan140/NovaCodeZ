import portfolio1 from './img/portfolio-1.jpg'
import portfolio2 from './img/portfolio-2.jpg'
import portfolio3 from './img/portfolio-3.jpg'
import portfolio4 from './img/portfolio-4.png'
import portfolio5 from './img/portfolio-5.jpg'
import portfolio6 from './img/portfolio-6.jpg'

const Footer = () => {

    const handleButtonClick = () => {
        alert('Currently the Contact Portal is under Maintenance , Contact us using the mail id or phone number');
      };
    return (
        <>
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i className="fa fa-map-marker-alt me-3">Perambur,Chennai-11</i></p>
                        <p><i className="fa fa-phone-alt me-3">+91 63798 37692 and +91 86100 51856</i></p>
                        <p><i className="fa fa-envelope me-3"></i>novacodez24@gmail.com</p>
                        <div className="d-flex pt-2">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="btn btn-link" href="/about">About Us</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="btn btn-link" href="/contact">Contact Us</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="btn btn-link" href="#">Privacy Policy</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="btn btn-link" href="#">Terms & Condition</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="btn btn-link" href="#">Career</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio1} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio4} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio5} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Stay in the loop with our latest innovations, tech insights, and project highlights! Subscribe to our newsletter and be the first to explore the exciting world of NovaCodeZ's software development journey</p>
                        <div className="position-relative w-100 mt-3">
                            <input onClick={handleButtonClick} onPointerEnter={handleButtonClick} className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ 'height': '48px'}}  />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy;
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */} 
                        <a className="border-bottom" href="#">NovaCodeZ</a>, All Right Reserved.  
                        
                        </div>                        
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
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
</>
    );
}

export default Footer;
