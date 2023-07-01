import React from 'react';
import vid2 from "../../../Videos/Prévi VF (2023).mp4"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OSecFour.css";
import { useEffect } from 'react';

const OSecFour = () => {

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
        registerVideo("#bound-two", "video");
      }, []);
    
      // text animation===============
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // REVEAL //
        gsap.utils.toArray(".fourRevealUp").forEach(function (elem) {
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
      <div className="absolute top-5 z-10 text-justify text-white px-20">
        {/* ================•	Appear frame 0===1st part=================== */}

        <section class="offer-sec2-container">
          <div class="offer-sec2-content !top-[20%]  fourRevealUp  mt-20">
            <h1 className="text-center text-3xl text-left mb-40 font-bold ">
              Qu’est-ce qu’un prévisionnel financier ?
            </h1>
            
          </div>
        </section>

        <section class="offer-sec2-container">
          <div class="offer-sec2-content fourRevealUp !top-[40%] mb-20">
            
            <p className="w-[40%] ">
              Il est d’usage de dire que le prévisionnel financier est la
              partie financière du business plan. C’est la modélisation
              chiffrée de votre stratégie à 3-5ans. En simplifiant, le
              prévisionnel financier, sera votre boussole qui révèlera les
              impacts financiers à court, moyen et long terme des actions que
              vous entreprendrez pour bâtir votre projet au fil du temps.
            </p>
          </div>
        </section>

       
        {/* ===============•	Appear frame 300======2nd part=========================== */}

        <section class="offer-sec2-container">
          <div class="offer-sec2-content fourRevealUp  !top-[40%] mb-20">
            <h1 className="w-[40%] text-3xl font-bold ">
              Pourquoi faire un prévisionnel financier ?
            </h1>
            <p className="w-[40%]">
              Tout d’abord, il est évident qu’il faut déjà le faire pour vous.
              Nous devons étudier votre projet d’un point de vue financier
              pour valider le business model (connaitre sa rentabilité) et
              pouvoir évaluer les perspectives financières et le risque qui en
              découle. Il vous permettra de connaitre les ressources
              financières nécessaires pour mener à bien ce projet.
            </p>
          </div>
        </section>

        <section class="offer-sec2-container">
          <div class="offer-sec2-content fourRevealUp !top-[40%] w-[40%]">
            <p className="">
              Vous pourrez ensuite vous en servir pour établir vos objectifs
              et garder cet outil de référence tout on long de votre parcours
              entrepreneurial. Croyez-nous, vous apprécierez pouvoir vous y
              rattacher dans les moments mouvementés.
            </p>
           
          </div>
        </section>


        <section class="offer-sec2-container">
          <div class="offer-sec2-content fourRevealUp !top-[45%] w-[40%]">
           
            <p className="my-5">
              Enfin, il a un intérêt certain pour les parties externes afin de
              les aider à appréhender votre projet dans son ensemble, de les
              convaincre de l’opportunité financière et donc attirer de
              potentiels investisseurs. Il est toujours difficile de se
              projeter et de réaliser un prévisionnel, on peut vite se sentir
              perdu. Avec Kibyon, vous aurez un outil sur mesure clef en main
              vous permettant de réaliser des simulations, des scénarios pour
              ainsi trouver le bon équilibre et une alchimie parfaite entres
              les divers flux qui constituent un prévisionnel financier et les
              contraintes qui s’imposent à vous.
            </p>
          </div>
        </section>

 {/* =============•	Appear frame 1100========4th part=========================== */}

        <section class="offer-sec2-container">
          <div class="offer-sec2-content fourRevealUp !top-[30%] w-[40%]">
           
          <h1 className="text-4xl text-center font-bold text-base-100">
              Avec Kibyon, gardez un œil sur l’avenir !
            </h1>
            <p className="my-5">
                Il n’est pas toujours aisé de se projeter et de simuler le
                chiffre d’affaires, les dépenses, les investissements etc que
                vous aurez à 3 - 5ans. Nous vous proposons des scénarios adaptés
                et réalistes, basés sur des indicateurs pertinents. L’idée est
                de vous rendre autonome en vous expliquant les tenants et
                aboutissants de l’outil que nous développons pour vous. Ainsi,
                vous serez en mesure de tirer le maximum de bénéfice du
                prévisionnel financier que nous mettrons à votre disposition et
                pour lequel vous pourrez réaliser de nouveaux scenarios à cours
                moyen et long terme. Nous tenons à faire preuve de pédagogie
                pour vous permettre également d’expliquer les scenarios à de
                potentiels investisseurs ou établissements financier.
              </p>
          </div>
        </section>

        {/* =============•	Appear frame 530==========3rd part================================== */}



 <div className="mb-20  lg:px-20">
           
            <div className="my-10 text-justify text-base-100">
             
            </div>
          </div>

        {/* <section class="offer-sec2-container">
          <div class="offer-sec2-content !top-[40%] my-5">
            <h1 className="text-3xl font-bold text-base-100">
              Comment cela va -t-il se dérouler ?
            </h1>
          </div>
        </section>

        <section class="offer-sec2-container">
          <div class="offer-sec2-content !top-[40%] w-[40%]">
            <ul className="marker:text-base-100 list-disc pl-5 space-y-3 text-base-100">
              <li>
                1 échange téléphonique pour bien comprendre votre projet
              </li>
              <li>Collecte des éléments disponible du projet</li>
              <li>1 proposition commerciale adaptée à votre besoin</li>
              <li>1 entretien de travail pour bien définir le projet </li>
              <li>
                Plusieurs échanges complémentaires pour préciser le projet si
                besoin
              </li>
              <li>
                Livrable du prévisionnel financier en pdf et excel avec accès
                au fichier source
              </li>
              <li>
                Explications du fichier de simulation et prise en main avec le
                client pour pouvoir être totalement indépendant et autonome.
              </li>
            </ul>
          </div>
        </section> */}
      </div>
      <div id="bound-two" className="scroll-bound relative">
        <div className="content">
          <video width="full" muted preload>
            <source src={vid2} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>
    </div>
    );
};

export default OSecFour;