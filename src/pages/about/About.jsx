import React from 'react';
import AboutBody from '../../partials/about/AboutBody';
import Header from "../../partials/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
    return (
        <div className="flex h-screen overflow-hidden">
    
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header  />
          <main>
            <div className="">
             <AboutBody/>
            </div>
          </main>
          <Footer/>
        </div>
      </div>
    );
};

export default About;