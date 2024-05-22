import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const PsSection3 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 2 */}

       <form>
            <div>
                <label htmlFor="age">Occupation</label>
                <select id="occupation" name="occupation" defaultValue="">
                    <option value="" disabled>Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" id="occupation-other" name="occupation-other" placeholder="Please specify if other"></input>
                
            </div>
        </form>


        <Link to="/ps-section4"><button>NEXT</button></Link>
        </>
    )
}

export default PsSection3;