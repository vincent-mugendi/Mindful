// FinalSubmission.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAssessment } from '../../context/Assessmentcontext';

import './Assessment.css';
import SelfAssesmentHeader from "../header/SelfAssessmentHeader";

const FinalSubmission = () => {
  const { answers, submitAnswers } = useAssessment();
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmissionError(null); // Clear any previous error

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
      console.log(responseData.message); // Display success message
      // Redirect to action-plan with the user cluster
      navigate('/action-plan', { state: { userCluster: responseData.cluster } });
    } catch (error) {
      console.error('Error submitting answers:', error);
      setSubmissionError(error.message); // Set error message for display
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Optional: Reset error state after a delay (e.g., for temporary display)
    const timeoutId = setTimeout(() => setSubmissionError(null), 5000); // 5 seconds
    return () => clearTimeout(timeoutId);
  }, [submissionError]);

  return (
    <div className="assessment-sections">
      {/* Header */}
      <SelfAssesmentHeader />
      <h4>Review Your Answers</h4>
      <pre>{JSON.stringify(answers, null, 2)}</pre>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      {submissionError && <p className="error-message">{submissionError}</p>}
    </div>
  );
};

export default FinalSubmission;
