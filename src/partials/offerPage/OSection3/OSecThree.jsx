import React from "react";
import { useEffect } from "react";
import vid from "../../../Videos/Market reasearch.mp4";
import vid2 from "../../../Videos/Prévi VF (2023).mp4";
import vid3 from "../../../Videos/BP.mp4";
import "./OSecThree.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    registerVideo("#bound-two", "video");
    registerVideo("#bound-three", "video");
  }, []);

  // text animation===============
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".orevealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 30%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
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
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});

  }, []);

  return (
    <div className="relative">
      {/* TEXT for market research */}
      <div className=" absolute text-justify text-white top-0 z-10 px-20">
        {/* 1st title=============== */}
        <section class="offer-sec-container">
          <div class="offer-sec-content orevealUp !top-[40%] mt-52">
            <h1 className="text-3xl font-bold mt-28">
              Pourquoi faire une étude de marché ?
            </h1>
          </div>
        </section>

        {/* •	Frame 72  */}
        <section class="offer-sec-container">
          <div class="offer-sec-content !top-[30%] !w-[35%]">
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
          <div class="offer-sec-content !top-[30%] !w-[35%]">
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
          <div class="offer-sec-content !top-[30%] !w-[35%]">
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
          <div class="offer-sec-content !top-[40%] !w-[35%]">
            <h1 className="text-3xl font-bold">
              Et si nous prenions de la hauteur ensemble ?
            </h1>
          </div>
        </section>

        {/* •	Frame 1066 */}
        <section class="offer-sec-container">
          <div class="offer-sec-content !top-[30%] !w-[35%]">
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

      {/* ==============
            video 2
            ============================*/}
      <div className="relative ">
        <div className="absolute top-5 z-10 text-justify text-white px-20">
          {/* ================•	Appear frame 0===1st part=================== */}

          <section class="offer-sec2-container">
            <div class="offer-sec2-content !top-[40%] mt-52">
              <h1 className="w-[40%] text-3xl text-left font-bold ">
                Qu’est-ce qu’un prévisionnel financier ?
              </h1>
              <p className="w-[35%]">
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
            <div class="offer-sec2-content !top-[40%] ">
              <h1 className="w-[40%] text-3xl font-bold ">
                Pourquoi faire un prévisionnel financier ?
              </h1>
              <p className="w-[35%]">
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
            <div class="offer-sec2-content !top-[20%] w-[35%]">
              <p className="">
                Vous pourrez ensuite vous en servir pour établir vos objectifs
                et garder cet outil de référence tout on long de votre parcours
                entrepreneurial. Croyez-nous, vous apprécierez pouvoir vous y
                rattacher dans les moments mouvementés.
              </p>
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
          {/* =============•	Appear frame 530==========3rd part================================== */}

          <section class="offer-sec2-container">
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
          </section>
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

      {/* 3rd video=======BP========= */}
      <div className="relative">
        <div className="absolute top-5 z-10 px-20 text-white">
          <div>
            <h1>Qu’est-ce qu’un Business plan ?</h1>

            {/* •	Frame 160  */}
            <p>
              Contrairement aux idées reçues, on ne fait pas un business plan
              uniquement dans le cadre d’une création d’entreprise mais
              également pour tout projet nouveau au sein de cette dernière. Un
              business plan adapté est de mise pour traduire les projections de
              développement et démontrer la cohérence de votre stratégie à 360°
              (R.H, finance, marketing…) quant aux objectifs et à la rentabilité
              du projet. Il s’agit à la fois d’apporter de la clarté dans votre
              projet, savoir précisément dans quelle direction vous allez et de
              quelle façon.
            </p>
          </div>
          {/* •	Frame 320 Block 2  */}
          <div>
            <h1>Pourquoi faire un Business plan ?</h1>

            {/* •	Frame 420  */}
            <p>
              Réaliser un business plan est avant tout primordial pour vous
              permettre de valider la viabilité de votre projet et de vous aider
              à le structurer en adoptant la meilleure stratégie. C’est
              également un puissant outil incontournable pour convaincre vos
              partenaires et financeurs de la pertinence de votre projet sur
              tous les plans. Il ne faut donc pas prendre sa rédaction à la
              légère et savoir mettre en avant les atouts du projet tout en
              montrant que vous avez pris en compte les différents risques
              possibles et que vous y êtes préparé.
            </p>

            {/* •	Frame 730  */}
            <p>
              Nous vous proposons un business plan sur mesure adapté à votre
              usage et qui correspondra aux attentes de vos partenaires
              (banques, investisseurs, fournisseurs etc.). De par notre
              expertise et notre savoir-faire, nous saurons réaliser le business
              plan qui répond à vos besoins.
            </p>
          </div>
        </div>
        <div id="bound-three" className="scroll-bound">
          <div className="content">
            {/* <p>MP4 Video - Keyframe Interval 20</p> */}
            <video width="full" muted preload>
              <source src={vid3} type="video/mp4" />
              <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSecThree;
