import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const MhfSection2 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        
        <h4>Mental Health Fitness</h4>
        
        
        <form>
            <div>
                <label htmlFor="loneliness-level">Do you have someone you can talk to when you're feeling down?</label>
                <div>
                    <input 
                    type="radio" 
                    id="always" 
                    name="loneliness-level" 
                    value="0" 
                    />
                    <label htmlFor="always">Yes, always</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="rarely" 
                    name="loneliness-level" 
                    value="1" 
                    />
                    <label htmlFor="rarely">Rarely</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="sometimes" 
                    name="loneliness-level" 
                    value="2" 
                    />
                    <label htmlFor="sometimes">Yes, Sometimes</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="no" 
                    name="loneliness-level" 
                    value="3" 
                    />
                    <label htmlFor="no">No </label>
                    
                </div>


            </div>
        </form>



        <Link to="/mhf-section2"><button>NEXT</button></Link>
        </>
    )
}

export default MhfSection2;