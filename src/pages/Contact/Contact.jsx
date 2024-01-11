import React, { useState } from "react";


import Footer from "../../components/Footer/Footer";
import ContactBody from "../../partials/contact/ContactBody";
import Header from "../../partials/Header";

const Contact = () => {
  
  return (
   
    
      <div>
        <Header  />
        <main>
          <div className="">
            <ContactBody/>
          </div>
        </main>
        <Footer/>
      </div>
    
  );
};

export default Contact;
