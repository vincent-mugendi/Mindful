import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const MhfSection1 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        
        <h4>Mental Health Fitness</h4>
        
        
        <form>
            <div>
                <label htmlFor="activity-level">How often do you engage in physical activity?</label>
                <div>
                    <input 
                    type="radio" 
                    id="never" 
                    name="activity-level" 
                    value="0" 
                    />
                    <label htmlFor="never">Never</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="rarely" 
                    name="activity-level" 
                    value="1" 
                    />
                    <label htmlFor="rarely">Rarely</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="sometimes" 
                    name="activity-level" 
                    value="2" 
                    />
                    <label htmlFor="sometimes">Sometimes</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="often" 
                    name="activity-level" 
                    value="3" 
                    />
                    <label htmlFor="often">Often </label>
                    
                </div>

                <div>
                    <input 
                    type="radio" 
                    id="always" 
                    name="activity-level" 
                    value="3" 
                    />
                    <label htmlFor="always">Always </label>
                    
                </div>
            </div>
        </form>



        <Link to="/mhf-section2"><button>NEXT</button></Link>
        </>
    )
}

export default MhfSection1;