import React, { useRef } from "react";
import "./HSecFour.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./PlaneSequence/PlaneImageSequence";

const HSecFour = () => {
  const ref = useRef();
  return (
    <div className="relative h-[510vh] bg-black">
      <div className="flex justify-center lg:justify-start text-justify  lg:px-20 text-white ">
         {/* 1st part--------- */}
        <div className="absolute top-[50vh] z-30 lg:!w-[35%]">
          <div className=" mx-5">
              <p className="mb-5"
               data-aos="zoom-out"
               data-aos-anchor-placement="top-bottom"
              >
                Tous nos services sont, comme évoqué précédemment, personnalisés
                et conçus sur mesure. Nous nous attachons à proposer des outils
                et documents fonctionnels, pour lesquels vous aurez les fichiers
                sources modifiables. 
                </p>
                <p  data-aos="zoom-out"
             data-aos-anchor-placement="center-bottom">
                Adaptés également à vos besoins en fonction du destinataire
                (investisseurs, établissement bancaire, demande de
                subventions...) et des usages potentiels dans le futur. Les
                documents peuvent-être traduits en anglais et adaptés aux règles
                anglo-saxonnes (notamment pour les prévisionnels financiers).
              </p>
            </div>
        
        </div>
        {/* 2nd part */}
        {/* ==========•	Appear frame 100==========2nd part================ */}
        <section
          className="absolute top-[150vh] z-30 lg:!w-[35%]"
         
        >
          <div className=" mx-5 ">
            <p className="mb-5"  
             data-aos="zoom-out"
             data-aos-anchor-placement="center-bottom"
             
           >
              Les missions sont ponctuées de temps d’échanges et de réflexions
              communes pour que nous nous posions collectivement les bonnes
              questions et que nous choisissions les stratégies les plus
              appropriées.
              </p>

              <p className="mb-5" data-aos="zoom-out"
          data-aos-anchor-placement="center-bottom"
       >
              Avec notre expertise à 360° du monde de l’entreprise nous
              travaillons à la fois sur l’environnement externe et interne en
              prenant en compte l’ensemble des départements de votre entreprise
              (R.H, commercial, marketing, finance…) en fonction de la
              pertinence que cela a dans votre projet et la mission confiée.
              </p>
              <p  data-aos="zoom-out"
          data-aos-anchor-placement="center-bottom"
      >
              L’idée est de proposer des recommandations, des stratégies et
              scenarios issus de nos analyses pour répondre aux problématiques
              de départ en faisant face aux défis futurs.
            </p>
          </div>
        </section>

        {/* 3rd part */}
        <section className="absolute top-[300vh] z-30 ">
          <div className="mx-5 lg:!w-[35%]">
            <p className="mb-5" data-aos="zoom-out"
          data-aos-anchor-placement="center-bottom">
              Nous apportons l’appui de notre réseau pour vous mettre en
              relation au bon moment avec les bons experts (publics et privés),
              nous vous aidons à trouver les meilleures solutions de financement
              (notamment les subventions et autres aides qui ne sont pas
              toujours de notoriété publique), à créer des partenariats
              pertinents, mettre en place des stratégies de coopétition…
            </p>
          

            <p className=""
             data-aos="zoom-out"
             data-aos-anchor-placement="center-bottom">
              Vous aurez toujours un consultant pour vous épauler, vous
              challenger, s’assurer que les objectifs sont suivis et qui se
              rendra le plus disponible possible pour mener à bien vos projets
              mais aussi pour vous soutenir, prendre du recul, avec qui vous
              pourrez réfléchir à toutes les questions auxquelles vous devez
              répondre seul habituellement.
            </p>
          </div>
        </section>
        </div>
        {/* 4th part */}

        {/* ========•	Appear frame 350==========3rd part=================== */}
        <section className="flex justify-center text-white text-justify">
         <div className="absolute top-[460vh] z-30 lg:!w-[55%]">
          
         <p className="mx-5 text-lg lg:text-2xl">
              Rejoignez la communauté Kibyon et ne soyez plus jamais seul face
              aux défis de l’entreprenariat et plus largement à ceux auxquels
              vous serez confronté tout au long de la vie de votre entreprise.
            </p>
         </div>
         
        </section>
    

      <Controller>
        <Scene duration="500%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default HSecFour;
