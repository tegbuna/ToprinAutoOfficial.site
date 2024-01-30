import React, { useState } from 'react';
import CtaButton from "./CtaButton";
import './CSS/ProductsStore.css'; // Import a CSS file for styling
import EISsample from "../components/images/EISsample.jpg";
import EIS1 from "../components/images/EIS-W207.jpeg";
import EIS2 from "../components/images/EIS-W204W207.jpeg";

const ProductsStore = ({ title }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCardMouseLeave = () => {
    setSelectedCard(null);
  };

  const renderCards = () => {
    const cards = [
      {
        title: 'Used Mercedes Benz EIS',
        description: 'Mercedes 08-14 W207 W204 C250 C300 C350 GLK350 E550 EIS A2075450108 Ignition Switch.',
        image: EIS1,
        buttonText: 'https://www.ebay.com/itm/386449284691?hash=item59fa2c1e53:g:sF8AAOSwjdRlf6pJ'
      },
      {
        title: 'Used Mercedes Benz EIS',
        description: 'Mercedes OEM W204 EZS EIS C200 C230 C250 C280 C300 C350 C63 AMG Module 2079057101 Ignition Switch.',
        image: EIS2,
        buttonText: 'https://www.ebay.com/itm/386449284691?hash=item59fa2c1e53:g:sF8AAOSwjdRlf6pJ'
      },

    ];

    return cards.map((card, index) => (
      <div
        key={index}
        className={`medium-card ${selectedCard === index ? 'selected' : ''}`}
        onClick={() => handleCardClick(index)}
        onMouseLeave={handleCardMouseLeave}
      >
        <div className="medium-card product-store">
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <img src={card.image} alt={card.title} />
          </div>
          <div className="sub-title">{card.description}</div>
          <div className="button"><a href={card.buttonText} target="_blank" rel="noopener noreferrer">Buy It Now</a></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="page-container ProductsStore products parent">
      <div className="page-sub-title">{title}</div>
<div className="container">
<section className="grid-container reel">{renderCards()}</section>
  </div>    
  </div>
  );
};

export default ProductsStore;
