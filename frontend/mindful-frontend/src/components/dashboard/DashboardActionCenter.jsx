import React from "react";

import './DashboardActionCenter.css';
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow-green.svg";


const DashboardActionCenter = () => {
    return (
        <div className="action">
            <h1>Action Center</h1>
            <p>Get a personalized Action Plan to improve your Mental health
                <br />when you take mindful’s self-assessment test</p>
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
}

export default DashboardActionCenter;