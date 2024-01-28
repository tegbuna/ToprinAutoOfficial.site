import React from 'react';
import "./CSS/FiftyFlex.css"
// import CarDrive from "./images/CarDrive.jpg"

const FiftyFlex = () => {
    return (
        <div className="page-container fifty">
            <section className="fifty-container">

                <div className="first-container">
                    <div className="cta-section">
                        <h2 className="tag-line">
                        Anyone can give you a number and ask you to stand in line.  We want to help you get your issues resolved quickly and on your time, so you can get back to whatever you want to be doing.
                            </h2>
                        <p className="supporting-line">We have helped thousands of local San Antonians get their airbags fixed same day, their key fobs replaced, their vehicle codes cleared, their seatbelts reset and more FAST. Join group of satisfied clients! Get a quote or schedule your service right now. </p>
                        <cta-button />
                        <a href="#" className="ask-question-link">Get Started Now</a>
                    </div>
                </div>

                <div className="second-container fifty-flex">
                    {/* <img src={CarDrive} alt="" /> */}
                </div>

            </section>
        </div>
    )
}

export default FiftyFlex