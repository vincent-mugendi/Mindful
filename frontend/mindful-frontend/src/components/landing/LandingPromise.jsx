import React from "react";
import "./LandingPromise.css"


const LandingPromise = () => {
    return (
        <div className="promises">

        <h1 className="title">Why should you trust mindful?</h1>

        {/* First Mindful Promise */}
        <section className="promise-1">
            <div className="empty"></div>
            
            <div>
                <h2 id="number">1</h2>
            </div>
            
            <div>
                <h3 id="promise-title">Personalized Guidance</h3>
                <p>We curate tailored resources and support
                    <br/>to fit your unique journey.</p>
            </div>
            
        </section>


        {/* Second Mindful Promise */}
        <section className="promise-2">
            <div className="empty"></div>
            
            <div>
                <h2 id="number-2">2</h2>
            </div>
            
            <div>
                <h3 id="promise-title">Expert Insights</h3>
                <p>Access reliable information
                    <br/>from mental health professionals.
                </p>
            </div>

            <div className="last"></div>
            
        </section>


        {/* First Mindful Promise */}
        <section className="promise-3">
            <div className="empty"></div>
            
            <div>
                <h2 id="number">3</h2>
            </div>
            
            <div>
                <h3 id="promise-title">Community Support</h3>
                <p>Connect with mindful community and
                    <br/>meet people who understand what you're going through.</p>
            </div>
            
        </section>
        </div>
    );
}

export default LandingPromise;