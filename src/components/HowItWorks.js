import React from 'react';
import "../components/CSS/HowItWorks.css";



const HowItWorks = ({title}) => {
  return (
    <div className="page-container hiw-how-it-works process">
      <div className="page-sub-title">{title}</div>
        <div className="hiw container">
            <div className="hiw-card-scroll-container">
            {/* Individual cards */}
            <div id="card1" className="hiw-how-it-works-card">
                <div className="hiw-card-title">Step 1</div>
                {/* <img src={Choose} alt="Text string of 1 of 4 steps to take for service." /> */}
                <div className="hiw-details hiw-how-it-works hiw-how-it-works"> Choose your service location.</div>
            </div>

            <div id="card2" className="hiw-how-it-works-card">
                <div className="hiw-card-title">Step 2</div>
                {/* <img src={Type} alt="Text string of 1 of 4 steps to take for service." /> */}
                <div className="hiw-details hiw-how-it-works hiw-how-it-works"> Choose your service type.</div>
            </div>

            <div id="card3" className="hiw-how-it-works-card">
                <div className="hiw-card-title">Step 3</div>
                {/* <img src={Schedule} alt="Text string of 1 of 4 steps to take for service." /> */}
                <div className="hiw-details hiw-how-it-works hiw-how-it-works"> Ask a question or get a quote.</div>
            </div>

            <div id="card4" className="hiw-how-it-works-card">
                <div className="hiw-card-title">Step 4</div>
                {/* <img src={GetBack} alt="Text string of 1 of 4 steps to take for service." /> */}
                <div className="hiw-details hiw-how-it-works hiw-how-it-works"> Visit our calendar and schedule service.</div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default HowItWorks;
