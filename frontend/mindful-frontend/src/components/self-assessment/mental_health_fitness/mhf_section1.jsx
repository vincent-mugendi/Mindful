import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";
import '../Assessment.css';

const MhfSection1 = () => {
    const { updateAnswer } = useAssessment();

    const handleActivityLevelChange = (event) => {
        updateAnswer('activity-level', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
            <SelfAssesmentHeader />

            <h4>Mental Health Fitness</h4>

            <form>
                <div>
                    <label>How often do you engage in physical activity?</label>
                    <div>
                        <input 
                            type="radio" 
                            id="never" 
                            name="activity-level" 
                            value="0" 
                            onChange={handleActivityLevelChange}
                        />
                        <label htmlFor="never">Never</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="rarely" 
                            name="activity-level" 
                            value="1" 
                            onChange={handleActivityLevelChange}
                        />
                        <label htmlFor="rarely">Rarely</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="sometimes" 
                            name="activity-level" 
                            value="2" 
                            onChange={handleActivityLevelChange}
                        />
                        <label htmlFor="sometimes">Sometimes</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="often" 
                            name="activity-level" 
                            value="3" 
                            onChange={handleActivityLevelChange}
                        />
                        <label htmlFor="often">Often</label>
                    </div>

                    <div>
                        <input 
                            type="radio" 
                            id="always" 
                            name="activity-level" 
                            value="4" 
                            onChange={handleActivityLevelChange}
                        />
                        <label htmlFor="always">Always</label>
                    </div>
                </div>
            </form>

            <Link to="/mhf-section2"><button>NEXT</button></Link>
        </div>
    );
};

export default MhfSection1;
