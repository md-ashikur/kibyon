import React from 'react';
import "./OSecFive.css";
import vid3 from "../../../Videos/Video VF du BP - 16_05_230000-0855_VP9.webm"
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const OSecFive = () => {
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
        registerVideo("#bound-three", "video");
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
        <div className="relative bgColor">
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
      <div id="bound-three" className="scroll-bound ">
        <div className="content">
          {/* <p>MP4 Video - Keyframe Interval 20</p> */}
          <video width="full" muted preload>
            <source src={vid3} type="video/webm" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>
    </div>
    );
};

export default OSecFive;