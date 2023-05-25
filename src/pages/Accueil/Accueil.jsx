import React from "react";
import Header from "../../partials/Header";
import Footer from "../../components/Footer/Footer";
import AccueilBody from "../../partials/accueil/AccueilBody";


const Accueil = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header  />
      <main>
        <div className="h-screen text-3xl text-center mt-10">
       <h1>Under Construction. Available soon</h1>
        </div>
      </main>
      <Footer/>
    </div>
  </div>
  );
};

export default Accueil;
