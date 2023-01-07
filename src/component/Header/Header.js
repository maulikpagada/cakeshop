import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div>
                <div className="row gx-0">
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <i className="bi bi-envelope fs-1 text-primary me-3" />
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-primary border-inner py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3" />CakeZone</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3" />CakeZone</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto mx-lg-auto py-0">
                        <NavLink exact className="nav-item nav-link" to={'/'}>Home</NavLink>
                        <NavLink exact className="nav-item nav-link" to={'About'}>About Us</NavLink>
                        <NavLink exact className="nav-item nav-link" to={'manu'}>Menu &amp; Pricing</NavLink>
                        <NavLink exact className="nav-item nav-link" to={'Master'}>Master Chefs</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink exact className="nav-link dropdown-toggle" to={'Page'} data-bs-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu m-0">
                                <a href="service.html" className="dropdown-item">Our Service</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;