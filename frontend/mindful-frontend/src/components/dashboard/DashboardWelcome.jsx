import React from "react";

import arrowIcon from "../../assets/icons/arrow-green.svg";
import "./DashboardWelcome.css";
import { Link } from "react-router-dom";

const DashboardWelcome = ({ username }) => {
    return (
        <div className="welcome">
            <h1>
                Welcome, {username}
            </h1>

            <p>
                How about giving yourself a little check-up with mindful's self-assessment tool?
                <br />It's a great way to see how you're doing mentally.
            </p>

            <div className="assessment">
                <Link to="/selfassessment">
                    <button className="btn">
                        Start the test...
                        <img src={arrowIcon} alt="Arrow Icon" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DashboardWelcome;
