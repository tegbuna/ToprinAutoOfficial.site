import React from 'react';

const Options = () => {
  return (
    <div>
      <div className="page-container options ">
        <div className="section card-container reel ">
          <div className="icon-and-one-line">
            <div className="column">
              <div className="row">
                <img className="logo" src={placeholderimg} alt="Placeholder image." />
                <div className="card-sub-title">
                  Subtitle
                </div>
              </div>
            </div>
            <div className="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel laudantium dolore dicta necessitatibus ex porro cum.
            </div>
          </div>
        </div>
      </div>

      <div className="section card-container">
        <div className="icon-and-one-line">
          <div className="column">
            <div className="row">
              <img className="logo" src={placeholderimg} alt="Placeholder image." />
            </div>
            <div className="card-sub-title">
              Subtitle
            </div>
          </div>
          <div className="details">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus natus quam rerum quos quia aspernatur debitis quasi!
          </div>
        </div>
      </div>

      <div className="section card-container">
        <div className="icon-and-one-line">
          <div className="column">
            <div className="row">
              <img className="logo" src={placeholderimg} alt="Placeholder image." />
              <div className="card-sub-title">
                Subtitle
              </div>
            </div>
          </div>
          <div className="details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi impedit recusandae, alias qui labore exercitationem consectetur nam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
