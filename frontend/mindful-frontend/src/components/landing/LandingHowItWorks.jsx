import React from "react";
import "./LandingHowItWorks.css"

import { Link } from "react-router-dom";

const LandingHowItWorks = () => {
    return (
        <div className="how-it-works">
            {/* Seperation Line for spacing */}
        <div className="separator">

        </div>

        <h3 className="main">
            So, how does mindful work?
        </h3>
        <p className="main-msg">
            Using Mindful is as easy as ABC.
        </p>



        {/* Step A */}
        <section className="step-a">
            <div className="empty"></div>
            
            <div>
                <h2 id="letter">A</h2>
            </div>
            
            <div>
                <h3 id="step-title">Sign Up</h3>
                <p>
                    Create your account to get started.
                </p>
            </div>
            
        </section>


        {/* Step B */}
        <section className="step-b">
            <div className="empty"></div>
            
            <div>
                <h2 id="letter-2">B</h2>
            </div>
            
            <div>
                <h3 id="step-title">Take the Assessment</h3>
                <p>
                    Help mindful understand your needs.
                </p>
            </div>

            <div className="last"></div>
            
        </section>



        {/* Step C */}
        <section className="step-c">
            <div className="empty"></div>
            
            <div>
                <h2 id="letter">C</h2>
            </div>
            
            <div>
                <h3 id="step-title">Get Your Action Plan</h3>
                <p>
                    Mindful then uses a special algorithm to curate a personalized plan
                    <br />with steps and resources to help you improve your Mental Health
                </p>
            </div>
            
        </section>


        {/* Call to Action */}
        <div className="register-0">
            <Link to="/signup">
                <button className="register-btn">Get Started...</button>
            </Link>
        </div>

        </div>
    );
}

export default LandingHowItWorks;