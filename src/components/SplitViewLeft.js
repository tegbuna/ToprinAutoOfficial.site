// SplitViewLeft.js
import React from 'react';
import placeholderimg from "../components/images/placeholderimg.jpg";
import './CSS/SplitViewPage.css'; // Import a CSS file for styling

const SplitViewLeft = () => {
  return (
   <div className="page-container SplitViewLeft split">
     <div className="split-view-page">
      <div className="right-section column">
      <img src={placeholderimg} alt="placeholder image" />

      </div>
      <div className="left-section">
        <div className="cta-section">
          <h2 className="tag-line">Anyone can do Y.  I want to do XYZ for you that gets customers excited about throwing their money at you.</h2>
          <p className="supporting-line">Supporting lines go here, introducing  who you are and building a connection with your audience. Ensure the section is really about your client.</p>
          <cta-button />
          <a href="#" className="ask-question-link">Ask a question</a>
        </div>
        <div className="empty-container">
            
        </div>
      </div>
    </div>
   </div>
  );
};

export default SplitViewLeft;
