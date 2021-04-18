import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-container row">
            <div className="address col-md-3">
                <h6>#000(0th Floor),Road#00</h6>
                <p>Shymoli, Dhaka, Bangladesh</p>

            </div>
            <div className="company col-md-3">
                <h2>Company</h2>
                <br/>
                <a href="#">About</a>
                <br/>
                <a href="#">Project</a>
                <br/>
                <a href="#">Our Team</a>
                <br/>
                <a href="#">Terms Condition</a>
                <br/>
                <a href="#">Submit Listing</a>
            </div>
            <div className="quickLink col-md-3">
            <h2>Quick Links</h2>
            <br/>
            <a href="#">Quick Links</a>
            <br/>
            <a href="#">Rentals</a>
            <br/>
            <a href="#">Sales</a>
            <br/>
            <a href="#">Contact</a>
            <br/>
            <a href="#">Our blog</a>
            </div>
            <div className="aboutUs col-md-3">
                <h2>About Us</h2>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque commodi maiores excepturi nemo veniam est obcaecati ullam consequatur laboriosam?</p>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </section>
    );
};

export default Footer;