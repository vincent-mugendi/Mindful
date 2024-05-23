// src/context/AssessmentContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a context
const AssessmentContext = createContext();

// Create a provider component
export const AssessmentProvider = ({ children }) => {
    const [answers, setAnswers] = useState({});

    const updateAnswer = (question, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [question]: answer
        }));
    };

    const submitAnswers = () => {
        // Here you can make an API call to submit the answers
        console.log("Submitting answers:", answers);
    };

    return (
        <AssessmentContext.Provider value={{ answers, updateAnswer, submitAnswers }}>
            {children}
        </AssessmentContext.Provider>
    );
};

// Custom hook to use the assessment context
export const useAssessment = () => {
    return useContext(AssessmentContext);
};