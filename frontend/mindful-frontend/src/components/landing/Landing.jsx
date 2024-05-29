import React from "react";

import Header from "../header/Header";

import './Landing.css'
import LandingHero from "./LandingHero";
import LandingPromise from "./LandingPromise";

const LandingPage = () => {
    return (
        <>
        <Header />
        <LandingHero />
        <LandingPromise />
        </>
    )
}

export default LandingPage;