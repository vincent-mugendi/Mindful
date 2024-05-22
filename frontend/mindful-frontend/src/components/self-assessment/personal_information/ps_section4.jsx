import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const PsSection4 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 4 */}

       <form>
            <div>
                <label htmlFor="living-situation">Living Situation</label>
                <select id="living-situation" name="living-situation" defaultValue="">
                    <option value="" disabled>What's your living situation</option>
                    <option value="alone">Living alone</option>
                    <option value="with-family">Living with family</option>
                    <option value="with-partner">Living with partner</option>
                    <option value="with-roommate">I have a roommate</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" id="living-situation-other" name="living-situation-other" placeholder="Please specify if other"></input>
                
            </div>
        </form>


        <Link to="/ps-section5"><button>NEXT</button></Link>
        </>
    )
}

export default PsSection4;