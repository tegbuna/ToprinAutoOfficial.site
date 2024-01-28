import React from 'react';
import "../components/CSS/Hero.css";
import CtaButton from "../components/CtaButton";
import SocialMBar from "../components/SocialMBar";
import Main from "./Main";

const Hero = () => {
  return (
    <div className='page-container hero background-image'>
      <section className='container'>
        <h1 className='page-title'>
          {/* Fast & Easy Car Repairs and Installations at your convenience. */}
          {/* Effortless car repairs and installations, quick and convenient – because your time is valuable. */}
          Same Day <span className="steel">Code Clearing</span>  <span className="greenish">Parts Installations</span> & <span className="blue"> Airbag Resets </span> Done Locally.
        </h1>

        <h2>
          Save time and money with our local resets and vehicle programming services - because life doesn't wait and neither should you.
        </h2>
        <div className="button-div">
          <div className="button">
          <a className="link" href="https://calendly.com/scheduline-services" target="_blank" rel="noopener noreferrer">Schedule Now</a>
          </div>
        </div>
        <div className="scroller"><Main /> {/* Correct way to render the Main component */}
        </div></section>

    </div>
  );
};

export default Hero;
