import React from 'react';
import "./CSS/ContactFlex.css"
import ContactForm from "./ContactForm";

const ContactFlex = () => {
    return (
        <div className="page-container contact">
            <section className="contact-container">

                <div className="first-container contact">
                    <div className="footer-hero">
                        <div id="super-title">
                            <h1>
                                Ready to get started?
                            </h1>
                        </div>
                        <div className="card-body" id="hero-subtitle">
                            <p> Send us your name, email and make and model of your vehicle using the form.
                            </p>
                            <hr />
                            <br />
                            <div className="button">
                                <a className="link" href="https://calendly.com/scheduline-services" target="_blank" rel="noopener noreferrer">Schedule Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-container">
                    <ContactForm />
                </div>

            </section>
        </div>
    )
}

export default ContactFlex