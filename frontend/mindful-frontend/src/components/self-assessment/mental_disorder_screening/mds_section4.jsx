import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const MdsSection4 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 4 */}
        
        
        <form>
            <div>
                <label htmlFor="interference-level">How much do these symptoms interfere with your ability to perform daily activities?</label>
                <div>
                    <input 
                    type="radio" 
                    id="not-at-all" 
                    name="interference-level" 
                    value="0" 
                    />
                    <label htmlFor="not-at-all">Not at all</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="little" 
                    name="interference-level" 
                    value="1" 
                    />
                    <label htmlFor="little">A little</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="morderate" 
                    name="interference-level" 
                    value="2" 
                    />
                    <label htmlFor="morderate">Moderately</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="severe" 
                    name="interference-level" 
                    value="3" 
                    />
                    <label htmlFor="severe">Severely </label>
                    
                </div>
            </div>
        </form>



        <Link to="/mhf-section1"><button>NEXT</button></Link>
        </>
    )
}

export default MdsSection4;