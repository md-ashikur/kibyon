import React, { useEffect } from 'react';
import "./VideoTest.css";
import WsecOne from '../../partials/accueil/WsecOne/WsecOne';
import WSecTwo from '../../partials/accueil/WelcomeSecTwo/WSecTwo';
import HSecFour from '../../partials/accueil/HSection4/HSecFour';
import Wheader from '../../partials/accueil/Wheader/Wheader';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import kibyonText from "../../img/Welcome page/kt.png";
import kibyonBg from "../../img/Welcome page/Untitled-1.jpg";

const VideoTest = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const section1 = document.querySelector(".section1");
   

    const updateCursorShape = (shape) => {
      cursor.className = ""; // Reset cursor shape classes
      cursor.classList.add("cursor", shape);
    };

    const handleMouseEnter = (section, shape) => {
      updateCursorShape(shape);
      section.addEventListener("mouseleave", () => {
        cursor.className = ""; // Reset cursor shape classes
      });
    };

    section1.addEventListener("mouseenter", () => {
      handleMouseEnter(section1, "cursor1");
    });

  
    document.addEventListener("mousemove", (event) => {
      cursor.style.left = event.pageX + "px";
      cursor.style.top = event.pageY + "px";
    });
  }, []);

  return (
    <div>
     <div className='h-52 bg-red-400'></div>
      {/* Section 1 */}
      <section className="section1 bg-primary ">
        <div className="h-screen w-full text-white ">
        <h1 className='text-3xl font-bold text-center p-20'> Et si nous mettions nos compétences au service du plus grand nombre ?</h1>
        <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image:kibyonBg, speed: -20 }]}
          className="aspect-[2.2/1]"
        >
          
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={kibyonText} alt="" />
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
      <div className=" grid lg:grid-rows-2 gap-8 text-justify bg-primary px-20 text-base-100">
          <div className="grid  lg:grid-cols-2 gap-5" 
         >
            <p className="p-5"  
       
          >
              Ce qui nous anime et ce qui fait l’ADN de ce cabinet, c’est
              d’accompagner les chefs d’entreprises et de prendre toute notre
              part dans les défis actuels que rencontrent nos entreprises et
              sociétés en perpétuelle mutation dans une économie globalisée.
            </p>
            <p className="p-5" >
              Les créateurs et dirigeants d’entreprises sont souvent bien trop
              isolés. Nous souhaitons être un appui et un partenaire de
              confiance qui sait rester flexible et s’adapter à chaque besoin
              pour vous accompagner du mieux possible. Pour ce faire nous
              mettons à votre service nos compétences, que nous maintenons à
              haut niveau grâce à une capitalisation sur les expériences passées
              et une forte appétence pour la recherche académique.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <p className="p-5" 
         >
              L’objectif est de donner un autre regard aux dirigeants, en nous
              basant sur des faits et une connaissance accrue de votre
              structure, votre environnement, de votre quotidien, en fonction
              des objectifs et besoins énoncés et décelés. Nous souhaitons vous
              épauler pour qu’ensemble nous puissions prendre les meilleures
              décisions et optimiser votre (future) entreprise pour la rendre la
              plus efficiente possible en fonction des objectifs fixés et de la
              stratégie définis.
            </p>
            <p className="p-5" >
              Nous saurons à la fois vous guider pour performer et affronter le
              quotidien qui est le vôtre. Mais également innover, être
              imaginatifs pour trouver des solutions en tenant compte des
              contraintes. Nous sommes transparents et n’hésiterons pas à
              communiquer clairement, à vous challenger avec bienveillance et à
              vous proposer des solutions avant-gardistes et adaptées aux défis
              actuels et futurs
            </p>
          </div>
        
        </div>


        </div>
      </section>

     

      <div id="cursor"></div>
    </div>
  );
};

export default VideoTest;
