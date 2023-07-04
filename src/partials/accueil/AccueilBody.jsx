import React from "react";
import WsecOne from "./WsecOne/WsecOne";
import WSecTwo from "./WelcomeSecTwo/WSecTwo";
import WSecThree from "./WSceThree/WSecThree";
import Wheader from "./Wheader/Wheader";
import welcomeBg from "../../img/intro welcome page background.png";
import HSecFour from "./HSection4/HSecFour";
import VideoTest from "../../pages/VideoTesting/VideoTest";
import "./AccueilBody.css";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import kibyonText from "../../img/Welcome page/kt.png";
import kibyonBg from "../../img/Welcome page/Untitled-1.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header";
import Footer from "../../components/Footer/Footer";
import Wave from "react-wavify";

const AccueilBody = () => {
  // section 3------------
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
      <Header />
      <div className=" relative overflow-hidden z-20">
        <div className="h-screen w-full -mt-7">
          <img
            src={welcomeBg}
            alt=""
            draggable={false}
            className="object-cover lg:object-none h-full lg:h-screen lg:w-full"
          />
        </div>

        <div className="flex justify-center text-8xl text-[#0120aa] opacity-50 font-black">
          <h1 className="lg:-mt-[40%] -mt-[170%] z-50">KIBYON</h1>
        </div>

        <div className="absolute top-2 ">
          <Wheader />
        </div>
        <Wave
          fill="#f1f5f9"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
          className="-mt-20 z-20"
        />
      </div>

      <WsecOne />

      <Wave
        fill="#000"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
        className=" z-50 bg-[#0120aa]"
      />

      {/* Section 3 */}
      <section className="section1 bg-primary -mt-10">
        <div className="h-auto w-full text-white ">
          <h1 className="text-3xl font-bold text-center px-20 py-28">
           
            Et si nous mettions nos compétences au service du plus grand nombre
            ?
          </h1>
          <ParallaxProvider>
            <ParallaxBanner
              layers={[{ image: kibyonBg, speed: -20 }]}
              className="aspect-[2.2/1]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={kibyonText} alt="" />
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
          <div className=" grid lg:grid-rows-2 gap-8 text-justify bg-primary px-20 text-base-100">
            <div className="grid  lg:grid-cols-2 gap-5">
              <p className="p-5">
                Ce qui nous anime et ce qui fait l’ADN de ce cabinet, c’est
                d’accompagner les chefs d’entreprises et de prendre toute notre
                part dans les défis actuels que rencontrent nos entreprises et
                sociétés en perpétuelle mutation dans une économie globalisée.
              </p>
              <p className="p-5">
                Les créateurs et dirigeants d’entreprises sont souvent bien trop
                isolés. Nous souhaitons être un appui et un partenaire de
                confiance qui sait rester flexible et s’adapter à chaque besoin
                pour vous accompagner du mieux possible. Pour ce faire nous
                mettons à votre service nos compétences, que nous maintenons à
                haut niveau grâce à une capitalisation sur les expériences
                passées et une forte appétence pour la recherche académique.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              <p className="p-5">
                L’objectif est de donner un autre regard aux dirigeants, en nous
                basant sur des faits et une connaissance accrue de votre
                structure, votre environnement, de votre quotidien, en fonction
                des objectifs et besoins énoncés et décelés. Nous souhaitons
                vous épauler pour qu’ensemble nous puissions prendre les
                meilleures décisions et optimiser votre (future) entreprise pour
                la rendre la plus efficiente possible en fonction des objectifs
                fixés et de la stratégie définis.
              </p>
              <p className="p-5">
                Nous saurons à la fois vous guider pour performer et affronter
                le quotidien qui est le vôtre. Mais également innover, être
                imaginatifs pour trouver des solutions en tenant compte des
                contraintes. Nous sommes transparents et n’hésiterons pas à
                communiquer clairement, à vous challenger avec bienveillance et
                à vous proposer des solutions avant-gardistes et adaptées aux
                défis actuels et futurs
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="cursor"></div>

      <div className="bg-primary flex justify-center py-20">
        <Link to="/about">
          <button className="text-white border px-3 py-2 rounded-lg hover:scale-105 duration-150 hover:bg-white hover:text-primary">
            En apprendre advantage sur kibyon
          </button>
        </Link>
      </div>


      <HSecFour />
      <Footer />
    </div>
  );
};

export default AccueilBody;
