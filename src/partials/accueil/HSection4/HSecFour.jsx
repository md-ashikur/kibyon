import React, { useEffect } from "react";
import homeVideo from "../../../Videos/WP - Section 3 -Services 5.mp4";
import "./HSecFour.css";

const HSecFour = () => {
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

  return (
    <div className="relative">
      <div className="absolute text-justify top-0 font-bold z-10 lg:px-20">
        <section class="container">
          <div class="content !top-[30%] lg:!w-[35%] mt-52">
            <p className="">
              Tous nos services sont, comme évoqué précédemment, personnalisés
              et conçus sur mesure. Nous nous attachons à proposer des outils et
              documents fonctionnels, pour lesquels vous aurez les fichiers
              sources modifiables. <br />
              <br />
              Adaptés également à vos besoins en fonction du destinataire
              (investisseurs, établissement bancaire, demande de subventions...)
              et des usages potentiels dans le futur. Les documents peuvent-être
              traduits en anglais et adaptés aux règles anglo-saxonnes
              (notamment pour les prévisionnels financiers).
            </p>
          </div>
        </section>
        {/* ==========•	Appear frame 100==========2nd part================ */}
        <section class="container">
          <div class="content  !top-[20%]">
            <p className="lg:!w-[35%]">
              Les missions sont ponctuées de temps d’échanges et de réflexions
              communes pour que nous nous posions collectivement les bonnes
              questions et que nous choisissions les stratégies les plus
              appropriées. 
              <br />
              <br />
              Avec notre expertise à 360° du monde de l’entreprise nous
              travaillons à la fois sur l’environnement externe et interne en
              prenant en compte l’ensemble des départements de votre entreprise
              (R.H, commercial, marketing, finance…) en fonction de la
              pertinence que cela a dans votre projet et la mission confiée.
              L’idée est de proposer des recommandations, des stratégies et
              scenarios issus de nos analyses pour répondre aux problématiques
              de départ en faisant face aux défis futurs.
            </p>
          </div>
        </section>

        <section class="container">
          <div class="content lg:!w-[35%] !top-[20%] mt-20">
            <p>
              Nous apportons l’appui de notre réseau pour vous mettre en
              relation au bon moment avec les bons experts (publics et privés),
              nous vous aidons à trouver les meilleures solutions de financement
              (notamment les subventions et autres aides qui ne sont pas
              toujours de notoriété publique), à créer des partenariats
              pertinents, mettre en place des stratégies de coopétition…
            </p>

            <p className="">
              Vous aurez toujours un consultant pour vous épauler, vous
              challenger, s’assurer que les objectifs sont suivis et qui se
              rendra le plus disponible possible pour mener à bien vos projets
              mais aussi pour vous soutenir, prendre du recul, avec qui vous
              pourrez réfléchir à toutes les questions auxquelles vous devez
              répondre seul habituellement.
            </p>
          </div>
        </section>

        {/* ========•	Appear frame 350==========3rd part=================== */}
        <section class="container">
          <div class="content flex justify-center !top-[70%] mt-20">
            <p className="lg:!w-[70%]">
              Rejoignez la communauté Kibyon et ne soyez plus jamais seul face
              aux défis de l’entreprenariat et plus largement à ceux auxquels
              vous serez confronté tout au long de la vie de votre entreprise.
            </p>
          </div>
        </section>
      </div>

      <div id="bound-one" className="scroll-bound">
        <div className="content">
          <video className="object-cover  !h-screen !w-full " muted preload>
            <source src={homeVideo} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default HSecFour;
