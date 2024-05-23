// src/components/sections/FinalSubmission.jsx

import React from 'react';
import { useAssessment } from '../../context/Assessmentcontext';

const FinalSubmission = () => {
    const { answers, submitAnswers } = useAssessment();

    const handleSubmit = (event) => {
        event.preventDefault();
        submitAnswers();
    };

    return (
        <>
            <h4>Review Your Answers</h4>
            <pre>{JSON.stringify(answers, null, 2)}</pre>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default FinalSubmission;