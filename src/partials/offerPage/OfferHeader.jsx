import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Import Swiper styles


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
    <div className="h-screen bg-black lg:px-20 text-center">
   
        <div>
          <h1 className="text-3xl text-center pt-10 font-bold text-white">Notre méthode</h1>
         
        </div>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        spaceBetween={150}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container text-white"
      >


        <SwiperSlide>
        <div className="rounded-lg  bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
              <h3 className="text-xl font-bold pt-3">Étape 1 </h3>
              <img src={img1} alt="" className="" />
              <p className="text-xs bg-gradient-to-t from-sky-800  to-sky-500  rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <h3 className="text-xl font-bold pt-3">Étape 2 </h3>
             <div className="h-[280px] overflow-hidden">
             <img src={img2} alt="" className="" />
             </div>
              <p className="text-xs rounded-b-lg p-2">
              Collecte des éléments disponibles du projet et collaboration pour obtenir les éléments manquants 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <h3 className="text-xl font-bold pt-3">Étape 3 </h3>
              <img src={img3} alt="" className="" />
              <p className="text-xs  rounded-b-lg p-3">
              1 proposition commerciale adaptée à votre besoin  
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <h3 className="text-xl font-bold pt-3">Étape 4 </h3>
              <img src={img4} alt="" className="" />
              <p className="text-xs rounded-b-lg p-2">
              Entretiens de travail de plusieurs heures pour structurer le projet et définir les lignes directrices 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <h3 className="text-xl font-bold pt-3">Étape 5 </h3>
              <img src={img5} alt="" className="" />
              <p className="text-xs  rounded-b-lg p-2">
              Plusieurs échanges complémentaires au fil de la mission pour préciser le projet et réfléchir ensemble aux meilleurs choix pour vous 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <h3 className="text-xl font-bold pt-3">Étape 6 </h3>
              <img src={img6} alt="" className="" />
              <p className="text-xs  rounded-b-lg p-2">
              Livrable du projet en pdf et Powerpoint avec accès au fichier source (pour la partie financière notamment) 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-lg bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <h3 className="text-xl font-bold pt-3">Étape 7</h3>
              <div className="h-[280px] overflow-hidden">
             <img src={img7} alt="" className="" />
             </div>
              <p className="text-xs  rounded-b-lg p-2">
              Présentation du projet et collaboration avec vous pour assurer une prise en main complète, favorisant ainsi votre totale indépendance et autonomie
              </p>
            </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination "></div>
        </div>
      </Swiper>


      <p className="text-center text-white py-8">
            Voici un aperçu de notre processus de missions. Cependant, afin de
            vous proposer une offre sur mesure, nous adaptons nos méthodes à
            votre projet, à votre façon de travailler et aux aléas éventuels.
            que nous pourrions rencontrer.
          </p>
    </div>
  );
};

export default OfferHeader;
