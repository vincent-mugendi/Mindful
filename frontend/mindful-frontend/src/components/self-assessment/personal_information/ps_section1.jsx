import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";


import '../Assessment.css';

const PsSection1 = () => {
    const { updateAnswer } = useAssessment();

    const handleAgeChange = (event) => {
        updateAnswer('age', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
                <SelfAssesmentHeader />
            
            {/* SECTION 1 */}
            <h4>Biographics</h4>
            <p>Please answer the questions to help us offer more personalized insights.</p>
            <form>
                <div>
                    <label htmlFor="age">Age:</label>
                    <select id="age" name="age" defaultValue="" onChange={handleAgeChange}>
                        <option value="" disabled>Select your age range</option>
                        <option value="under-18">Under 18</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55-64">55-64</option>
                        <option value="65-or-older">65 or older</option>
                    </select>
                </div>
            </form>

            <Link to="/ps-section2"><button>NEXT</button></Link>
        </div>
    );
};

export default PsSection1;
