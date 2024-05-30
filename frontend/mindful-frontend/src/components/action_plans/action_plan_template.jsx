// action_plan_template.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import ActionPlanHeader from '../header/ActionPlanHeader';
import { clusterData } from './cluster_data';

import '../self-assessment/Assessment.css';
import LandingFooter from '../landing/LandingFooter';

const PersonalizedActionPlan = ({ user }) => {
  const location = useLocation();
  const { userCluster } = location.state || {};
  const cluster = clusterData[userCluster];

  if (!cluster) {
    return <p>Loading...</p>;
  }

  return (
    <div className="assesment-sections">
      {/* HEADER SECTION */}
      <header>
        <ActionPlanHeader />
      </header>

      {/* MAIN SECTION */}
      <main>
        {/* INTRO */}
        <section className="intro">
          <h1>Your Personalized Action Plan</h1>
          <p>
            Welcome, <span id="username">{user?.username}</span>
          </p>
          <p>
            This plan is tailored to help you improve your mental health based on your recent self-assessment.
          </p>
        </section>

        {/* PROFESSIONAL SUPPORT */}
        <section className="professional-support">
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
          <ul>
            {cluster.mentalHealthSteps?.map((step, index) => (
              <li key={index}>
                <input type="checkbox" id={`step-${index}`} />
                <label htmlFor={`step-${index}`}>{step}</label>
              </li>
            ))}
          </ul>
          <textarea placeholder="Journal your thoughts here..." id="journal"></textarea>
        </section>

        {/* SELF-HELP STRATEGIES */}
        <section className="self-help-strategies">
          <h2>Self-Help Strategies</h2>
          <ul>
            {cluster.selfHelpStrategies?.map((strategy, index) => (
              <li key={index}>
                <input type="checkbox" id={`strategy-${index}`} />
                <label htmlFor={`strategy-${index}`}>{strategy}</label>
              </li>
            ))}
          </ul>
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


      <button>
        Save
      </button>

      {/* FOOTER */}
      <LandingFooter />
    </div>
  );
};

export default PersonalizedActionPlan;
