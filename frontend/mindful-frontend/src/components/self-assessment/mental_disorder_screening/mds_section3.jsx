import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";

const MdsSection3 = () => {
    const { updateAnswer } = useAssessment();

    const handleConditionPeriodChange = (event) => {
        updateAnswer('condition-period', event.target.value);
    };

    return (
        <>
            {/* HEADER */}
            <div className="header">
                <SelfAssesmentHeader />
            </div>

            {/* SECTION 4 */}
            <h4>Stage of condition</h4>

            <form>
                <div>
                    <label>How long have you been experiencing these symptoms?</label>
                    <div>
                        <input 
                            type="radio" 
                            id="weeks" 
                            name="condition-period" 
                            value="0" 
                            onChange={handleConditionPeriodChange}
                        />
                        <label htmlFor="weeks">Less than a month</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="months-1-3" 
                            name="condition-period" 
                            value="1" 
                            onChange={handleConditionPeriodChange}
                        />
                        <label htmlFor="months-1-3">1-3 months</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="months-3-6" 
                            name="condition-period" 
                            value="2" 
                            onChange={handleConditionPeriodChange}
                        />
                        <label htmlFor="months-3-6">3-6 months</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" 
                            id="more-than-6months" 
                            name="condition-period" 
                            value="3" 
                            onChange={handleConditionPeriodChange}
                        />
                        <label htmlFor="more-than-6months">More than 6 months</label>
                    </div>
                </div>
            </form>

            <Link to="/mds-section4"><button>NEXT</button></Link>
        </>
    );
};

export default MdsSection3;
