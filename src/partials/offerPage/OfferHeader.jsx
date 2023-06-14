import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';


import "./OfferHeader.css";
import img1 from "../../img/Offre unique/Image 1/Image 1.png";
import img2 from "../../img/Offre unique/Image 2/Image 2.png";
import img3 from "../../img/Offre unique/Image 3/image 3.png";
import img4 from "../../img/Offre unique/Image 4/image 4.png";
import img5 from "../../img/Offre unique/Image 5/image 5.png";
import img6 from "../../img/Offre unique/Image 6/image 6.png";
import img7 from "../../img/Offre unique/Image 7/image 7 (2).png";

const OfferHeader = () => {
 

  return (
    <div className="h-auto bg-black lg:p-20 text-center">
   
        <div>
          <h1 className="lg:text-4xl text-2xl text-center py-10 font-bold text-white">Notre méthode</h1>
         
        </div>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerGroup={1}
        slidesPerView="auto"
        spaceBetween={170}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container  text-white"
      >


        <SwiperSlide>
        <div className="rounded-lg  bg-gradient-to-t from-[#080E1A]  to-[#1A3D5F]  ">
              <h3 className="text-lg font-bold pt-3">Étape 1 </h3>
              <img src={img1} alt="" className="" />
              <p className="text-xs bg-[#080E1A] text-justify  rounded-b-lg p-3">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-[#9F3936] to-[#E3A272]">
              <h3 className="text-lg font-bold pt-3">Étape 2 </h3>
             <div className="h-[280px] overflow-hidden">
             <img src={img2} alt="" className="" />
             </div>
              <p className="text-xs bg-[#9F3936] text-justify  rounded-b-lg p-3">
              Collecte des éléments disponibles du projet et collaboration pour obtenir les éléments manquants 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-[#A49580] to-[#EBECEC]">
              <h3 className="text-lg font-bold pt-3">Étape 3 </h3>
              <img src={img3} alt="" className="" />
              <p className="text-xs bg-[#A49580] text-justify  rounded-b-lg p-3">
              1 proposition commerciale adaptée à votre besoin  
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-[#434551] to-[#E9D0BF]">
              <h3 className="text-lg font-bold pt-3">Étape 4 </h3>
              <img src={img4} alt="" className="" />
              <p className="text-xs bg-[#161A26] text-justify  rounded-b-lg p-3">
              Entretiens de travail de plusieurs heures pour structurer le projet et définir les lignes directrices 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t to-[#076167] from-[#000000] to-90%">
              <h3 className="text-lg font-bold pt-3">Étape 5 </h3>
              <img src={img5} alt="" className="" />
              <p className="text-xs bg-[#01191a] text-justify  rounded-b-lg p-3">
              Plusieurs échanges complémentaires au fil de la mission pour préciser le projet et réfléchir ensemble aux meilleurs choix pour vous 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-[#678CA7] to-[#B4CEDB] to-90%">
              <h3 className="text-lg font-bold pt-3">Étape 6 </h3>
              <img src={img6} alt="" className="" />
              <p className="text-xs bg-[#678CA7] text-justify  rounded-b-lg p-3">
              Livrable du projet en pdf et Powerpoint avec accès au fichier source (pour la partie financière notamment) 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-[#27445A] to-[#4D9FA9]">
              <h3 className="text-lg font-bold pt-3">Étape 7</h3>
              <div className="h-[280px] overflow-hidden">
             <img src={img7} alt="" className="" />
             </div>
              <p className="text-xs bg-[#27445A] text-justify  rounded-b-lg p-3">
              Présentation du projet et collaboration avec vous pour assurer une prise en main complète, favorisant ainsi votre totale indépendance et autonomie
              </p>
            </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="prev text-3xl slider-arrow ">
           <BsArrowLeftShort/>
          </div>
          <div className="next text-3xl slider-arrow ">
            <BsArrowRightShort/>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>


      <div className="flex justify-center py-10">
      <p className="text-center lg:w-[60%] w-[80%] text-white text-sm">
            Voici un aperçu de notre processus de missions. Cependant, afin de
            vous proposer une offre sur mesure, nous adaptons nos méthodes à
            votre projet, à votre façon de travailler et aux aléas éventuels.
            que nous pourrions rencontrer.
          </p>
      </div>
    </div>
  );
};

export default OfferHeader;
