import React from "react";

import Header from "../header/Header";

import './Landing.css'
import LandingHero from "./LandingHero";
import LandingPromise from "./LandingPromise";
import LandingMission from "./LandingMission";
import LandingHowItWorks from "./LandingHowItWorks";
import LandingTestimonials from "./LandingTestimonials";

const LandingPage = () => {
    return (
        <>
        <Header />
        <LandingHero />
        <LandingPromise />
        <LandingMission />
        <LandingHowItWorks />
        <LandingTestimonials />
        </>
    )
}

export default LandingPage;