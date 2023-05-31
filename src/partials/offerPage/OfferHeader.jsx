import React, { useEffect } from "react";
import "./OfferHeader.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import img1 from "../../img/Offre unique/Image 1/Image 1.png";
import img2 from "../../img/Offre unique/Image 2/Image 2.png";
import img3 from "../../img/Offre unique/Image 3/Image 3.png";
import img4 from "../../img/Offre unique/Image 4/Image 4.png";
import img5 from "../../img/Offre unique/Image 5/Image 5.png";
import img6 from "../../img/Offre unique/Image 6/Image 6.png";
import img7 from "../../img/Offre unique/Image 7/image 7 (2).png";

const OfferHeader = () => {
  useEffect(() => {
    const setColor = (currentSlide) => {
      const slides = document.getElementsByClassName("slide");
      const sliderContainer =
        document.getElementsByClassName("slider-container")[0];

      const activeSlide = slides[currentSlide];
      const color = activeSlide.dataset.color;

      sliderContainer.style.background = color;
    };

    const initializeSlider = () => {
      const $yourSlider = $("#your-slider");

      $yourSlider.on("init", (event, slick) => {
        setColor(slick.currentSlide);
      });

      $yourSlider.slick({
        fade: true,
        infinite: true, // Disable infinite loop
        initialSlide: 0, // Set initial slide to 0 (first slide)
      });

      $yourSlider.on(
        "beforeChange",
        (event, slick, currentSlide, nextSlide) => {
          setColor(nextSlide);
        }
      );
    };

    initializeSlider();

    // const autoSlide = setInterval(() => {
    //   const $yourSlider = $("#your-slider");
    //   const currentSlide = $yourSlider.slick("slickCurrentSlide");
    //   const slideCount = $yourSlider.slick("getSlick").slideCount;
    //   const nextSlide = (currentSlide + 1) % slideCount;

    //   $yourSlider.slick("slickGoTo", nextSlide);
    // }, 5000);

    return () => {
      $("#your-slider").slick("unslick");
      // clearInterval(autoSlide);
    };
  }, []);
  return (
    <div className="slider-container grid lg:grid-cols-5 text-white">
      <div className="flex text-center items-center lg:col-span-2 px-8">
        <div>
          <h1 className="text-5xl font-bold my-5">Notre méthode</h1>
          <p>
            Voici un aperçu de notre processus de missions. Cependant, afin de
            vous proposer une offre sur mesure, nous adaptons nos méthodes à
            votre projet, à votre façon de travailler et aux aléas éventuels.
            que nous pourrions rencontrer.
          </p>
        </div>
      </div>

      <div className="lg:col-span-3 flex items-center">
        <div id="your-slider" className="slider">
          <div
            className="slide"
            data-color="linear-gradient(to right, #F44336, #FF9800)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 1 </h3>
              <img src={img1} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">
              1 échange téléphonique pour bien comprendre votre projet 
              </p>
            </div>
          </div>


          <div
            className="slide"
            data-color="linear-gradient(to right, #7E57C2, #2196F3)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 2 </h3>
              <img src={img2} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">Collecte des éléments disponibles du projet et collaboration pour obtenir les éléments manquants </p>
            </div>
          </div>
          <div
            className="slide"
            data-color="linear-gradient(to right, #009688, #4CAF50)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 3 </h3>
              <img src={img3} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">1 proposition commerciale adaptée à votre besoin </p>
            </div>
          </div>
          <div
            className="slide"
            data-color="linear-gradient(to right, #e70ac2, #9C27B0)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 4 </h3>
              <img src={img4} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">Entretiens de travail de plusieurs heures pour structurer le projet et définir les lignes directrices </p>
            </div>
          </div>
          <div
            className="slide"
            data-color="linear-gradient(to right, #1c43b1, #3F51B5)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 5 </h3>
              <img src={img5} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">Plusieurs échanges complémentaires au fil de la mission pour préciser le projet et réfléchir ensemble aux meilleurs choix pour vous </p>
            </div>
          </div>
          <div
            className="slide"
            data-color="linear-gradient(to right, #1c43b1, #3F51B5)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 6 </h3>
              <img src={img6} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">Livrable du projet en pdf et Powerpoint avec accès au fichier source (pour la partie financière notamment) </p>
            </div>
          </div>
          <div
            className="slide"
            data-color="linear-gradient(to right, #1c43b1, #3F51B5)"
          >
            <div>
              <h3 className="text-xl font-bold">Étape 7 </h3>
              <img src={img7} alt="" className="" />
              <p className="bg-[#040c1b] rounded-b-lg p-2">Présentation du projet et collaboration avec vous pour assurer une prise en main complète, favorisant ainsi votre totale indépendance et autonomie </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferHeader;
