// action_plan_template.jsx

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ActionPlanHeader from '../header/ActionPlanHeader';
import { clusterData } from './cluster_data';

import './ActionPlan.css';
import LandingFooter from '../landing/LandingFooter';

const PersonalizedActionPlan = ({ user }) => {
  const location = useLocation();
  const { userCluster } = location.state || {};
  const cluster = clusterData[userCluster];

  const [completedSteps, setCompletedSteps] = useState({});
  const [completedStrategies, setCompletedStrategies] = useState({});

  if (!cluster) {
    return <p>Loading...</p>;
  }

  const toggleStepCompletion = (index) => {
    setCompletedSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleStrategyCompletion = (index) => {
    setCompletedStrategies((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="plan-wrapper">
      {/* HEADER SECTION */}
      <header>
        <ActionPlanHeader />
      </header>

      {/* MAIN SECTION */}
      <main>
        {/* INTRO */}
        <section className="plan-intro">
          <h1>Your Personalized Action Plan</h1>
          <p>
            Hello, <span className="user-name">{user?.username}</span>
          </p>
          <p>
            This plan is tailored to help you improve your mental health based on your recent self-assessment.
          </p>
        </section>

        {/* PROFESSIONAL SUPPORT */}
        <section className="support-section">
          <h2>Professional Support</h2>
          <p>
            If you need immediate support, please contact one of the following helplines:
          </p>
          <ul>
            {cluster.helplines?.map((helpline, index) => (
              <li key={index}>{helpline}</li>
            ))}
          </ul>

          <p>Here are some organizations that can provide further support:</p>
          <ul>
            {cluster.supportOrganizations?.map((organization, index) => (
              <li key={index}>
                <a href={organization.link}>{organization.name}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* IMPROVE MENTAL HEALTH SECTION */}
        <section className="improve-mental-health">
          <h2>Steps to Improve Your Mental Health</h2>
          <p>
            These steps are designed to help you build a healthier mental state through practical and achievable actions:
          </p>
          <div className="steps-container">
            {cluster.mentalHealthSteps?.map((step, index) => (
              <div
                key={index}
                className={`step-card ${completedSteps[index] ? 'completed' : ''}`}
                onClick={() => toggleStepCompletion(index)}
              >
                <span className="step-text">{step}</span>
                <span className="step-icon">{completedSteps[index] ? '✅' : '⬜'}</span>
              </div>
            ))}
          </div>
          <textarea placeholder="Journal your thoughts here..." id="journal"></textarea>
        </section>

        {/* SELF-HELP STRATEGIES */}
        <section className="self-help-strategies">
          <h2>Self-Help Strategies</h2>
          <p>
            These strategies can be practiced independently to support your mental well-being:
          </p>
          <div className="strategies-container">
            {cluster.selfHelpStrategies?.map((strategy, index) => (
              <div
                key={index}
                className={`strategy-card ${completedStrategies[index] ? 'completed' : ''}`}
                onClick={() => toggleStrategyCompletion(index)}
              >
                <span className="strategy-text">{strategy}</span>
                <span className="strategy-icon">{completedStrategies[index] ? '✅' : '⬜'}</span>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDED RESOURCES */}
        <section className="recommended-resources">
          <h2>Recommended Resources</h2>
          <ul>
            {cluster.recommendedResources?.map((resource, index) => (
              <li key={index}>
                <a href={resource.link}>{resource.name}</a>
                <p>{resource.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <button className="save-button">
        Save
      </button>

      {/* FOOTER */}
      <LandingFooter />
    </div>
  );
};

export default PersonalizedActionPlan;
