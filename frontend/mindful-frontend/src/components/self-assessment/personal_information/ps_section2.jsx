import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";
import '../Assessment.css';

const PsSection2 = () => {
    const { updateAnswer } = useAssessment();

    const handleGenderChange = (event) => {
        updateAnswer('gender', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
            <SelfAssesmentHeader />

            {/* SECTION 2 */}
            <form>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" defaultValue="" onChange={handleGenderChange}>
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary/Third gender</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                </div>
            </form>

            <Link to="/ps-section3"><button>NEXT</button></Link>
        </div>
    );
}

export default PsSection2;