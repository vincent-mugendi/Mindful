import React from "react";
import "./LandingLastCTA.css";

import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow-0.svg";

const LandingLastCTA = () => {
    return (
        <div className="last-cta">
            <h3>Ready to take that first step towards better mental health?</h3>

            {/* Call to Action */}
            <div className="last-cta-btn">
                <Link to="/signup">
                    <button className="register-btn">
                        Mindful can help you
                        <img src={arrowIcon} alt="Arrow Icon" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LandingLastCTA;
