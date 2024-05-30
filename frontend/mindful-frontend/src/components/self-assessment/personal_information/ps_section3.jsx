import React from "react";
import { Link } from "react-router-dom";
import SelfAssesmentHeader from "../../header/SelfAssessmentHeader";
import { useAssessment } from "../../../context/Assessmentcontext";
import '../Assessment.css';


const PsSection3 = () => {
    const { updateAnswer } = useAssessment();

    const handleOccupationChange = (event) => {
        updateAnswer('occupation', event.target.value);
    };

    const handleOccupationOtherChange = (event) => {
        updateAnswer('occupation-other', event.target.value);
    };

    return (
        <div className="assessment-sections">
            {/* HEADER */}
            <SelfAssesmentHeader />

            {/* SECTION 3 */}
            <form>
                <div>
                    <label htmlFor="occupation">Occupation</label>
                    <select id="occupation" name="occupation" defaultValue="" onChange={handleOccupationChange}>
                        <option value="" disabled>Select your occupation</option>
                        <option value="student">Student</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                    </select>
                    {document.getElementById("occupation")?.value === "other" && (
                        <input 
                            type="text" 
                            id="occupation-other" 
                            name="occupation-other" 
                            placeholder="Please specify if other" 
                            onChange={handleOccupationOtherChange}
                        />
                    )}
                </div>
            </form>

            <Link to="/ps-section4"><button>NEXT</button></Link>
        </div>
    );
}

export default PsSection3;
