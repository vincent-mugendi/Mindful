import React from "react";

import Header from "../header/Header";

import './Landing.css'
import LandingHero from "./LandingHero";
import LandingPromise from "./LandingPromise";
import LandingMission from "./LandingMission";
import LandingHowItWorks from "./LandingHowItWorks";
import LandingTestimonials from "./LandingTestimonials";
import LandingLastCTA from "./LandingLastCTA";
import LandingFooter from "./LandingFooter";

const LandingPage = () => {
    return (
        <>
        <Header />
        <LandingHero />
        <LandingPromise />
        <LandingMission />
        <LandingHowItWorks />
        <LandingTestimonials />
        <LandingLastCTA />
        <LandingFooter />
        </>
    )
}

export default LandingPage;