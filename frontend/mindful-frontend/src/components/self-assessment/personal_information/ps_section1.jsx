import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";

const PsSection1 = () => {
    return (
        <>

        {/* HEADER */}
        <div className="header">
            <SelfAssesmentHeader />
        </div>

        {/* SECTION 1 */}
        <h4>Biographics</h4>
        <p>Please answer the questions to help us offer more personalized insights.</p>
        <form>
            <div>
                <label htmlFor="age">Age:</label>
                <select id="age" name="age" defaultValue="">
                    <option value="" disabled>Select your age range</option>
                    <option value="under-18">Under 18</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55-64">55-64</option>
                    <option value="65-or-older">65 or older</option>
                </select>
                
            </div>
        </form>

        <Link to="/ps-section2"><button>NEXT</button></Link>
        </>
    )
}

export default PsSection1;