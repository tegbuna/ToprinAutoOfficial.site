import React from 'react';
import './CSS/FlexboxLayout.css'; // Import your CSS file

const FlexboxLayout = () => {
  return (
    <div className="flex-container">
      <div className="top-section">Top Section</div>
      <div className="bottom-sections">
        <div className="bottom-section">Bottom Section 1</div>
        <div className="bottom-section">Bottom Section 2</div>
      </div>
    </div>
  );
};

export default FlexboxLayout;
