import React from "react";
import shoe from "../../../img/Welcome page/shoes.png";
import plane from "../../../img/Welcome page/plane.png";
import hand from "../../../img/Welcome page/hand.png";
import map from "../../../img/Welcome page/map.png";
import welcomeBg from "../../../img/intro welcome page background.png";
import "./HSecOne.css";

const HSecOne = () => {
  return (
    <div>
      <div className=" relative w-[100vw] ">
        <div className="h-screen w-full">
          <img
            src={welcomeBg}
            alt=""
            draggable={false}
            className="object-cover lg:object-none h-full lg:h-screen lg:w-full"
          />
        </div>

        <div className="flex justify-center text-8xl text-[#0120aa] opacity-50 font-black  ">
          <div className="text-animation absolute top-[10vh] z-50 cursor-default  h-28">
            <span>K</span>
            <span>I</span>
            <span>B</span>
            <span>Y</span>
            <span>O</span>
            <span>N</span>
          </div>
        </div>

        <div className="flex absolute bottom-1 ">
          {/* shoes================= */}
          <a href="#shoe">
            <div className="relative lg:-top-40 -top-80 lg:left-20 left-10 lg:scale-50 scale-[2] lg:hover:scale-100 duration-150">
              <div className="shoemodel z-20">
                <img src={shoe} alt="" className="" />
              </div>
              <div className="texthover absolute z-10 flex items-center justify-center">
                <p className="text-white lg:text-sm text-xs font-bold">
                  Choisir Kibyon, c’est oser avancer
                </p>
              </div>
            </div>
          </a>

          {/* plane================== */}
          <a href="#plane">
            <div className="relative lg:-top-6 -top-80 lg:left-10 left-44 lg:scale-50 scale-[1.6] lg:hover:scale-100 duration-150 ">
              <img src={plane} alt="" className="planemodel" />
              <div className="  planeText z-10 flex items-center justify-center">
                <p className="text-white text-sm -mt-20 font-bold">
                  Et si on avançait ensemble ?
                </p>
              </div>
            </div>
          </a>
          {/* =======hand============= */}
          <a href="#hand">
            <div className="relative lg:-top-16 -top-28 lg:right-10 -right-10 lg:scale-50 scale-[1.7] lg:hover:scale-95  duration-150">
              <img src={hand} alt="" className="handmodel " />
              <div className="handText z-10 flex items-center justify-center">
                <p className="text-white text-sm -mt-10 font-bold">
                  Un conseil personnalisé et adapté
                </p>
              </div>
            </div>
          </a>
          {/* map============== */}
          <a href="#map">
            <div className="relative lg:-top-40 -top-28 lg:right-28 right-56 lg:scale-50 scale-[1.4] lg:hover:scale-100 duration-150">
              <img src={map} alt="" className="mapmodel" />
              <div className="   mapText z-10 flex items-center justify-center">
                <p className="text-white text-sm -mt-10 font-bold">
                  Pour répondre à vos besoins
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* wave-1----------------- */}
        <div className="z-20  -mt-20 overflow-hidden">
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
    </div>
  );
};

export default HSecOne;
