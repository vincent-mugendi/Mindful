import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const MdsSection1 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 4 */}

        <h4>Depression Screening (PHQ-9 Example)</h4>
        
        
        <form>
            <div>
                <label htmlFor="interest-level">Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?</label>
                <div>
                    <input 
                    type="radio" 
                    id="not-at-all" 
                    name="interest-level" 
                    value="0" 
                    />
                    <label htmlFor="not-at-all">Not at all (0)</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="several-days" 
                    name="interest-level" 
                    value="1" 
                    />
                    <label htmlFor="several-days">Several days (1)</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="more-than-half" 
                    name="interest-level" 
                    value="2" 
                    />
                    <label htmlFor="more-than-half">More than half the days (2)</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="nearly-every-day" 
                    name="interest-level" 
                    value="3" 
                    />
                    <label htmlFor="nearly-every-day">Nearly every day (3)</label>
                    
                </div>
            </div>
        </form>



        <Link to="/mds-section2"><button>NEXT</button></Link>
        </>
    )
}

export default MdsSection1;