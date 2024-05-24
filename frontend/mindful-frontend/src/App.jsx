// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landing/Landing.jsx';
import SignupForm from './components/signup/SignupForm.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import LoginForm from './components/login/Login.jsx';
import SelfAssessment from './components/self-assessment/Self_assessment.jsx';
import PsSection1 from './components/self-assessment/personal_information/ps_section1.jsx';
import PsSection2 from './components/self-assessment/personal_information/ps_section2.jsx';
import PsSection3 from './components/self-assessment/personal_information/ps_section3.jsx';
import PsSection4 from './components/self-assessment/personal_information/ps_section4.jsx';
import PsSection5 from './components/self-assessment/personal_information/ps_section5.jsx';
import MdsSection1 from './components/self-assessment/mental_disorder_screening/mds_section1.jsx';
import MdsSection2 from './components/self-assessment/mental_disorder_screening/mds_section2.jsx';
import MdsSection3 from './components/self-assessment/mental_disorder_screening/mds_section3.jsx';
import MdsSection4 from './components/self-assessment/mental_disorder_screening/mds_section4.jsx';
import MhfSection1 from './components/self-assessment/mental_health_fitness/mhf_section1.jsx';
import MhfSection2 from './components/self-assessment/mental_health_fitness/mhf_section2.jsx';
import FinalSubmission from './components/self-assessment/FinalSubmission.jsx';
import PersonalizedActionPlan from './components/action_plans/action_plan_template.jsx';

const App = () => {
  const user = { username: 'Jane Doe' };
  const userCluster = 'cluster1';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/selfassessment" element={<SelfAssessment />} />
        <Route path="/ps-section1" element={<PsSection1 />} />
        <Route path="/ps-section2" element={<PsSection2 />} />
        <Route path="/ps-section3" element={<PsSection3 />} />
        <Route path="/ps-section4" element={<PsSection4 />} />
        <Route path="/ps-section5" element={<PsSection5 />} />
        <Route path="/mds-section1" element={<MdsSection1 />} />
        <Route path="/mds-section2" element={<MdsSection2 />} />
        <Route path="/mds-section3" element={<MdsSection3 />} />
        <Route path="/mds-section4" element={<MdsSection4 />} />
        <Route path="/mhf-section1" element={<MhfSection1 />} />
        <Route path="/mhf-section2" element={<MhfSection2 />} />
        <Route path="/finalsubmission" element={<FinalSubmission />} />
        <Route path="/action-plan" element={<PersonalizedActionPlan user={user} userCluster={userCluster} />} />
      </Routes>
    </Router>
  );
};

export default App;
