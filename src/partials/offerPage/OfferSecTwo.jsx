import { useEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const OfferSecTwo = () => {
  useEffect(() => {
    let $spacer = document.querySelector(".spacer");
    let $marketStudy = document.querySelector(".video");

    // The height of the spacer element
    let spacerHeight = $spacer.clientHeight;
    // the height of the viewport
    let viewportHeight =
      document.documentElement.getBoundingClientRect().height;

    // We can get the total scrollable height be subtracting the spacer element's height by the viewport height
    let scrollableHeight = spacerHeight - viewportHeight;
    // Get the full duration of the video
    let videoDuration;
    // Keep track the video's playtime
    let currentTime = 0;

    // The scroll event handler
    function handleScrollEvent(event) {
      // Here we sync the y position of the scrollbar to the progress of the video
      currentTime = (window.scrollY * videoDuration) / scrollableHeight;
      $marketStudy.currentTime = currentTime;
    }

    // Loaded Data handler, that is, the function that runs after the video is ready to play
    function handleLoadedData(event) {
      // Get the full video duration
      videoDuration = $marketStudy.duration;
      // Do stuff when user scrolls
      window.addEventListener("scroll", handleScrollEvent);
    }

    // Do stuff when the video is ready to play
    $marketStudy.addEventListener("loadeddata", handleLoadedData);
  }, []);
  return (
    <div>
         <section className="relative my-10 h-[60px] z-10 overflow-hidden">
        {/* ========================1st part=================== */}
       

        <div className="content lg:py-16 ">
          <div className="lg:my-10 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Pourquoi faire une étude de marché ?
            </h1>
            <div className="my-10 text-justify text-base-100">
              <p className="my-5 ">
                L’étude de marché va vous permettre d’éliminer ou de réduire les
                zones d’incertitudes qui subsistent dans vos différents projets.
                En vous apportant un regard sur les attentes de vos
                consommateurs et une visibilité sur les acteurs déjà en place
                sur le marché concerné.
              </p>
              <p className="my-5">
                Cela vous permettra de cerner les opportunités de marché :
                est-ce que je me lance sur ce marché ? si oui dans quelles
                conditions ?
              </p>
              <p className="my-5">
                Vous serez également en mesure d’identifier les risques et
                chances de succès. L’étude de marché va vous permettre de mieux
                connaitre l’environnement dans lequel vous évoluez, de vous
                rassurer sur l’orientation à prendre pour maximiser les chances
                de succès et de rassurer également l’ensemble des parties
                prenantes (associés, financeurs, organismes tiers…)
              </p>
              <p className="my-5">
                Une étude de marché sera votre base de réflexion pour bâtir une
                stratégie adaptée et définir des objectifs réalistes. Nous
                pourrons ensuite réaliser un prévisionnel financier sur mesure
                et un plan d’actions personnalisé.
              </p>
            </div>
          </div>

          {/* =====================2nd part=========================== */}

          <div className="lg:my-20 lg:px-20">
            <h1 className="text-5xl text-center font-bold text-base-100">
              Et si nous prenions de la hauteur ensemble ?
            </h1>
            <div className="lg:my-10 text-justify text-base-100">
              <p className="my-5">
                Que ce soit un projet pour une entreprise établie ou en
                création, l’étude de marché vous permettra de prendre du recul
                et de la hauteur sur votre projet afin de vous permettre de vous
                projeter et de prendre les meilleures décisions pour l’avenir.
                Kibyon vous évitera de tomber dans des biais de confirmation et
                vous apportera d’autres points de vue et axes de réflexions afin
                d’ouvrir le champ des possibles.
              </p>
            </div>
          </div>

          {/* =======================3rd part================================== */}

          <div className="lg:px-20">
            <h1 className="text-3xl font-bold text-base-100">
              Comment cela va-t-il se dérouler ?
            </h1>
            <div className="lg:my-10 text-justify text-base-100">
              <ul class="marker:text-base-100 list-disc pl-5 space-y-3 text-base-100">
                <li>Nous recevons votre mail ou votre appel</li>
                <li>
                  1 échange téléphonique pour bien comprendre votre projet
                </li>
                <li>Collecte des éléments disponible du projet</li>
                <li>1 proposition commerciale adaptée à votre besoin</li>
                <li>
                  Plusieurs échanges complémentaires pour préciser le projet si
                  besoin
                </li>
                <li>
                  Livrable de l’étude de marché en pdf et Powerpoint avec accès
                  au fichier source.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div class="spacer"></div>

          <video class="marketStudy">
            <source src="" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
 
  );
};

export default OfferSecTwo;
