import React from "react";
import "./AccueilBody.css";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import kibyonText from "../../img/Welcome page/kt.png";
import kibyonBg from "../../img/Welcome page/Untitled-1.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import HSecOne from "./HSection1/HSecOne";
import HSecTwo from "./HSection2/HSecTwo";
import HSecFour from "./HSection4/HSecFour";
import SectionOne from "./Section1/SectionOne";

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
    <div className="overflow-hidden">
      <div className=" relative overflow-hidden z-20 ">
       <SectionOne/>
      </div>
      <HSecTwo />
      {/* wave-2----------------- */}
      <div className="-mt-20 bg-secondary z-100 relative overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="2000" // Increase the width value here
          height="85"
        >
          <defs>
            <path
              id="wave"
              d="m-115,50q38-30 75,0t75,0 75,0 75,0
    75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0
    v20 h-1540 v-20"
            />
            <clipPath id="wave-clip-front">
              <use className="wave wave-front" xlinkHref="#wave" />
              <rect x="0" y="70" width="100%" height="100%" />
            </clipPath>
            <rect id="clipped-wave" x="0" y="0" width="100%" height="100%" />
          </defs>

          <use
            xlinkHref="#clipped-wave"
            clipPath="url(#wave-clip-front)"
            fill="#000"
            fillOpacity="1"
          />
        </svg>
      </div>
      {/* wave end-------------------- */}
      {/* Section 3 */}
      <section className="section1 bg-primary ">
        <div className="h-auto w-full text-white ">
          <h1
            className="lg:text-3xl text-2xl text-justify font-bold lg:text-center lg:px-20 px-5 py-28"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1200"
          >
            Et si nous mettions nos compétences au service du plus grand nombre
            ?
          </h1>
          <ParallaxProvider>
            <ParallaxBanner
              layers={[{ image: kibyonBg, speed: -20 }]}
              className="aspect-[2.2/1] "
            >
              <div className="absolute inset-0  flex items-center justify-center">
                <img src={kibyonText} alt="" />
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
          <div className=" grid lg:grid-rows-2 gap-8 text-justify bg-primary lg:px-20 text-base-100">
            <div className="grid  lg:grid-cols-2 gap-5">
              <p
                className="p-5"
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
              >
                Ce qui nous anime et ce qui fait l’ADN de ce cabinet, c’est
                d’accompagner les chefs d’entreprises et de prendre toute notre
                part dans les défis actuels que rencontrent nos entreprises et
                sociétés en perpétuelle mutation dans une économie globalisée.
              </p>
              <p
                className="p-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1400"
              >
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
              <p
                className="p-5"
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
              >
                L’objectif est de donner un autre regard aux dirigeants, en nous
                basant sur des faits et une connaissance accrue de votre
                structure, votre environnement, votre quotidien, en fonction des
                objectifs et besoins énoncés et décelés. Nous souhaitons vous
                épauler pour qu’ensemble nous puissions prendre les meilleures
                décisions et optimiser votre (future) entreprise pour la rendre
                la plus efficiente possible en fonction des objectifs fixés et
                de la stratégie définis.
              </p>
              <p
                className="p-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1400"
              >
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
        <Link
          to="/à-propos"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"
        >
          <button className="text-white border px-3 py-2 rounded-lg hover:scale-105 duration-150 hover:bg-white hover:text-primary">
          En apprendre davantage sur kibyon
          </button>
        </Link>
      </div>

      {/* wave-4----------------- */}
      {/* <div className="-mt-20 z-100 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="2000" 
        height="85"
      >
        <defs>
          <path
            id="wave"
            d="m-115,50q38-30 75,0t75,0 75,0 75,0
    75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0
    v20 h-1540 v-20"
          />
          <clipPath id="wave-clip-front">
            <use className="wave wave-front" xlinkHref="#wave" />
            <rect x="0" y="70" width="100%" height="100%" />
          </clipPath>
          <rect id="clipped-wave" x="0" y="0" width="100%" height="100%" />
        </defs>

        <use
          xlinkHref="#clipped-wave"
          clipPath="url(#wave-clip-front)"
          fill="#002dbd"
          fillOpacity="1"
        />
      </svg>
    </div> */}

      <HSecFour />
      <Footer />
    </div>
  );
};

export default AccueilBody;
