import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css"


const Footer = () => {
  return (
    <div className="footerbg1 relative">
      <div className="footerbg h-5"></div>

      <footer className="footer grid lg:grid-cols-5 lg:gap-10 px-20 py-20 bg-primary text-base-100 rounded-tl-[150px]">
        <div>
          <span className="font-semibold mb-5 text-4xl text-secondary">
            Kibyon
          </span>
          <p>
            Le nouveau conseil en entreprise pour tous Cabinet de conseil en
            Stratégie d'entreprise et organisation Rencontrons-nous, …. Si
            besoin
          </p>
        </div>

        <div className="lg:px-4">
          <span className="font-semibold text-xl mb-5 text-secondary">
            Contactez-nous
          </span>
          <p className="">
            Rencontrons-nous, à Paris ou Orléans où nous sommes principalement
            basés, et dans toute la france si besoin
          </p>
          <p className="">71 route de la prieurée 45100 Germigny des prés</p>
          <a
            href="mailto:contact@kibyon.fr"
            className="border-b-2 border-secondary"
          >
            contact@kibyon.fr
          </a>
          <a href="tel:+33 (0)645142367" className="">
            +33 (0)645142367
          </a>
        </div>

        <div className="">
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
            to="/offer"
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
            to="/about"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            A propos de Kibyon
          </Link>
          <Link
            to="/legal"
            className="hover:scale-110 hover:pl-5 duration-150 hover:text-secondary"
          >
            mentions légales
          </Link>
        </div>
        <div className="lg:col-span-2">
          <span className="font-semibold mb-5 text-xl text-secondary">
            Rejoignez notre communauté
          </span>
          <div className="flex gap-5 text-2xl my-4">
            <a
              href="/"
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsInstagram />
            </a>
            <a
              href="/"
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsFacebook />
            </a>
            <a
              href="/"
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsLinkedin />
            </a>
            <a
              href="/"
              className="hover:scale-125 duration-150 hover:text-secondary"
            >
              <BsTwitter />
            </a>
          </div>
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
