import React from "react";
import "./LandingFooter.css";

const LandingFooter = () => {
    return (
        <footer className="footer">
            <hr className="footer-line" />
            <div className="footer-links">
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <span>Mindful ©2024</span>
            </div>
        </footer>
    );
}

export default LandingFooter;