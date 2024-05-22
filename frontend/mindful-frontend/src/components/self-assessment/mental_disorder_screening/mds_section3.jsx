import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const MdsSection3 = () => {
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
                <label htmlFor="condition-period">How long have you been experiencing these symptoms?</label>
                <div>
                    <input 
                    type="radio" 
                    id="weeks" 
                    name="condition-period" 
                    value="0" 
                    />
                    <label htmlFor="weeks">Less than a month</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="months-1-3" 
                    name="condition-period" 
                    value="1" 
                    />
                    <label htmlFor="months-1-3">1-3 months</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="months-3-6" 
                    name="condition-period" 
                    value="2" 
                    />
                    <label htmlFor="months-3-6">3-6 months</label>
                </div>
                
                <div>
                    <input 
                    type="radio" 
                    id="more-than-6months" 
                    name="condition-period" 
                    value="3" 
                    />
                    <label htmlFor="more-than-6months">More than 6 months</label>
                    
                </div>
            </div>
        </form>



        <Link to="/mds-section4"><button>NEXT</button></Link>
        </>
    )
}

export default MdsSection3;