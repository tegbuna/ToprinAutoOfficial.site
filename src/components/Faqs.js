import React from 'react';
import "../components/CSS/Faqs.css";
const faqs = [
  {
    question: 'Why should I choose you over a dealership or regular mechanic?',
    answer: 'We specialize in car electronics, offer mobile service, are cost-effective, and provide transparent pricing.',
  },
  {
    question: 'Do you fix all types of car electronics issues?',
    answer: 'Yes, we handle a wide range of issues, including ABS modules, airbag sensors, key fob programming, EIS replacements, and more. We also offer diagnostic services.',
  },
  {
    question: 'Are your parts reliable?',
    answer: 'We only use high-quality parts and offer a warranty on all parts and repairs.',
  },
  {
    question: 'Is your mobile service available anytime?',
    answer: 'We offer flexible scheduling, including evening and weekend appointments.',
  },
  {
    question: 'How much will it cost?',
    answer: 'We provide free estimates and have transparent pricing with no hidden fees.',
  },
  {
    question: 'What if the repair doesn\'t fix the problem?',
    answer: 'We\'ll diagnose the problem further free of charge and work with you to find a solution.',
  },
];

const Faqs = () => {
  return (
    <div className="faq-grid">
      {faqs.map((faq, index) => (
<div className="horizontal-scroll">
<div key={index} className="faq-card-container container">
         
         <div className=" faq-card question card center">
           <div className="card-sub-title"> <h1>Q|</h1></div>
           <h4 className='details center'>{faq.question}</h4>
         </div>

         <div className="faq-card answer card center">
         <div className="card-sub-title"> <h1>A|</h1></div>

           <p className="details center">{faq.answer}</p>
         </div>
       </div>
</div>
      ))}
    </div>
  );
};

export default Faqs;
