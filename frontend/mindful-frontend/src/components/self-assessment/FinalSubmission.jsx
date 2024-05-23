import React, { useState, useEffect } from 'react';
import { useAssessment } from '../../context/Assessmentcontext';

const FinalSubmission = () => {
  const { answers, submitAnswers } = useAssessment();
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmissionError(null); // Clear any previous error

    try {
      const response = await fetch('http://127.0.0.1:5000/api/submit-answers', { // Full URL specified
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error(`Error submitting answers: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData.message); // Display success message
      // You can also display success message to user here (e.g., with toast)
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
    <>
      <h4>Review Your Answers</h4>
      <pre>{JSON.stringify(answers, null, 2)}</pre>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      {submissionError && <p className="error-message">{submissionError}</p>}
    </>
  );
};

export default FinalSubmission;
