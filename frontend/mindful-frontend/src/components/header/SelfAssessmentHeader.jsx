import React from "react";
import { Link } from "react-router-dom";

const SelfAssesmentHeader = () => {
    return (
        <>
        <h4>Mindful</h4>
        <Link to="/dashboard">Dashboard</Link>
        </>
    )
}

export default SelfAssesmentHeader;