import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";
import '../Assessment.css';

const MdsSection1 = () => {
    const { updateAnswer } = useAssessment();

    const handleInterestLevelChange = (event) => {
        updateAnswer('interest-level', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
            <SelfAssesmentHeader />


            {/* SECTION 4 */}
            <h4>Depression Screening (PHQ-9 Example)</h4>

            <form>
                <div>
                    <label>Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?</label>
                    <div>
                        <input 
                            type="radio" 
                            id="not-at-all" 
                            name="interest-level" 
                            value="0" 
                            onChange={handleInterestLevelChange}
                        />
                        <label htmlFor="not-at-all">Not at all</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="several-days" 
                            name="interest-level" 
                            value="1" 
                            onChange={handleInterestLevelChange}
                        />
                        <label htmlFor="several-days">Several days (1)</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="more-than-half" 
                            name="interest-level" 
                            value="2" 
                            onChange={handleInterestLevelChange}
                        />
                        <label htmlFor="more-than-half">More than half the days (2)</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="nearly-every-day" 
                            name="interest-level" 
                            value="3" 
                            onChange={handleInterestLevelChange}
                        />
                        <label htmlFor="nearly-every-day">Nearly every day (3)</label>
                    </div>
                </div>
            </form>

            <Link to="/mds-section2"><button>NEXT</button></Link>
        </div>
    );
};

export default MdsSection1;
