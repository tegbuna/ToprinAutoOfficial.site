import React, { useState } from 'react';
import './CSS/Services.css'; // Import a CSS file for styling
import amr from "./images/amr.png";
import cp from "./images/cp.png";
import cr from "./images/cr.png";
import kfr from "./images/kfr.png";
import vd from "./images/vd.png";
import pi from "./images/pi.png";

const Services = ({ title }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCardMouseLeave = () => {
    setSelectedCard(null);
  };

  const renderCards = () => {
    const services = [
      {
        title: 'Airbag Module Reset',
        description: 'Get your airbag module reset quickly and affordably. You can mail it in or skip the wait and drop it off for faster service. Either way, we will ensure it\'s back in working order in no time.',
        image: amr
      },
      {
        title: 'Car Programming',
        description: 'We offer reliable car programming services for all makes and models. Our state-of-the-art technology ensures your vehicle is programmed correctly the first time, every time.',
        image: cp
      },
      {
        title: 'Cluster Repair',
        description: 'Is your instrument cluster malfunctioning? Don\'t drive blind - let us repair it for you. We use only the best parts and tools to ensure your dashboard is back in tip-top condition in no time.',
        image: cr
      },
      {
        title: 'Key Fob Replacement',
        description: 'Lost your key fob? Need a duplicate? Our skilled technicians can replace your key fob or program another one quickly and easily, ensuring you\'re back on the road in no time.',
        image: kfr
      },
      {
        title: 'Vehicle Diagnostics',
        description: 'Having an issue, but don\'t quite know what it is? We\'ve got you covered. We use advanced diagnostic tools to quickly identify and repair any issue.',
        image: vd
      },
      {
        title: 'Parts Installation',
        description: 'You can bring your own part or let us order the right one for your vehicle. We offer speedy, quality parts installations so you can upgrade your vehicle ASAP.',
        image: pi
      }
    ];

    return services.map((service, index) => (
      <div
        key={index}
        className={`medium-card ${selectedCard === index ? 'selected' : ''}`}
        onClick={() => handleCardClick(index)}
        onMouseLeave={handleCardMouseLeave}
      >
        <h3 className="card-title service-title">{service.title}</h3>
        <div className="sub-title">{service.description}</div>
        <img src={service.image} alt={service.title} />
        <a className="link" href="https://calendly.com/scheduline-services" target="_blank" rel="noopener noreferrer">Request Service</a>
      </div>
    ));
  };

  return (
    <div className="page-container Services services">
      <div className="page-sub-title">{title}</div>
      <div className="container">
        <section className="grid-container">{renderCards()}</section>
      </div>
    </div>
  );
};

export default Services;
