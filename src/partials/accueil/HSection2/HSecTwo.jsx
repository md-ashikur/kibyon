import React, { useEffect } from "react";
import planeVideo from "../../../Videos/plane White bg - Made with Clipchamp.mp4";
import mapVideo from "../../../Videos/Maps transparent VF (quick time) 27-04_VP9.webm";
import handVideo from "../../../Videos/Hand sewing.webm";
import handVideo2 from "../../../Videos/Hand sewing V-17-07-230001-03854_H.265.mp4";
import mapVideo2 from "../../../Videos/Maps transparent VF (quick time) 27-04_H.265.mp4";
import "./HSecTwo.css";
import shoes from "../../../img/shoes.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HSecTwo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoDivs = gsap.utils.toArray(".vid");
    videoDivs.forEach((videoDiv) => {
      const videoElem = videoDiv.querySelector("video");

      ScrollTrigger.create({
        trigger: videoDiv,
        start: "top center",
        end: "+=100%",

        onEnter: () => videoElem.play(),
        onEnterBack: () => videoElem.play(),
        onLeave: () => videoElem.pause(),
        onLeaveBack: () => videoElem.pause(),
      });
    });
  }, []);
  return (
    <div>
      <div id="shoe" className="">
        <div className="lg:px-20 bg-white items-center gap-5 grid lg:grid-cols-2 h-screen">
          {/* shoe block----- */}
          <div className="flex justify-center">
            <img
              src={shoes}
              alt=""
              className="w-full h-auto"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            />
          </div>
          <div className="p-5 flex justify-center ">
            <div className="max-w-[480px] ">
              <h2
                className="lg:text-6xl text-2xl font-semibold mb-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
              >
                Choisir Kibyon, c’est oser avancer.
              </h2>
              <p
                className="text-justify max-w-[420px]"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                Créer une entreprise ou démarrer un projet, peut être tout
                autant exaltant qu’anxiogène. Il est souvent difficile de savoir
                par où commencer, comment se projeter à 3 – 5 ans, choisir la
                stratégie adaptée…
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* plane---------- */}
      <div id="plane" className="relative bg-white h-screen flex items-center ">
        <div className="lg:grid lg:grid-cols-2 lg:px-20  flex flex-col-reverse ">
          <div className="p-5 flex justify-center z-20">
            <div className="max-w-[480px]">
              <h2
                className="lg:text-6xl text-2xl font-semibold mb-5"
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
              >
                Et si on avançait ensemble ?
              </h2>
              <p
                className="text-justify "
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                Nous proposons une nouvelle façon de faire du conseil aux
                entreprises. Basé sur l’écoute, l’individualisation des
                solutions co-construites avec vous, la personnalisation des
                offres pour que vous n’ayez plus à payer des prestations
                inutiles… et tant d’autres éléments qui rendent notre approche
                unique et bienveillante.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center mb-10 lg:mb-0 ">
            <div
              className="vid w-full lg:p-10 lg:-ml-52"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <video playsInline autoPlay muted loop poster="" className="lg:scale-150">
                <source src={planeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* wave-2----------------- */}
      <div className="bg-white relative overflow-hidden">
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
            fill="#152eec"
            fillOpacity="1"
          />
        </svg>
      </div>
      {/* wave end-------------------- */}

      {/* hand--------------------- */}
      <div
        id="hand"
        className="relative bg-secondary overflow-hidden pb-10 flex items-end"
      >
        <div className="lg:p-20  grid lg:grid-cols-2 h-screen  ">
          <div className="flex justify-center items-center">
            <div
              className="vid w-full "
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <video playsInline autoPlay muted loop poster="">
                <source src={handVideo2} type='video/mp4; codecs="hvc1"' />
                <source src={handVideo} type="video/webm" />
              </video>
            </div>
          </div>

          <div className="p-5 text-white flex justify-center items-center">
            <div className="max-w-[480px]">
              <h2
                className="lg:text-6xl text-2xl font-semibold mb-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
              >
                Un conseil personnalisé et adapté
              </h2>
              <p
                className="text-justify max-w-[480px]"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                Nous ne sommes pas là pour vous vendre des copier-coller de
                Powerpoint avec des méthodes d'analyse révolues. Kibyon est là
                pour comprendre votre projet dans son intégralité et ainsi,
                pouvoir vous challenger, vous faire des suggestions et évaluer
                différents scénarios à 360° (incluant tous les départements :
                finance, marketing, R.H, logistique…) adaptés aux objectifs de
                votre projet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* map block----- */}

      <div
        id="map"
        className="relative h-screen  bg-secondary flex items-center pb-16 lg:pb-0 mb-16"
      >
        <div className="lg:px-20  lg:grid lg:grid-cols-2 text-base-100 flex flex-col-reverse">
          <div className="flex justify-center ">
            <div className="p-5 max-w-[480px]">
              <h2
                className="lg:text-6xl text-2xl font-semibold mb-5"
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
              >
                Pour répondre à vos besoins
              </h2>
              <p
                className="text-justify "
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                Il existe une multitude de chemins pour atteindre un but, notre
                objectif est d’identifier avec vous des stratégies porteuses de
                sens et de valeur ajoutée qui correspondront au mieux à votre
                projet. Votre besoin est constamment au cœur de notre réflexion
                pour vous conseiller ce qui nous semble le mieux pour vous et
                votre entreprise.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-28 lg:mb-0">
            <div
              className="vid w-full"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <video playsInline autoPlay muted loop poster="">
                <source src={mapVideo2} type='video/mp4; codecs="hvc1"' />
                <source src={mapVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSecTwo;
