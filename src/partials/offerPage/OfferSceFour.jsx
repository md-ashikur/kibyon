import React, { useEffect, useRef } from "react";
import imgSrc from "../../img/Business plan/BP - Block 1 & 2 (resize).png";
import block3 from "../../img/Business plan/BP - Block 3 (original).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const OfferSceFour = () => {
  const parallaxRef = useRef(null);
  const parallaxRefTwo = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    const imgElement = parallaxElement.querySelector("img");

    gsap.to(imgElement, {
      yPercent: -10,
      scale: 1.9,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxElement,
        start: "top center",
        end: "bottom center",

        scrub: true,
      },
    });
  }, []);

  // =====2ND BLOCK============

  useEffect(() => {
    const parallaxElementTwo = parallaxRefTwo.current;

    const imgElementTwo = parallaxElementTwo.querySelector("img");

    gsap.to(imgElementTwo, {
      yPercent: -10,
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxElementTwo,
        start: "top center",
        end: "bottom center",

        scrub: true,
      },
    });
  }, []);
  return (
    <div id="Business_plan" className=" overflow-hidden ">


      {/* =========1st block========= */}
      <div className="relative text-base-100 bg-primary py-28 lg:h-[250vh] h-[150vh] ">
        <div className="flex justify-center mt-72"  data-aos="zoom-in" data-aos-anchor-placement="top-center" >
          <div ref={parallaxRef} className="lg:w-[60%] overflow-hidden rounded-lg mx-5">
            <img src={imgSrc} alt="" className="w-full" />
          </div>
        </div>

{/* ---------top text block-------- */}
        <div className="card p-8 absolute lg:top-32 top-10 mx-5 lg:left-20 lg:w-[50%] border border-secondary"
         data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="2000">
          <h2 className="lg:text-2xl font-bold my-5">
            Qu’est-ce qu’un Business plan ?
          </h2>
          <p className=" lg:block lg:text-base  text-xs text-justify">
            Contrairement aux idées reçues, on ne fait pas un business plan
            uniquement dans le cadre d’une création d’entreprise mais également
            pour tout projet nouveau au sein de cette dernière. Un business plan
            adapté est de mise pour traduire les projections de développement et
            démontrer la cohérence de votre stratégie à 360° (R.H, finance,
            marketing…) quant aux objectifs et à la rentabilité du projet. Il
            s’agit à la fois d’apporter de la clarté dans votre projet, savoir
            précisément dans quelle direction vous allez et de quelle façon.
          </p>
        </div>
{/* ----------bottom text- block----------- */}
        <div className="py-20">
          <div className="card p-8 absolute mx-5 lg:bottom-20 bottom-10 lg:right-28 lg:w-[50%] border border-secondary"
           data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="2000"
           >
            <h2 className="lg:text-2xl font-bold my-5 ">
              Pourquoi faire un Business plan ?
            </h2>

            <div className="lg:block lg:text-base text-xs">
              <p className="text-justify">
                Réaliser un business plan est avant tout primordial pour vous
                permettre de valider la viabilité de votre projet et de vous
                aider à le structurer en adoptant la meilleure stratégie. C’est
                également un puissant outil incontournable pour convaincre vos
                partenaires et financeurs de la pertinence de votre projet sur
                tous les plans. Il ne faut donc pas prendre sa rédaction à la
                légère et savoir mettre en avant les atouts du projet tout en
                montrant que vous avez pris en compte les différents risques
                possibles et que vous y êtes préparé.
              </p>
              <p className="text-justify">
                Nous vous proposons un business plan sur mesure adapté à votre
                usage et qui correspondra aux attentes de vos partenaires
                (banques, investisseurs, fournisseurs etc.). De par notre
                expertise et notre savoir-faire, nous saurons réaliser le
                business plan qui répond à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

   

      {/* ==================2ND BLOCK===================================== */}
      <div className="relative bg-primary lg:px-20 px-5 py-28">
        <div className="grid lg:grid-cols-2 gap-5">

          <div ref={parallaxRefTwo} className="w- overflow-hidden rounded-2xl"  data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <img src={block3} alt="" className="w-full" />
          </div>

          <div className="p-5 card border border-secondary"  data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="2000">
              <h2 className="lg:text-2xl text-xl font-bold text-secondary my-5">
                Comment cela va-t-il se dérouler ?
              </h2>
              <div className=" text-justify lg:mx-2 text-base-100  lg:text-base text-xs">
                <ul class="marker:text-base-100 list-disc pl-5 lg:space-y-3 space-y-1 text-base-100">
                  <li>
                    1 échange téléphonique pour bien comprendre votre projet
                  </li>
                  <li>
                    Collecte des éléments disponibles du projet et collaboration
                    pour obtenir les éléments manquants.
                  </li>
                  <li>1 proposition commerciale adaptée à votre besoin</li>
                  <li>
                    Entretiens de travail de plusieurs heures pour structurer le
                    projet et définir les lignes directrices.
                  </li>
                  <li>
                    Plusieurs échanges complémentaires au fil de la mission pour
                    préciser le projet et réfléchir ensemble aux meilleurs choix
                    pour vous.
                  </li>
                  <li>
                    Livrable du business plan en pdf et Powerpoint avec accès au
                    fichier source, contenant entre autres : présentation du
                    projet et des fondateurs, étude de marché, prévisionnel
                    financier, explication de la stratégie etc.
                  </li>
                  <li>
                    Présentation du business plan et prise en main avec le
                    client pour pouvoir être totalement indépendant et autonome.
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSceFour;
