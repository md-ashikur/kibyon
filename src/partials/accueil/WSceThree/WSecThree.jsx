import React, { useEffect, useState } from "react";
import welcome from "../../../Videos/WP - Section 3 -Services 5 étoiles VF-03_2023.blend0001-0400.mp4";
import "./WSecThree.css";

const WSecThree = () => {
  useEffect(() => {
    let $welcomeSpacer = document.querySelector(".welcomeSpacer");
    let $video = document.querySelector(".video");

    // The height of the welcomeSpacer element
    let welcomeSpacerHeight = $welcomeSpacer.clientHeight;
    // the height of the viewport
    let viewportHeight =
      document.documentElement.getBoundingClientRect().height;

    // We can get the total scrollable height be subtracting the welcomeSpacer element's height by the viewport height
    let scrollableHeight = welcomeSpacerHeight - viewportHeight;
    // Get the full duration of the video
    let videoDuration;
    // Keep track the video's playtime
    let currentTime = 0;

    // The scroll event handler
    function handleScrollEvent(event) {
      // Here we sync the y position of the scrollbar to the progress of the video
      currentTime = (window.scrollY * videoDuration) / scrollableHeight;
      $video.currentTime = currentTime;
    }

    // Loaded Data handler, that is, the function that runs after the video is ready to play
    function handleLoadedData(event) {
      // Get the full video duration
      videoDuration = $video.duration;
      // Do stuff when user scrolls
      window.addEventListener("scroll", handleScrollEvent);
    }

    // Do stuff when the video is ready to play
    $video.addEventListener("loadeddata", handleLoadedData);
  }, []);

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
    </div>
  );
};

export default WSecThree;
