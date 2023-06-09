import React, { useEffect } from "react";
import planeVideo from "../../../Videos/plane White bg - Made with Clipchamp.mp4";
import mapVideo from "../../../Videos/maps blue BG - Made with Clipchamp.mp4";
import "./HSecTwo.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Hand } from "../Model/Hand";
import { ShoeSec } from "./ShoeSec";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HSecTwo = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoDivs = gsap.utils.toArray('.vid');
    videoDivs.forEach((videoDiv) => {
      const videoElem = videoDiv.querySelector('video');

      ScrollTrigger.create({
        trigger: videoDiv,
        start: 'top center',
        end: '+=100%',
      
        onEnter: () => videoElem.play(),
        onEnterBack: () => videoElem.play(),
        onLeave: () => videoElem.pause(),
        onLeaveBack: () => videoElem.pause(),
      });
    });
  }, []);
  return (
    <div>
      <div id="shoe" className="relative overflow-hidden bg-white ">
        <div className="lg:px-20 items-center grid lg:grid-cols-2 h-screen">
          {/* shoe block----- */}
          <div className="flex justify-center">
            <Canvas
              className="mt-2 !h-[350px] !w-[400px]"
              camera={{ fov: 50, position: [0, 0, 20] }}
            >
              <Suspense fallback={null}>
              <ambientLight />
                  <directionalLight position={[3, 10, 6]} />
                  <pointLight position={[3, 10, 6]} />

                <ShoeSec
                 position={[Math.PI/ 0.8, -1, 2]}
                 rotation={[0, 0.8, 0.2]}
                 scale={Math.PI/2.7}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="p-5">
            <h2 className="text-3xl font-semibold my-10">
              Choisir Kibyon, c’est oser avancer.
            </h2>
            <p className="text-justify">
              Créer une entreprise ou démarrer un projet, peut être tout autant
              exaltant qu’anxiogène. Il est souvent difficile de savoir par où
              commencer, comment se projeter à 3 – 5 ans, choisir la stratégie
              adaptée…
            </p>
          </div>
        </div>
        </div>
        {/* plane---------- */}
        <div id="plane" className="relative bg-white h-screen flex items-center ">
          <div className="grid lg:grid-cols-2 lg:p-20 ">
            <div className="p-5">
              <h2 className="text-3xl font-semibold my-10">
                Et si on avançait ensemble ?
              </h2>
              <p className="text-justify">
                Nous proposons une nouvelle façon de faire du conseil aux
                entreprises. Basé sur l’écoute, l’individualisation des
                solutions coconstruites avec vous, la personnalisation des
                offres pour que vous n’ayez plus à payer des prestations
                inutiles… et tant d’autres éléments qui rendent notre approche
                unique et bienveillante.
              </p>
            </div>
            <div
              
            >
             <div className="flex justify-center items-center">
             <div className="vid w-96">
        <video playsInline autoPlay muted loop poster="">
          <source src={planeVideo} type="video/mp4" />
        </video>
      </div>
             </div>
            </div>
          </div>
        </div>

        {/* wave-2----------------- */}
    <div className="bg-white relative overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="2000"  // Increase the width value here
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
          fill="#01159f"
          fillOpacity="1"
        />
      </svg>
    </div>
    {/* wave end-------------------- */}

        {/* hand--------------------- */}
        <div id="hand" className="relative bg-[#01159f] overflow-hidden  flex items-end">
       
          <div className="lg:p-20  grid lg:grid-cols-2 h-screen  ">
            <div
              className=""
             
            >
              <Canvas
                camera={{ fov: 60, position: [1, 0, 2] }}
                className="lg:-mt-28 -ml-20"
              >
                <Suspense fallback={null}>
                  <ambientLight />
                  <directionalLight position={[3, 10, 6]} />
                  <pointLight position={[3, 10, 6]} />

                  <Hand
                    className=""
                    position={[-0.5, -1.3, 0]}
                    rotation={[1.3, -2.3, 2]}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div className="p-5 text-white ">
              <h2 className="lg:text-3xl text-2xl font-semibold my-10">
                Un conseil personnalisé et adapté
              </h2>
              <p className="text-justify">
                Nous ne sommes pas là pour vous vendre des copier-coller de
                Powerpoint avec des méthodes d'analyses révolues. Kibyon est là
                pour comprendre votre projet dans son intégralité et ainsi,
                pouvoir vous challenger, vous faire des suggestions et évaluer
                différents scenarios à 360° (incluant tous les départements :
                finance, marketing, R.H, logistique…) adaptés aux objectifs de
                votre projet.
              </p>
            </div>
          </div>
        </div>

        {/* map block----- */}

        <div id="map" className="relative h-screen bg-[#01159f] flex items-center">
          <div className="lg:px-20  grid lg:grid-cols-2 text-base-100">
            <div className="p-5">
              <h2 className="lg:text-3xl text-2xl font-semibold my-10">
                Pour répondre à vos besoins
              </h2>
              <p className="text-justify">
                Il existe une multitude de chemins pour atteindre un but, notre
                objectif est d’identifier avec vous des stratégies porteuses de
                sens et de valeur ajoutée qui correspondront au mieux à votre
                projet. Votre besoin est constamment au cœur de notre réflexion
                pour vous conseiller ce qui nous semble le mieux pour vous et
                votre entreprise.
              </p>
            </div>

           <div className="flex justify-center items-center">
           <div className="vid w-96 ">
          <video playsInline autoPlay muted loop poster="">
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
