import React from "react";

const AssessmentIntro = () => {
    return (
        <>
        <h3>INTRODUCTION</h3>
        <p className="intro-msg">
            Welcome to our Mental Health Self-Assessment Test. This tool is designed to help you gain a better understanding of your mental health and well-being. By answering the following questions, you can receive insights into potential mental health conditions, the severity of these conditions, and your overall mental health fitness.
        </p>
        <h4>This self-assessment aims to:</h4>
        <ul>
            <li>Identify symptoms related to common mental disorders.</li>
            <li>Assess the stage and severity of any identified conditions.</li>
            <li>Evaluate your mental health fitness and coping mechanisms.</li>
        </ul>
        <br />
        <br />
        <h5>Your responses are completely confidential and anonymous. We do not collect any personally identifiable information, and your data will not be shared with any third parties.</h5>

        <h4>PLEASE NOTE</h4>
        <h5>Please note that this self-assessment is not a diagnostic tool. It is intended for informational purposes only and should not be used as a substitute for professional diagnosis or treatment. If your results indicate a potential mental health issue, we strongly recommend consulting with a healthcare professional for a comprehensive evaluation and appropriate care.</h5>
        </>
    )
}

export default AssessmentIntro;