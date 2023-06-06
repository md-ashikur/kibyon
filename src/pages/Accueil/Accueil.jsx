import React from "react";
import Header from "../../partials/Header";
import Footer from "../../components/Footer/Footer";
import AccueilBody from "../../partials/accueil/AccueilBody";


const Accueil = () => {
  return (
    <div className="flex overflow-hidden">
    
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header  />
      <main>
       <div className="text-center text-xl">
        <p>in upwork it's illegal. My account could be suspend..  that's why i have written here...</p>
        <h1>whatsapp- +8801705433694</h1>
        <p>linkedin- https://www.linkedin.com/in/md-ashikur-rahman/</p>
       </div>
      </main>
      <Footer/>
    </div>
  </div>
  );
};

export default Accueil;
