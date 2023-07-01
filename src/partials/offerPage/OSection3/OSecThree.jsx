import React from "react";
import { useEffect } from "react";
import vid from "../../../Videos/Market reasearch.mp4";
import vid2 from "../../../Videos/Prévi VF (2023).mp4";
import vid3 from "../../../Videos/BP.mp4";
import "./OSecThree.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OSecThree = () => {
  const registerVideo = (boundSelector, videoSelector) => {
    const bound = document.querySelector(boundSelector);
    const video = bound.querySelector(videoSelector);

    const scrollVideo = () => {
      if (video && video.duration) {
        const distanceFromTop =
          window.scrollY + bound.getBoundingClientRect().top;
        const rawPercentScrolled =
          (window.scrollY - distanceFromTop) /
          (bound.scrollHeight - window.innerHeight);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

        video.currentTime = video.duration * percentScrolled;
      }
      requestAnimationFrame(scrollVideo);
    };

    requestAnimationFrame(scrollVideo);
  };

  useEffect(() => {
    registerVideo("#bound-one", "video");
  }, []);

  // text animation===============
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray(".revealUp").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 40%",
        // markers: true,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
      });
    });
  }, []);

  return (
    <div className="relative">
      {/* TEXT for market research */}
      <div className=" absolute text-justify text-white top-0 z-10 px-20">
        {/* 1st title=============== */}
        <section class="offer-sec-container ">
          <div class="offer-sec-content text-center !top-[10%] revealUp  mt-5">
            <h1 className="text-3xl font-bold ">
              Pourquoi faire une étude de marché ?
            </h1>
          </div>
        </section>

        {/* •	Frame 72  */}
        <section class="offer-sec-container">
          <div class="offer-sec-content revealUp !top-[20%] !w-[35%]">
            <p className="">
              L’étude de marché va vous permettre d’éliminer ou de réduire les
              zones d’incertitudes qui subsistent dans vos différents projets.
              En vous apportant un regard sur les attentes de vos consommateurs
              et une visibilité sur les acteurs déjà en place sur le marché
              concerné.
            </p>
          </div>
        </section>

        {/* •	Frame 136 */}
        <section class="offer-sec-container">
          <div class="offer-sec-content revealUp !top-[30%] !w-[35%]">
            <p>
              Cela vous permettra de cerner les opportunités de marché : est-ce
              que je me lance sur ce marché ? si oui dans quelles conditions ?
            </p>

            <p>
              Vous serez également en mesure d’identifier les risques et chances
              de succès. L’étude de marché va vous permettre de mieux connaitre
              l’environnement dans lequel vous évoluez, de vous rassurer sur
              l’orientation à prendre pour maximiser les chances de succès et de
              rassurer également l’ensemble des parties prenantes (associés,
              financeurs, organismes tiers…)
            </p>
          </div>
        </section>

        {/* •	Frame 401 */}
        <section class="offer-sec-container">
          <div class="offer-sec-content revealUp !top-[50%] mt-20 !w-[35%]">
            <p>
              Une étude de marché sera votre base de réflexion pour bâtir une
              stratégie adaptée et définir des objectifs réalistes. Nous
              pourrons ensuite réaliser un prévisionnel financier sur mesure et
              un plan d’actions personnalisé.
            </p>
          </div>
        </section>

        {/* •	Frame 913  */}
        <section class="offer-sec-container">
          <div class="offer-sec-content revealUp !top-[20%] text-center">
            <h1 className="text-3xl font-bold">
              Et si nous prenions de la hauteur ensemble ?
            </h1>
          </div>
        </section>

        {/* •	Frame 1066 */}
        <section class="offer-sec-container">
          <div class="offer-sec-content revealUp !top-[30%] !w-[35%]">
            <p>
              Que ce soit un projet pour une entreprise établie ou en création,
              l’étude de marché vous permettra de prendre du recul et de la
              hauteur sur votre projet afin de vous permettre de vous projeter
              et de prendre les meilleures décisions pour l’avenir.
            </p>
            <p>
              Kibyon vous évitera de tomber dans des biais de confirmation et
              vous apportera d’autres points de vue et axes de réflexions afin
              d’ouvrir le champ des possibles.
            </p>
          </div>
        </section>
      </div>

      <div id="bound-one" className="scroll-bound">
        <div className="content">
          <video width="full" muted preload>
            <source src={vid} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default OSecThree;
