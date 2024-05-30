import React from "react";
import { Link } from "react-router-dom";


import './Assessment.css';
import arrowIcon from "../../assets/icons/arrow-green.svg";

const AssessmentIntro = () => {
    return (
        <div className="assessment-sections">
        <div className="section1">
        <h3>Welcome to mindful Self Assessment Tool</h3>
        <p>
            Your responses are completely CONFIDENTIAL AND ANONYMOUS. Mindful does not collect any personally identifiable information, and your data will not be shared with any third parties.
        </p>
        </div>

        <div className="section2">
            <h4>IMPORTANT NOTE</h4>
            <p>This self-assessment is for informational purposes only. While it can provide insights, it's not a substitute for professional help. If your results raise concerns, please reach out to a healthcare professional for a proper evaluation.</p>
        </div>

        <Link to="/ps-section1">
            <button>
                START
                <img src={arrowIcon} alt="Arrow Icon" />
            </button>
        </Link>

        </div>
    )
}

export default AssessmentIntro;