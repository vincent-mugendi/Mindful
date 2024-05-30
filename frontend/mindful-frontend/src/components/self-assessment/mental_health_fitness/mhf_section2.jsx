import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";

import '../Assessment.css';

const MhfSection2 = () => {
    const { updateAnswer } = useAssessment();

    const handleLonelinessLevelChange = (event) => {
        updateAnswer('loneliness-level', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
            <SelfAssesmentHeader />

            <h4>Mental Health Fitness</h4>

            <form>
                <div>
                    <label>Do you have someone you can talk to when you're feeling down?</label>
                    <div>
                        <input 
                            type="radio" 
                            id="always" 
                            name="loneliness-level" 
                            value="0" 
                            onChange={handleLonelinessLevelChange}
                        />
                        <label htmlFor="always">Yes, always</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="sometimes" 
                            name="loneliness-level" 
                            value="1" 
                            onChange={handleLonelinessLevelChange}
                        />
                        <label htmlFor="sometimes">Yes, sometimes</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="rarely" 
                            name="loneliness-level" 
                            value="2" 
                            onChange={handleLonelinessLevelChange}
                        />
                        <label htmlFor="rarely">Rarely</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="no" 
                            name="loneliness-level" 
                            value="3" 
                            onChange={handleLonelinessLevelChange}
                        />
                        <label htmlFor="no">No</label>
                    </div>
                </div>
            </form>

            <Link to="/finalsubmission"><button>NEXT</button></Link>
        </div>
    );
};

export default MhfSection2;
