import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hook from "./components/Hook";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import ProductsStore from "./components/ProductsStore";
import HIWContainer from "./components/HIWContainer";
import ContactFlex from "./components/ContactFlex";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Hook title="Three Ways We Service" className="text-center" id="real-page-title" />
      <HowItWorks title="How it works!" className="text-" id="real-page-title" />
      <Services title="Current Services" className="text-center" id="real-page-title" />
      <ProductsStore title="Available Products" className="text-center" id="real-page-title" />
<div className="page-container app-container">
<HIWContainer />
</div>
<div className="page-container">
<ContactFlex />
  </div>      
  <Footer />

    </div>
  )
}

export default App;