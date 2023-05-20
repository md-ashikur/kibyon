import React, { useState } from "react";


import Footer from "../../components/Footer/Footer";
import ContactBody from "../../partials/contact/ContactBody";
import Header from "../../partials/Header";

const Contact = () => {
  
  return (
    <div className="flex h-screen overflow-hidden">
    
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header  />
        <main>
          <div className="">
            <ContactBody/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
