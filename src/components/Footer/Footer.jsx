import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-secondary relative">
      <div className="bg-secondary h-5"></div>

      <footer className="footer  grid lg:grid-cols-9 lg:gap-10 lg:px-20 px-16 py-20 bg-primary text-base-100 rounded-tl-[150px]">
        <div className="lg:col-span-2 ">
          <Link to="/" className="font-semibold  text-secondary">
           <p className="-mt-6 text-5xl">KIBYON</p>
          </Link>
          <p className="mt-5">
            Cabinet de conseil innovant en stratégie d’entreprise et en
            organisation
          </p>
          <p className="my-5">Ensemble, réalisons vos projets !</p>
        </div>

        <div className="lg:px-4 flex flex-col lg:col-span-2">
          <span className="font-semibold text-xl mb-5 text-secondary">
            Contactez-nous
          </span>
          <p className="text-justify">
            Prêt à propulser votre entreprise vers le succès ? Contactez-nous
            dès maintenant.
          </p>
          <p className="mt-3">
            71 route de la prieurée 45110 Germigny des prés
          </p>
          <a
            href="mailto:contact@kibyon.fr"
            className="border-b-2 border-secondary pb-2 hover:text-secondary"
          >
            contact@kibyon.fr
          </a>
          <a href="tel:0780989762" className="mb-5 hover:text-secondary">
           07 80 98 97 62
          </a>
        </div>

        <div className="flex flex-col lg:col-span-2">
          <span className="font-semibold mb-5 text-xl text-secondary">
            Navigation
          </span>
          <Link
            to="/"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            Accueil
          </Link>
          <Link
            to="/offres"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            Nos offres
          </Link>
          <Link
            to="/contact"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            Contact
          </Link>
          <Link
            to="/à-propos"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            Á propos de Kibyon
          </Link>
          <Link
            to="/legal"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            Mentions légales
          </Link>
          <Link
            to="/politique"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            Politique de confidentialité
          </Link>
          <Link
            to="/credits"
            className="hover:scale-110 hover:pl-5 mb-5 duration-150 hover:text-secondary"
          >
            Crédits
          </Link>
        </div>

        <div className="lg:col-span-3">
          <span className="font-semibold mb-5 text-xl text-secondary">
            Rejoignez notre communauté
          </span>
          <div className="flex gap-5 text-3xl  my-4">
            <a
            target="_blank"
              href="https://www.instagram.com/kibyon/"
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61550736725454 "
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/kibyon/"
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsLinkedin />
            </a>
           
          </div>
          <p className="mt-10">
            Rendons le conseil accessible et adapté à chacun. 
          </p>
          <p>
          Ensemble, bâtissons les entreprises de demain.
          </p>
        </div>
      </footer>
      <div className="bg-primary">
        <div className="border-t mx-20"></div>
      </div>
      <footer className="items-center justify-center flex px-10 py-4 bg-primary text-base-100">
        <p>Kibyon © {new Date().getFullYear()} - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
