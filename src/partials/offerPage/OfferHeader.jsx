import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Import Swiper styles


import "./OfferHeader.css";
import img1 from "../../img/Offre unique/Image 1/image 1.jpg";
import img2 from "../../img/Offre unique/Image 2/Image 2.png";
import img3 from "../../img/Offre unique/Image 3/image 3.png";
import img4 from "../../img/Offre unique/Image 4/image 4.png";
import img5 from "../../img/Offre unique/Image 5/image 5.png";
import img6 from "../../img/Offre unique/Image 6/image 6.png";
import img7 from "../../img/Offre unique/Image 7/image 7 (2).png";

const OfferHeader = () => {
 

  return (
    <div className="h-screen bg-black px-20 text-center">
   
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
          modifier: 3,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 1 </h3>
              <img src={img1} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 2 </h3>
              <img src={img2} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 3 </h3>
              <img src={img3} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 4 </h3>
              <img src={img4} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 5 </h3>
              <img src={img5} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 6 </h3>
              <img src={img6} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-white">
              <h3 className="text-xl font-bold">Étape 7</h3>
              <img src={img7} alt="" className="" />
              <p className="text-xs bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
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
          <div className="swiper-pagination"></div>
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
