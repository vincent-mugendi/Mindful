import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

import { useAssessment } from "../../../context/Assessmentcontext";
import '../Assessment.css';

const PsSection5 = () => {
    const { updateAnswer } = useAssessment();

    const handleLocationChange = (event) => {
        updateAnswer('location', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
            <SelfAssesmentHeader />

            {/* SECTION 5 */}
            <form>
                <div>
                    <label htmlFor="location">What's your location? (County/Region):</label>
                    <input type="text" id="location" name="location" placeholder="Please specify your location" onChange={handleLocationChange}></input>
                </div>
            </form>

            <Link to="/mds-section1"><button>NEXT</button></Link>
        </div>
    );
};

export default PsSection5;