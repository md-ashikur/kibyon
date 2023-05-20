import React, { useEffect, useRef } from "react";
import sec5tree from "../../img/Offre unique/Offre unique without background.png";
import sec5Bg from "../../img/Offre unique/Offre unique without object.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OfferSecFive = () => {
  const parallaxRefFive = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRefFive.current;

    const imgElement = parallaxElement.querySelector("img");

    gsap.to(imgElement, {
      yPercent: -10,
      scale: 1.7,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxElement,
        start: "top center",
        end: "bottom center",

        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div id="Unique_offer" className="relative overflow-hidden">
        <div className="card p-8 absolute lg:bottom-32 bottom-10 mx-5 lg:left-52 lg:w-[70%] border border-secondary z-10">
          <h2 className="lg:text-5xl font-bold my-10 text-secondary">
            Qu’est-ce que l’offre unique ?
          </h2>
          <p className=" lg:block lg:text-base text-base-100  text-xs text-justify">
            Exprimez-nous vos difficultés, vos besoins et nous trouverons la
            meilleure façon de vous aider. A travers cette offre nous voulons
            apporter de la flexibilité et ainsi être au plus près de vos
            préoccupations et des problématiques que vous rencontrez. Pour
            autant, si cela sort de notre champ de compétence nous vous en
            ferons part et tenterons de vous orienter vers les experts les plus
            adaptés.
          </p>
        </div>

        <div ref={parallaxRefFive}>
          <img src={sec5tree} alt="" className="w-full absolute" />
          <img src={sec5Bg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default OfferSecFive;
