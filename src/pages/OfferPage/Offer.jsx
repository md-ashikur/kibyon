import React from 'react';
import OfferBody from '../../partials/offerPage/OfferBody';
import Header from "../../partials/Header";
import Footer from "../../components/Footer/Footer";

const Offer = () => {
    return (
       
        <div>
          <Header  />
          <main>
           <OfferBody/>
          </main>
          <Footer/>
        </div>
      
    );
};

export default Offer;