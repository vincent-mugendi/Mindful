import React from "react";

import './DashboardTools.css';
import bookIcon from "../../assets/icons/book-icon.svg";
import meditationIcon from "../../assets/icons/meditation-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";


const DashboardTools = () => {
    return (
        <div className="tools">
            <h3>Tools Section</h3>
            <div className="tools-cards">
                <div id="card1">
                    <h4>Journal</h4>
                    <img src={bookIcon} alt="Book Icon" />
                </div>


                <div id="card2">
                    <h4>Guided Meditation</h4>
                    <img src={meditationIcon} alt="Book Icon" />
                </div>


                <div id="card3">
                    <h4>I have an emergency</h4>
                    <img src={phoneIcon} alt="Book Icon" />
                </div>

                
            </div>
        </div>
    );
}

export default DashboardTools;