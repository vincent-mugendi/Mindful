import React from "react";

import Header from "../header/Header";

import './Landing.css'
import LandingHero from "./LandingHero";
import LandingPromise from "./LandingPromise";
import LandingMission from "./LandingMission";
import LandingHowItWorks from "./LandingHowItWorks";

const LandingPage = () => {
    return (
        <>
        <Header />
        <LandingHero />
        <LandingPromise />
        <LandingMission />
        <LandingHowItWorks />
        </>
    )
}

export default LandingPage;