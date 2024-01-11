import React from "react";
import Header from "../../partials/Header";
import Footer from "../../components/Footer/Footer";
import AccueilBody from "../../partials/accueil/AccueilBody";


const Accueil = () => {
  return (
    <div className="">
    <Header  />
      <main>
       <AccueilBody/>
      </main>
    
  </div>
  );
};

export default Accueil;
