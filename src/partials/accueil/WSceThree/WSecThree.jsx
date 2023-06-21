import React, { useEffect, useState } from "react";

import "./WSecThree.css";

const WSecThree = () => {
 

  return (
    <div>
      <section className="relative lg:mt-40 lg:h-[13500px] overflow-hidden">
        {/* ================•	Appear frame 0===1st part=================== */}

        <div className="content py-16 z-20">
          <div
            className="text-justify text-base-100 lg:px-20"
            data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            
          >
            <p className="-mt-20">
              Tous nos services sont, comme évoqué précédemment, personnalisés
              et conçus sur mesure. Nous nous attachons à proposer des outils et
              documents fonctionnels, pour lesquels vous aurez les fichiers
              sources modifiables. Adaptés également à vos besoins en fonction
              du destinataire (investisseurs, établissement bancaire, demande de
              subventions...) et des usages potentiels dans le futur. Les
              documents peuvent-être traduits en anglais et adaptés aux règles
              anglo-saxonnes (notamment pour les prévisionnels financiers).
            </p>
          </div>

          {/* ===============•	Appear frame 100======2nd part=========================== */}

          <div className="mt-[1300px] lg:px-20">
            <div className="my-10 text-justify text-base-100"   data-aos="fade-right"
     data-aos-anchor-placement="center-bottom">
              <p
                className="my-5"
              
                
              >
                Les missions sont ponctuées de temps d’échanges et de réflexions
                communes pour que nous nous posions collectivement les bonnes
                questions et que nous choisissions les stratégies les plus
                appropriées. (SPACE) Avec notre expertise à 360° du monde de
                l’entreprise nous travaillons à la fois sur l’environnement
                externe et interne en prenant en compte l’ensemble des
                départements de votre entreprise (R.H, commercial, marketing,
                finance…) en fonction de la pertinence que cela a dans votre
                projet et la mission confiée. L’idée est de proposer des
                recommandations, des stratégies et scenarios issus de nos
                analyses pour répondre aux problématiques de départ en faisant
                face aux défis futurs.(SPACE)
              </p>
              <p className="my-5">
                Nous apportons l’appui de notre réseau pour vous mettre en
                relation au bon moment avec les bons experts (publics et
                privés), nous vous aidons à trouver les meilleures solutions de
                financement (notamment les subventions et autres aides qui ne
                sont pas toujours de notoriété publique), à créer des
                partenariats pertinents, mettre en place des stratégies de
                coopétition…(SPACE)
              </p>
              <p className="my-5">
                Vous aurez toujours un consultant pour vous épauler, vous
                challenger, s’assurer que les objectifs sont suivis et qui se
                rendra le plus disponible possible pour mener à bien vos projets
                mais aussi pour vous soutenir, prendre du recul, avec qui vous
                pourrez réfléchir à toutes les questions auxquelles vous devez
                répondre seul habituellement.
              </p>
            </div>
          </div>

          {/* =============•	Appear frame 350==========3rd part================================== */}

          <div className="mb-20 pt-[10000px] lg:px-20">
            <div className="my-10 text-justify text-base-100"   data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <p className="my-5">
                Rejoignez la communauté Kibyon et ne soyez plus jamais seul face
                aux défis de l’entreprenariat et plus largement à ceux auxquels
                vous serez confronté tout au long de la vie de votre entreprise.
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <div className="welcomeSpacer"></div>

          <video className="video !h-screen !w-full object-cover">
            <source src={welcome} type="video/mp4" />
          </video>
        </div>
      </section>




      {/* ===================================== */}
      <div className="text-white text-justify absolute top-10 z-10 px-20">
       <div className="mt-[20%] p-5">
       <p className="">
          Tous nos services sont, comme évoqué précédemment, personnalisés et
          conçus sur mesure. Nous nous attachons à proposer des outils et
          documents fonctionnels, pour lesquels vous aurez les fichiers sources
          modifiables. Adaptés également à vos besoins en fonction du
          destinataire (investisseurs, établissement bancaire, demande de
          subventions...) et des usages potentiels dans le futur. Les documents
          peuvent-être traduits en anglais et adaptés aux règles anglo-saxonnes
          (notamment pour les prévisionnels financiers).
        </p>
       </div>
        {/* ==========•	Appear frame 350==========3rd part================ */}
       <div className="p-5 mt-[20%]">
       <p className="">
          Les missions sont ponctuées de temps d’échanges et de réflexions
          communes pour que nous nous posions collectivement les bonnes
          questions et que nous choisissions les stratégies les plus
          appropriées. (SPACE) Avec notre expertise à 360° du monde de
          l’entreprise nous travaillons à la fois sur l’environnement externe et
          interne en prenant en compte l’ensemble des départements de votre
          entreprise (R.H, commercial, marketing, finance…) en fonction de la
          pertinence que cela a dans votre projet et la mission confiée. L’idée
          est de proposer des recommandations, des stratégies et scenarios issus
          de nos analyses pour répondre aux problématiques de départ en faisant
          face aux défis futurs.(SPACE)
        </p>
        <p className="my-5">
          Nous apportons l’appui de notre réseau pour vous mettre en relation au
          bon moment avec les bons experts (publics et privés), nous vous aidons
          à trouver les meilleures solutions de financement (notamment les
          subventions et autres aides qui ne sont pas toujours de notoriété
          publique), à créer des partenariats pertinents, mettre en place des
          stratégies de coopétition…(SPACE)
        </p>
        <p className="">
          Vous aurez toujours un consultant pour vous épauler, vous challenger,
          s’assurer que les objectifs sont suivis et qui se rendra le plus
          disponible possible pour mener à bien vos projets mais aussi pour vous
          soutenir, prendre du recul, avec qui vous pourrez réfléchir à toutes
          les questions auxquelles vous devez répondre seul habituellement.
        </p>
       </div>

        {/* ========•	Appear frame 350==========3rd part=================== */}
        <div className="mt-[40%] p-5">
        <p className="">
                Rejoignez la communauté Kibyon et ne soyez plus jamais seul face
                aux défis de l’entreprenariat et plus largement à ceux auxquels
                vous serez confronté tout au long de la vie de votre entreprise.
              </p>
        </div>
      </div>
    </div>
  );
};

export default WSecThree;
