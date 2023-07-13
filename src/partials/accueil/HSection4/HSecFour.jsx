import React, { useEffect } from "react";
import homeVideo from "../../../Videos/WP - Section 3 -Services 5.mp4";
import "./HSecFour.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../../../components/Footer/Footer";
import HSecTwo from "../HSection2/HSecTwo";
import Header from "../../Header";


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


  // text revel effect=======
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 30%",
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
        
    
    <div className="relative">
    <div className="absolute text-justify top-0 font-semibold z-10 lg:px-20">
        {/* 1st part--------- */}
        <section class="container">
          <div class="content revealUp !top-[35%] lg:!w-[35%] mt-52">
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

       {/* 2nd part */}
        {/* ==========•	Appear frame 100==========2nd part================ */}
        <section class="container">
          <div class="content revealUp lg:!w-[35%] !top-[20%]">
            <p className="">
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
              pertinence que cela a dans votre projet et la mission confiée.<br />
              <br />
              L’idée est de proposer des recommandations, des stratégies et
              scenarios issus de nos analyses pour répondre aux problématiques
              de départ en faisant face aux défis futurs.
            </p>
          </div>
        </section>

{/* 3rd part */}
        <section class="container">
          <div class="content revealUp lg:!w-[35%] !top-[20%]">
            <p>
              Nous apportons l’appui de notre réseau pour vous mettre en
              relation au bon moment avec les bons experts (publics et privés),
              nous vous aidons à trouver les meilleures solutions de financement
              (notamment les subventions et autres aides qui ne sont pas
              toujours de notoriété publique), à créer des partenariats
              pertinents, mettre en place des stratégies de coopétition…
            </p>
            <br />
              
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
        {/* 4th part */}
        
        {/* ========•	Appear frame 350==========3rd part=================== */}
        <section class="container">
          <div class="content revealUp flex justify-center !top-[80%] mt-20">
            <p className="lg:!w-[920px] text-xl">
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

    </div>
  );
};

export default HSecFour;
