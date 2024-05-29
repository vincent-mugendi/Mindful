import React from "react";
import "./LandingTestimonials.css";

const LandingTestimonials = () => {
    return (
        <div className="testimonials">
            <h3>What mindful community is saying</h3>
            <section className="testimonies">
                <div className="testimony-card">
                    <p>
                        "Mindful has been a game-changer for me. The personalized action plans and community support made a huge difference in my journey."
                    </p>
                    <p className="author">- Alex T.</p>
                </div>
                <div className="testimony-card">
                    <p>
                        "I felt understood and supported from the moment I signed up. Mindful provides everything I need to prioritize my mental health."
                    </p>
                    <p className="author">- Jamila L.</p>
                </div>
                <div className="testimony-card">
                    <p>
                        "Mindful provided me with the tools and confidence I needed to take control of my mental health. It's been an invaluable resource."
                    </p>
                    <p className="author">- Taylor M.</p>
                </div>
            </section>
        </div>
    );
};

export default LandingTestimonials;
