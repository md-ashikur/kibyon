import React, { useEffect } from "react";
import "./Test.css";
import vid from "../../Videos/Market reasearch.mp4";
import vid2 from "../../Videos/Prévi VF (2023).mp4";
import vid3 from "../../Videos/BP.mp4";

const Testing = () => {
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

  return (
    <div className="relative">
      {/* TEXT for market research */}
      <div className=" h-52 absolute text-white top-5 z-10 px-20">
        {/* 1st title=============== */}
        <div>
          <h1>Pourquoi faire une étude de marché ?</h1>
          {/* •	Frame 72  */}
          <p>
            L’étude de marché va vous permettre d’éliminer ou de réduire les
            zones d’incertitudes qui subsistent dans vos différents projets. En
            vous apportant un regard sur les attentes de vos consommateurs et
            une visibilité sur les acteurs déjà en place sur le marché concerné.
          </p>

          {/* •	Frame 136 */}
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

          {/* •	Frame 401 */}
          <p>
            Une étude de marché sera votre base de réflexion pour bâtir une
            stratégie adaptée et définir des objectifs réalistes. Nous pourrons
            ensuite réaliser un prévisionnel financier sur mesure et un plan
            d’actions personnalisé.
          </p>
        </div>

        {/* 2nd title================ */}
        <div>
          {/* •	Frame 913  */}
          <h1>Et si nous prenions de la hauteur ensemble ?</h1>
          {/* •	Frame 1066 */}
          <p>
            Que ce soit un projet pour une entreprise établie ou en création,
            l’étude de marché vous permettra de prendre du recul et de la
            hauteur sur votre projet afin de vous permettre de vous projeter et
            de prendre les meilleures décisions pour l’avenir.
          </p>
          <p>
            Kibyon vous évitera de tomber dans des biais de confirmation et vous
            apportera d’autres points de vue et axes de réflexions afin d’ouvrir
            le champ des possibles.
          </p>
        </div>
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
        <div className="absolute top-5 z-10"></div>
        <div id="bound-two" className="scroll-bound relative">
          <div className="content">
            <video width="full" muted preload>
              <source src={vid2} type="video/mp4" />
              <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
          </div>
        </div>
      </div>

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

export default Testing;
