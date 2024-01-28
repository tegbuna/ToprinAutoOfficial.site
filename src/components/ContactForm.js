import React, { useRef } from 'react';
import './CSS/ContactForm.css';
import emailjs from "@emailjs/browser";

const ContactForm = ({ title }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // get the user's email address from the form input
    const userEmail = e.target.user_email.value;

    emailjs.sendForm("service_feo9wnh", "template_yazix7k", form.current, "kMBrIwpkX31b7ONNE")
      .then((result) => {
        // send the auto-reply to the user's email address
        emailjs.send("service_feo9wnh", "template_yazix7k", { to_email: userEmail }, "kMBrIwpkX31b7ONNE");
        alert("Your message has been sent. You will receive a response within the next 24 hours. Thanks for connecting.");
        // Add redirection here
        window.location.href = 'https://www.toprinauto.site';
      }, (error) => {
        alert("Looks like something went wrong. Let's try that again.");
      });
    e.target.reset();
  };


  return (
    <div className="contact-form">
        
        <div className="form-container container">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className='title'>{title}</h2>
            <br />
            <label className="para">First Name</label>
            <input type="text" name="from_name" />

            <label className="para">Last Name</label>
            <input type="text" name="from_name" />

            <label className="para">Email</label>
            <input type="email" name="user_email" />

            <label className="para">Message</label>
            <textarea name="message" />

            <button className="submit-button" type="submit" value="Send">Send</button>
          </form>
        </div>
    </div>
  );
};

export default ContactForm;
