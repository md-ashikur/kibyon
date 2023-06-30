import React, { useEffect } from "react";
import planeVideo from "../../../Videos/Plane  trnasparent _ home page 04-23 VF_VP9.webm";
import mapVideo from "../../../Videos/Maps transparent VF (quick time) 27-04_VP9.webm";
import "./WsecOne.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Hand } from "../Model/Hand";
import { Shoes } from "./Shoes";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WsecOne = () => {

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
      <div id="shoe" className="relative overflow-x-hidden h-screen flex items-center">
        <div className="lg:px-20 grid lg:grid-cols-2 ">
          {/* shoe block----- */}
          <div>
            {/* <Canvas
              className="mt-28"
              camera={{ fov: 70, position: [1, 2, 2] }}
            >
              <Suspense fallback={null}>
                <ambientLight />
                <directionalLight position={[3, 10, 3]} />
                <pointLight position={[-2, 2, -1]} />
                <OrbitControls
                  enableZoom={false}
                  maxAzimuthAngle={0}
                  minAzimuthAngle={0}
                  maxPolarAngle={0}
                  minPolarAngle={1}
                />
                <Shoes
                  position={[0, 0.5, 0]}
                  rotation={[-0.2, 1, 0]}
                  scale={0.15}
                />
              </Suspense>
            </Canvas> */}
          </div>
          <div>
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
        <div id="plane" className="relative h-screen flex items-center bg-[#0120aa]">
          <div className="grid lg:grid-cols-2 lg:p-20 text-white">
            <div>
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
        {/* hand--------------------- */}
        <div id="hand" className="relative overflow-hidden flex items-center">
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
            <div className="p-5">
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

        <div id="map" className="relative h-screen bg-[#0120aa] flex items-center">
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

export default WsecOne;
