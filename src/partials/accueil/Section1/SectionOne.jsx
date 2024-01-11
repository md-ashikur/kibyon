import React from "react";
import hvideo from "../../../Videos/Presentation Kibyon last version.mp4";
import hvideothum from "../../../img/hvideo.png";
import { Link } from "react-router-dom";
const SectionOne = () => {
  return (
    <div className="">
      <div className="bg-secondary text-white lg:px-20 px-5 py-7">
        <div className="flex flex-col justify-center items-center">
         <div className="max-w-[1300px]">
         <h1
            data-aos="fade-down"
            className="lg:text-5xl text-4xl my-10 text-center font-bold"
          >
            Bienvenue chez Kibyon
          </h1>
          <p
            data-aos="fade-down"
            data-aos-duration="1500"
            className="lg:text-xl 2xl:text-2xl text-justify"
          >
            Kibyon, spécialisé dans la création et le développement de votre
            entreprise. Engagés à vos côtés, nous offrons des conseils sur
            mesure pour vous accompagner vers le succès.
          </p>
         </div>
        </div>
        {/* mobile */}
        <h2
          data-aos="fade-left"
          data-aos-duration="1500"
          className="font-semibold lg:text-3xl text-2xl my-10 text-center lg:hidden block"
        >
          Découvrez qui nous sommes en moins de 2min !
        </h2>

        {/* <div className="flex justify-center">
        <div className="lg:grid grid-cols-3 my-10 gap-5">
          <div data-aos="fade-right" data-aos-duration="1500">
            <video
              className="min-w-[100%] max-w-[350px] h-full  rounded-[40px]"
              poster={hvideothum}
              controls
            >
              <source src={hvideo} type="video/mp4" />
              Error Message
            </video>
          </div>
          <div className="col-span-2 lg:pl-14 ">
            <h2
              data-aos="fade-left"
              data-aos-duration="1500"
              className="font-semibold 2xl:text-4xl lg:text-3xl text-center hidden lg:block"
            >
              Découvrez qui nous sommes en moins de 2min !
            </h2>

            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="my-5 text-justify lg:text-lg 2xl:text-2xl"
            >
              Plongez dans l'avenir avec Kibyon ! Notre vidéo de présentation,
              créée entièrement avec l'I.A, vous dévoile qui nous sommes et ce
              que nous faisons. Nous avons combiné différents outils pour vous
              offrir un aperçu de notre approche révolutionnaire en matière de
              conseil en entreprise.
            </p>

            <p
              className="lg:text-lg text-justify 2xl:text-2xl"
              data-aos="fade-left"
              data-aos-duration="2200"
            >
              Contactez-nous pour découvrir l'innovation du conseil en action !
            </p>

            <div className="flex mt-10 font-semibold justify-center lg:text-lg">
              <div className="flex"> 
                <Link to="/contact">
               
                  <button className="border-2 px-5 py-2 rounded-full hover:bg-primary  hover:scale-105 duration-150 lg:mr-5 mr-3">
                    Contactez-nous
                  </button>
                </Link>
                <Link to="/offres">
                  <button className="border-2 px-5 py-2 rounded-full hover:bg-primary  hover:scale-105 duration-150 w-40 ">
                    Nos offres
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div> */}

        {/* ============================= */}
        <div className="relative  overflow-hidden flex items-end justify-center">
          <div className="lg:pt-20 max-w-[1300px] grid lg:grid-cols-3 ">
            <div className="flex justify-center ">
              <div
                className="w-full "
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <video
                 
                  className="rounded-[40px]"
                  poster={hvideothum}
                  controls
                >
                  <source src={hvideo} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="lg:pl-14 lg:col-span-2 lg:pl-14 ">
              <h2
                data-aos="fade-left"
                data-aos-duration="1500"
                className="font-semibold 2xl:text-4xl lg:text-3xl text-center hidden lg:block"
              >
                Découvrez qui nous sommes en moins de 2min !
              </h2>

              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                className="my-5 text-justify lg:text-lg 2xl:text-2xl"
              >
                Plongez dans l'avenir avec Kibyon ! Notre vidéo de présentation,
                créée entièrement avec l'I.A, vous dévoile qui nous sommes et ce
                que nous faisons. Nous avons combiné différents outils pour vous
                offrir un aperçu de notre approche révolutionnaire en matière de
                conseil en entreprise.
              </p>

              <p
                className="lg:text-lg text-justify 2xl:text-2xl"
                data-aos="fade-left"
                data-aos-duration="2200"
              >
                Contactez-nous pour découvrir l'innovation du conseil en action
                !
              </p>

              <div className="flex mt-10 font-semibold justify-center lg:text-lg">
                <div className="flex">
                  <Link to="/contact">
                    <button className="border-2 px-5 py-2 rounded-full hover:bg-primary  hover:scale-105 duration-150 lg:mr-5 mr-3">
                      Contactez-nous
                    </button>
                  </Link>
                  <Link to="/offres">
                    <button className="border-2 px-5 py-2 rounded-full hover:bg-primary  hover:scale-105 duration-150 w-40 ">
                      Nos offres
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-secondary"></div>
      {/* wave-1----------------- */}
      <div className="z-20 bg-secondary overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="2000" // Increase the width value here
          height="85"
        >
          <defs>
            <path
              id="wave"
              d="m-115,50q38-30 75,0t75,0 75,0 75,0
    75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0
    v20 h-1540 v-20"
            />
            <clipPath id="wave-clip-front">
              <use className="wave wave-front" xlinkHref="#wave" />
              <rect x="0" y="70" width="100%" height="100%" />
            </clipPath>
            <rect id="clipped-wave" x="0" y="0" width="100%" height="100%" />
          </defs>

          <use
            xlinkHref="#clipped-wave"
            clipPath="url(#wave-clip-front)"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
      {/* wave end-------------------- */}
    </div>
  );
};

export default SectionOne;
