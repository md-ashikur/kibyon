import React, { useEffect, useRef } from "react";
import "./OfferBody.css";
import card1 from "../../img/Introduction/1st Cards option 4- Market research.png";
import card2 from "../../img/Introduction/Cards N°2= Prévi.png";
import card3 from "../../img/Introduction/3rd Cards - Business plan option 2.png";
import card4 from "../../img/Introduction/1st Cards option 2- Market research.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);

const OfferPage = () => {
  return (
    <div className="bg-secondary lg:h-auto">
      {/* ****************************Section-1**********Nos offres section START************************* */}

      <section className="z-10 lg:h-screen h-auto bgPic relative grid lg:grid-cols-2 gap-3 lg:px-20 px-5 py-10 text-base-100">
     
          <div className="flex items-center">
          <div>
            <h1 className="text-5xl text-center mb-10 font-bold" data-aos="fade-right"  data-aos-duration="1100">Nos offres</h1>
            <p className="font-light my-4 text-justify z-50" data-aos="fade-right" data-aos-duration="1600">
              Nos offres sont toutes personnalisées et adaptées à vos projets.
              Avec Kibyon, obtenez le conseil dont vous avez besoin pour tous
              vos projets. Vous découvrirez ci-dessous nos offres de base que
              nous réalisons sur mesure. Nos experts sont à même de répondre à
              de nombreuses demandes : du diagnostic d’entreprise à
              l’accompagnement pour une stratégie de croissance externe en
              passant par du coaching et bien d’autres. N’hésitez pas à nous
              contacter pour voir de quelle façon nous pouvons vous aider
            </p>
            <div className="lg:flex items-center justify-center mt-12 hidden" data-aos-anchor-placement="top-bottom" data-aos="fade-right" data-aos-duration="2500">
              <Link to="/contact">
                <button  className="border px-3 py-2 rounded-lg hover:bg-primary hover:scale-105 duration-150">
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================cards================================= */}

        <div className="grid lg:grid-rows-2  grid-rows-4 grid-flow-col gap-5 justify-center pt-5 lg:pt-0">
          {/* ================card1======================== */}
         <a href="#market_study">
         <div className="relative cardBody" data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            <h2 className="absolute top-5 left-10 z-10 cardText">
              Étude de marché
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card1}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Les institutions financières vous font payer le risque ?
                    Nous, nous le réduisons. Faites une étude de marché et
                    réduisez le risque inhérent à vos projets avec Kibyon.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-11 top-1 cardText">
                A partir de 499€
              </p>
            </div>
          </div>
         </a>

          {/* ====================card3=========== */}
          <a href="#Business_plan">
          <div className="relative cardBody" data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
            <h2 className="absolute top-5 left-14 z-10 cardText">
              Business plan
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card3}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Et si nous faisions un tour d’horizon à 360° de votre projet
                    ? Nous réaliserons un business plan sur mesure incluant
                    étude de marché et prévisionnel financier, en vous
                    accompagnant sur les différentes stratégies possibles.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-11 top-1 cardText">
                A partir de 999€
              </p>
            </div>
          </div>
          </a>

          {/* ==========================card2============ */}
         <a href="#financial_forecast">
         <div className="relative cardBody" data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
            <h2 className="absolute top-5 left-7 z-10 cardText">
              Prévisionel financier
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card2}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Réaliser un prévisionnel financier vous parait impossible ?
                    superflu ? ou une simple requête sans intérêt de différents
                    tiers ? faites-nous confiance, dans le feu de l’action vous
                    apprécierez avoir un guide sur lequel vous appuyer .Alors
                    préparons votre feuille de route ensemble !
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-11 top-1 cardText">
                A partir de 599€
              </p>
            </div>
          </div>
         </a>
          {/* ===================card4================== */}
          <a href="#Unique_offer">
          <div className="relative cardBody" data-aos="flip-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1600">
            <h2 className="absolute top-5 left-14 z-10 cardText">
              Offre unique
            </h2>
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={card4}
                    alt="Avatar"
                    className="w-[220px] h-[220px] rounded-t-lg"
                  />
                </div>
                <div class="flip-card-back rounded-t-lg bg-primary">
                  <p className="text-xs mt-10 p-3 text-justify">
                    Vous avez besoin d’aide ou souhaitez nous soumettre un
                    projet ? nous pouvons intervenir sur la stratégie et
                    l’organisation d’une entreprise de l’idée à la cession,
                    réaliser du coaching, résoudre des problèmes précis, épauler
                    ponctuellement le dirigeant en fonction de ses besoins etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary w-full h-9 relative rounded-b-lg">
              <p className="absolute left-12 top-1 cardText">Sur demande</p>
            </div>
          </div>
          </a>
        </div>
        <div className="flex items-center justify-center mt-10 lg:hidden ">
              <Link to="/contact">
                <button className="border px-3 py-2 rounded-lg hover:bg-primary hover:scale-105 duration-150">
                  Contactez-nous
                </button>
              </Link>
            </div>
      </section>

      {/* ***************************Section-1********Nos offres section END************************* */}

      
    </div>
  );
};

export default OfferPage;
