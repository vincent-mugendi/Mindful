import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const PsSection5 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 5 */}

        <form>
            <div>
                <label htmlFor="location">Location (County/Region):</label>
                <input type="text" id="county" name="county" placeholder="Please specify your county"></input>
            </div>
        </form>


        <Link to="/ps-section5"><button>NEXT</button></Link>
        </>
    )
}

export default PsSection5;