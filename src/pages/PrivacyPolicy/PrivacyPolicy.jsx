import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../partials/Header";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="lg:px-20 px-5 lg:my-20 my-10 text-justify">
        <h1 className="text-center text-secondary lg:text-5xl text-3xl font-bold mb-20">
          Politique de Confidentialité
        </h1>

        <section>
          <h3 className="lg:text-xl my-5">
            <span className="font-bold ">Dernière mise à jour :</span>{" "}
            [01/01/2024]
          </h3>
          <p>
            Le respect de la confidentialité de nos clients et de leurs
            informations est au cœur de notre engagement en tant que cabinet de
            conseil en stratégie d'entreprise. Cette politique de
            confidentialité vise à vous informer sur la manière dont nous
            collectons, utilisons, divulguons et protégeons vos informations
            personnelles. En utilisant nos services, vous consentez à cette
            politique de confidentialité.
          </p>
        </section>
        {/* --------ARTICLE 1 : PRÉAMBULE  ----------- */}
        <section>
          <h3 className="lg:text-2xl my-5 text-secondary font-bold">
            ARTICLE 1 : PRÉAMBULE{" "}
          </h3>
          <p className="my-5 font-bold">
            La présente politique de confidentialité a pour but d’informer les
            utilisateurs du site :
          </p>

          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>
              Sur la manière dont sont collectées leurs données personnelles.
              Sont considérées comme des données personnelles, toute information
              permettant d’identifier un utilisateur. A ce titre, il peut s’agir
              : de ses noms et prénoms, de son âge, de son adresse postale ou
              email, de sa localisation (liste non-exhaustive) ;
            </li>

            <li>Sur les droits dont ils disposent concernant ces données ; </li>
            <li>
              Sur la personne responsable du traitement des données à caractère
              personnel collectées et traitées ;
            </li>
            <li>Sur les destinataires de ces données personnelles ; </li>
            <li>Sur la politique du site en matière de cookies. </li>
          </ul>
          <p className="my-5 font-bold">
            Cette politique complète les mentions légales et les Conditions
            Générales de vente consultables par les utilisateurs à l’adresse
            suivante :
          </p>

          <Link to="/legal" className="text-secondary">
            https://kibyon.fr/legal
          </Link>
        </section>

        {/* ------ARTICLE 2--------- */}
        <section className="my-10">
          <h3 className="lg:text-2xl my-5 text-secondary font-bold">
            ARTICLE 2 : PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES
            DONNÉES PERSONNELLES{" "}
          </h3>
          <p className="my-5 font-bold">
            Conformément à l’article 5 du Règlement européen 2016/679, les
            données à caractère personnel sont :{" "}
          </p>

          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>
              Traitées de manière licite, loyale et transparente au regard de la
              personne concernée ;{" "}
            </li>
            <li>
              Collectées pour des finalités déterminées (cf. Article 3.1 des
              présentes), explicites et légitimes, et ne pas être traitées
              ultérieurement d'une manière incompatible avec ces finalités ;{" "}
            </li>
            <li>
              Adéquates, pertinentes et limitées à ce qui est nécessaire au
              regard des finalités pour lesquelles elles sont traitées ;{" "}
            </li>
            <li>
              Exactes et, si nécessaire, tenues à jour. Toutes les mesures
              raisonnables doivent être prises pour que les données à caractère
              personnel qui sont inexactes, eu égard aux finalités pour
              lesquelles elles sont traitées, soient effacées ou rectifiées sans
              tarder ;{" "}
            </li>
            <li>
              Conservées sous une forme permettant l'identification des
              personnes concernées pendant une durée n'excédant pas celle
              nécessaire au regard des finalités pour lesquelles elles sont
              traitées ;{" "}
            </li>
            <li>
              Traitées de façon à garantir une sécurité appropriée des données
              collectées, y compris la protection contre le traitement non
              autorisé ou illicite et contre la perte, la destruction ou les
              dégâts d'origine accidentelle, à l'aide de mesures techniques ou
              organisationnelles appropriées.{" "}
            </li>
          </ul>

          <p className="my-5 font-bold">
            Le traitement n'est licite que si, et dans la mesure où, au moins
            une des conditions suivantes est remplie :{" "}
          </p>

          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>
              La personne concernée a consenti au traitement de ses données à
              caractère personnel pour une ou plusieurs finalités spécifiques ;
            </li>
            <li>
              Le traitement est nécessaire à l'exécution d'un contrat auquel la
              personne concernée est partie ou à l'exécution de mesures
              précontractuelles prises à la demande de celle-ci ;{" "}
            </li>
            <li>
              Le traitement est nécessaire au respect d'une obligation légale à
              laquelle le responsable du traitement est soumis ;{" "}
            </li>
            <li>
              Le traitement est nécessaire à la sauvegarde des intérêts vitaux
              de la personne concernée ou d'une autre personne physique ;{" "}
            </li>
            <li>
              Le traitement est nécessaire à l'exécution d'une mission d'intérêt
              public ou relevant de l'exercice de l'autorité publique dont est
              investi le responsable du traitement ;{" "}
            </li>
            <li>
              Le traitement est nécessaire aux fins des intérêts légitimes
              poursuivis par le responsable du traitement ou par un tiers, à
              moins que ne prévalent les intérêts ou les libertés et droits
              fondamentaux de la personne concernée qui exigent une protection
              des données à caractère personnel.{" "}
            </li>
          </ul>
        </section>

        {/* ------------ARTICLE 3 ----------- */}
        <section className="my-10">
          <h3 className="lg:text-2xl my-5 text-secondary font-bold">
            ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES
            DANS LE CADRE DE LA NAVIGATION SUR LE SITE{" "}
          </h3>
          {/* Article 3.1 ----------------- */}
          <h4 className="lg:text-lg my-5 text-secondary font-bold">Article 3.1 : Données collectées </h4>
          <p className="font-bold my-5">
            Les données personnelles collectées dans le cadre de notre activité
            sont les suivantes :{" "}
          </p>
          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>
              Informations d'identification (Nom, prénom, adresse e-mail, numéro
              de téléphone…)
            </li>
            <li>
              L’objet de votre sollicitation (Quel est votre projet, votre
              situation…)
            </li>
            <li>Votre navigation sur notre site</li>
          </ul>

          <p className="font-bold my-5">
            La collecte et le traitement de ces données répond à la (aux)
            finalité(s) suivante(s) :{" "}
          </p>

          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>Gestion de contrat </li>
            <li>Gestion des prospects </li>
            <li>Suivi client</li>
            <li>Suivi et amélioration de la qualité des services</li>
            <li>Amélioration de la performance de Kibyon</li>
          </ul>

          {/* Article 3.2 -------------- */}
          <h4 className="lg:text-lg my-5 text-secondary font-bold">Article 3.2 : Mode de collecte des données </h4>
          <p className="font-bold my-5">
            Lorsque vous utilisez notre site, sont automatiquement collectées
            les données suivantes :{" "}
          </p>
          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>Votre navigation sur notre site</li>
          </ul>

          <p className="font-bold my-5">
            D’autres données personnelles sont collectées lorsque vous effectuez
            les opérations suivantes sur la plateforme :{" "}
          </p>

          <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>Vous remplissez un formulaire de contact</li>
          </ul>
          <p className="mt-5">
            Elles sont conservées par le responsable du traitement dans des
            conditions raisonnables de sécurité, pour une durée de : 3 ans.{" "}
          </p>

          <p>
            La société est susceptible de conserver certaines données à
            caractère personnel au-delà des délais annoncés ci-dessus afin de
            remplir ses obligations légales ou réglementaires.{" "}
          </p>

          {/* Article 3.3 ---------------- */}
          <h4 className="lg:text-lg my-5 text-secondary font-bold">Article 3.3 : Hébergement des données </h4>
          <p>
            Le site{" "}
            <Link to="/" className="text-secondary">
              www.kibyon.fr
            </Link>{" "}
            est hébergé par : HOSTINGER INTERNATIONAL LTD Adresse du siège
            social : HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023
            Larnaca, Chypre.
          </p>
          <p>Contact : fr@hostinger.com</p>
        </section>

{/* -----ARTICLE 5---------- */}
        <section className="my-10">
            <h3 className="lg:text-2xl my-5 text-secondary font-bold">ARTICLE 5 : LES DROITS DE L’UTILISATEUR EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DES DONNÉES  </h3>
            <p className="font-bold my-5">Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978) :   </p>

            <ul className="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
            <li>Droit d’accès, de rectification et droit à l’effacement des données (posés respectivement aux articles 15, 16 et 17 du RGPD) ;  </li>
            <li>Droit à la portabilité des données (article 20 du RGPD) ; </li>
            <li>Droit à la limitation (article 18 du RGPD) et à l’opposition du traitement des données (article 21 du RGPD) ;  </li>
            <li>Droit de ne pas faire l’objet d’une décision fondée exclusivement sur un procédé automatisé ; </li>
            <li>Droit de déterminer le sort des données après la mort ;  </li>
            <li>Droit de saisir l’autorité de contrôle compétente (article 77 du RGPD).  </li>
          </ul>

          <p className="mt-5">Pour exercer vos droits, veuillez adresser votre requête par mail à contact@kibyon.fr</p>

          <p>Afin que le responsable du traitement des données puisse faire droit à sa demande, l’utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms et son adresse e-mail.</p>

          <p className="mt-5">Consultez le site cnil.fr pour plus d’informations sur vos droits. </p>
        </section>



        {/* ARTICLE 6------------- */}
        <section className="my-10">
            <h3  className="lg:text-2xl my-5 text-secondary font-bold">ARTICLE 6 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ </h3>

            <p>L’éditeur du site Kibyon.fr se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d’assurer aux utilisateurs du site sa conformité avec le droit en vigueur.  </p>
            <p className="my-3">Les éventuelles modifications ne sauraient avoir d’incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l’achat et telle qu’acceptée par l’utilisateur lors de la validation de l’achat.  </p>

            <p>L’utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en prévenir formellement.  </p>

            <p>La présente politique, mise en ligne le <span className="font-bold ">10/01/2024</span> a été mise à jour le <span className="font-bold ">01/01/2024</span>.</p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
