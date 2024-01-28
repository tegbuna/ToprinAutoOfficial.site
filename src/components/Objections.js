import React from 'react'
import Faqs from "../components/Faqs"

const Objections = ({title}) => {
  return (
   <div className="page-container Objections">
    <div className="page-sub-title"> {title} </div>
    <div className="theFaqs horizontal-scroll">
        <Faqs />
    </div>
    <section>
        <h2></h2>
        <p></p>
    </section>
    <section>
        <h2></h2>
        <p></p>
    </section>
    <section>
        <h2></h2>
        <p></p>
    </section>
    <section>
        <h2></h2>
        <p></p>
    </section>
   </div>
  )
}

export default Objections