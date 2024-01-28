import React, { useState, useEffect, useRef } from 'react';

const Scroller = ({ direction, speed }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const scrollerRef = useRef(null);
  const duplicatedItemsRef = useRef([]);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleAnimation(); // Call the animation function on component mount
      addAnimation(); // Call the addAnimation function after the initial animation setup
    }
  }, []);

  const handleAnimation = () => {
    if (scrollerRef.current) {
      const scrollerInner = scrollerRef.current.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner.children);

      const duplicatedItems = scrollerContent.map((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
        return duplicatedItem;
      });

      duplicatedItemsRef.current = duplicatedItems; // Store duplicated items in the ref
      setIsAnimated(true); // Set isAnimated to true to trigger the animation
    }
  };

  const addAnimation = () => {
    if (scrollerRef.current) {
      scrollerRef.current.setAttribute('data-animated', true);
    }
  };

  return (
    <div className="scroller" ref={scrollerRef} data-direction={direction} data-speed={speed}>
      <ul className={`tag-list scroller__inner ${isAnimated ? 'animated' : ''}`}>
        {duplicatedItemsRef.current.map((item, index) => (
          <li key={`duplicated-item-${index}`}>{item.textContent}</li>
        ))}
        <li id="One" className="tag-list">
          Airbag Module Reset
        </li>
        <li id="Two" className="tag-list">
          EIS Purchases, Replacements & Programming
        </li>
        <li id="Three" className="tag-list">
          Vehicle Diagnostics
        </li>
        <li id="Four" className="tag-list">
         Parts Installation
        </li>
        <li id="Five" className="tag-list">
          Key FOB Programming & Replacements
        </li>
        <li id="Six" className="tag-list">
          Cluster Diagnostics & Repair
        </li>
      </ul>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Scroller data-speed="slow" />
    </div>
  );
};

export default Main;
