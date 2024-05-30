import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";

import '../Assessment.css';

const MdsSection4 = () => {
    const { updateAnswer } = useAssessment();

    const handleInterferenceLevelChange = (event) => {
        updateAnswer('interference-level', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
                <SelfAssesmentHeader />

            {/* SECTION 4 */}
            <form>
                <div>
                    <label>How much do these symptoms interfere with your ability to perform daily activities?</label>
                    <div>
                        <input 
                            type="radio" 
                            id="not-at-all" 
                            name="interference-level" 
                            value="0" 
                            onChange={handleInterferenceLevelChange}
                        />
                        <label htmlFor="not-at-all">Not at all</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="little" 
                            name="interference-level" 
                            value="1" 
                            onChange={handleInterferenceLevelChange}
                        />
                        <label htmlFor="little">A little</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="moderate" 
                            name="interference-level" 
                            value="2" 
                            onChange={handleInterferenceLevelChange}
                        />
                        <label htmlFor="moderate">Moderately</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="severe" 
                            name="interference-level" 
                            value="3" 
                            onChange={handleInterferenceLevelChange}
                        />
                        <label htmlFor="severe">Severely</label>
                    </div>
                </div>
            </form>

            <Link to="/mhf-section1"><button>NEXT</button></Link>
        </div>
    );
};

export default MdsSection4;
