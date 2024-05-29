import React from "react";
import "./LandingHero.css"
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow-0.svg";

const LandingHero = () => {
    return (

        <>
        <section className="hero-spacer"></section>
        <h2 className="hero-title">FRIENDLY REMINDER</h2>
        <h1 className="hero-subtitle">You Matter.</h1>
        
        <p className="hero-copy">
            Mindful is here to empower you by offering the right tools and knowledge that you need to take charge of your mental health.
        </p>

        <div className="register-0">
            <Link to="/signup">
                <button className="register-btn">Begin Here...</button>
            </Link>
        </div>

        <div className="transition">
            <img src={arrowIcon} alt="Aroow Icon" />
        </div>
        
        </>
    );
}

export default LandingHero;