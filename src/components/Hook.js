import React from 'react';
import "../components/CSS/Hook.css";
import OurPlace from "../components/images/OurPlace.png";
import YourPlace from "../components/images/YourPlace.png";
import Mail from "../components/images/MailIn.png";


const Hook = ({title}) => {
  return (
    <div className="page-container hook">
      <div className="page-sub-title">{title}</div>
      <div className="container card-scroll-container"> {/* Added class here */}
        
        <div className="section card-container">
          <div className="icon-and-one-line">
            <div className="column">
              <div className="row">
                <img className="logo" src={OurPlace} alt="Small icon of a house with a car on a lift in front of it." />
                <div className="card-sub-title greenish">
                  Our Place
                </div>
              </div>
              <div className="details">
                Bring your vehicle or part to us for servicing or installation.
              </div>
            </div>
          </div>
        </div>

        <div className="section card-container">
          <div className="icon-and-one-line">
            <div className="column">
              <div className="row">
                <img className="logo" src={YourPlace} alt="Small icon of a house." />
                <div className="card-sub-title greenish">
                  Your Place
                </div>
              </div>
              <div className="details">
                Schedule a time for us to service your vehicle conveniently in the comfort of your own home.
              </div>
            </div>
          </div>
        </div>

        <div className="section card-container">
          <div className="icon-and-one-line">
            <div className="column">
              <div className="row">
                <img className="logo" src={Mail} alt="Small icon of a mailbox." />
                <div className="card-sub-title greenish">
                  Mail In
                </div>
              </div>
              <div className="details">
                Don't have time to drop by? Mail us your part for diagnosis or repair.
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Hook;
