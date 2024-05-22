import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const PsSection2 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 2 */}

       <form>
            <div>
                <label htmlFor="age">Gender</label>
                <select id="age" name="age" defaultValue="">
                    <option value="" disabled>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="Non-binary">Non-binary/Third gender</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                
            </div>
        </form>


        <Link to="/ps-section3"><button>NEXT</button></Link>
        </>
    )
}

export default PsSection2;