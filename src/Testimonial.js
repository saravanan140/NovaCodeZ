import React from 'react';

import team1 from'./img/default.jpeg'
import team2 from'./img/default.jpeg'
import team3 from'./img/default.jpeg'

const Testimonial = () => {
    return (
        <>

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
                    <img className="img-fluid rounded-circle mb-4" src={team2} alt="" />
                    <h5>SARAVANAN A</h5>
                    <span>CEO & Founder</span>
                </div>
                <div className="d-flex justify-content-center p-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded">
                <div className="text-center border-bottom p-4">
                    <img className="img-fluid rounded-circle mb-4" src={team2} alt="" style={{ 'width': '380px', 'height': '330px' }} />
                    <h5>VINOTH KUMAR L</h5>
                    <span>CFO & Developer and Data Analyst</span>
                </div>
                <div className="d-flex justify-content-center p-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>


                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-light rounded">
                <div className="text-center border-bottom p-4">
                    <img className="img-fluid rounded-circle mb-4" src={team3} alt="" style={{ 'width': '380px', 'height': '330px' }} />
                    <h5>ASKAR BASHA R</h5>
                    <span>Designer & Data Analyst</span>
                </div>
                <div className="d-flex justify-content-center p-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
    );

}

export default Testimonial;
