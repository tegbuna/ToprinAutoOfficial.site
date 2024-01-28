import React from 'react';
import "../components/CSS/HIWContainer.css";
import CarDrive from "./images/CarDrive.jpg";
;
const HIWContainer = ({ title }) => {
    return (
        <div className="HIWContainer">
            <div className="flex-container">
                <div className="top-section page-sub-title">{title}</div>
                <div className="bottom-sections">
                    <div className="sheer-container bottom-section left-side">
                        <div className="cta-section">
                            <h2 className="tag-line">
                                Anyone can give you an address and ask you to mail it in.  We want to help you get your automotive issues resolved quickly, locally and on your time, so you can get back to whatever you want to be doing.
                            </h2>
                            <p className="supporting-line">We have helped thousands of local San Antonians get their airbags fixed same day, their key fobs replaced, their vehicle codes cleared, their seatbelts reset and more FAST. Join our group of satisfied clients! Get a quote or schedule your service right now. </p>
                                <div className="button"><a href="https://calendly.com/scheduline-services">Get Started</a></div>
                        </div>
                    </div>
                    <div className="bottom-section right-side">
                        <img src={CarDrive} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HIWContainer;
