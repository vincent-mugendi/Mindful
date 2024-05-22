import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const MdsSection2 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 4 */}

        <h4>Anxiety Screening (GAD-7 Example)</h4>
        
        
        <form>
            <div>
                <label htmlFor="anxiety-level">Over the last 2 weeks, how often have you been feeling nervous, anxious, or on edge?</label>
                <div>
                    <input 
                    type="radio" 
                    id="not-at-all" 
                    name="anxiety-level" 
                    value="0" 
                    />
                    <label htmlFor="not-at-all">Not at all (0)</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="several-days" 
                    name="anxiety-level" 
                    value="1" 
                    />
                    <label htmlFor="several-days">Several days (1)</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="more-than-half" 
                    name="anxiety-level" 
                    value="2" 
                    />
                    <label htmlFor="more-than-half">More than half the days (2)</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="nearly-every-day" 
                    name="anxiety-level" 
                    value="3" 
                    />
                    <label htmlFor="nearly-every-day">Nearly every day (3)</label>
                    
                </div>
            </div>
        </form>



        <Link to="/mds-section3"><button>NEXT</button></Link>
        </>
    )
}

export default MdsSection2;