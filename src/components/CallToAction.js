import React from 'react';
import "./CSS/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="page-container callToAction">
<section>
<h1 className="container container--narow">
        We have helped thousands of local San Antonio customers get their airbags serviced fixed fast.
      </h1>
</section>

<section>
<h2 className="container container--narow">
        Supporting lines go here, introducing  who you are and building a connection with your audience. Ensure the section is really about your client.
      </h2>
</section>

<section>
<h3 className="container container-narrow">
        Anyone can do Y.  I want to do XYZ for you that gets customers excited about throwing their money at you.
      </h3>
</section>


      <div className="container">
        {/* What they do next. */}
        <cta-button />
      </div>
    </div>
  )
}

export default CallToAction