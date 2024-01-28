import React, { useState } from 'react';
import placeholderimg from "../components/images/placeholderimg.jpg";
import './CSS/SplitViewPage.css'; 

const SplitViewRight = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your form submission logic here
    // For now, let's log the form data to the console
    console.log(formData);
  };

  return (
    <div className="page-container split-view">
      <div className="split-view-page">
        <div className="right-section column">
          <div className="inquiry-form section">
            <h2>Ask a Question</h2>
            <form className="center" onSubmit={handleSubmit}>
              <div className="column">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Question:
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="button-div">
                <button type="submit" className="button active">
                  Submit
                </button>
                <button type="reset" className="button">
                  Reset
                </button>
              </div>
              {successMessage && <p className="success-message">{successMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
        <div className="left-section">
          <img src={placeholderimg} alt="placeholder image" />
          <div className="empty-container"></div>
        </div>
      </div>
    </div>
  );
};

export default SplitViewRight;
