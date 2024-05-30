import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../../context/Assessmentcontext';

import './FinalSubmission.css'
import './Assessment.css';
import SelfAssesmentHeader from "../header/SelfAssessmentHeader";
import ScreenLoader from "../screenloader/ScreenLoader.jsx";

const FinalSubmission = () => {
  const { answers, submitAnswers } = useAssessment();
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmissionError(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/submit-answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error(`Error submitting answers: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData.message);

      // Delay for 3 seconds before navigating to the action plan
      setTimeout(() => {
        navigate('/action-plan', { state: { userCluster: responseData.cluster } });
      }, 3000); // 3 seconds delay
    } catch (error) {
      console.error('Error submitting answers:', error);
      setSubmissionError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => setSubmissionError(null), 5000);
    return () => clearTimeout(timeoutId);
  }, [submissionError]);

  return (
    <div className="assessment-sections">
      {isLoading ? (
        <ScreenLoader /> // Show loader when isLoading is true
      ) : (
        <>
          <SelfAssesmentHeader />
          <h4>Review Your Answers</h4>
          <div className="answers-list">
            {Object.entries(answers).map(([question, answer], index) => (
              <div key={index} className="answer-item">
                <p><strong>{question}</strong></p>
                <p>{answer}</p>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} disabled={isLoading}>
            Submit
          </button>
          {submissionError && <p className="error-message">{submissionError}</p>}
        </>
      )}
    </div>
  );
};

export default FinalSubmission;
