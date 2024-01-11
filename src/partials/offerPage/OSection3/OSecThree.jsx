import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./OSecThree.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence/ImageSequence";
import { Link } from "react-router-dom";

const OSecThree = () => {
  const ref = useRef();
  return (
    <div className="h-[2500vh] bg-black relative ">
      <div className="lg:px-20 px-5 text-center ">
        <div className="flex justify-center ">
          <div
            id="market_study"
            className="absolute z-30 text-white flex items-center h-screen"
          >
            {/* <!-- frame - 0---------- --> */}
            <p
              className=" lg:text-5xl text-4xl font-bold mx-5"
              data-aos="zoom-out"
              data-aos-anchor-placement="center-bottom"
            >
              Pourquoi faire une étude de marché ?
            </p>
          </div>
        </div>

        {/* <!-- frame - 72---------- --> */}
        <div className="flex justify-center  lg:justify-start">
          <div className="h-screen absolute top-[100vh] mx-5 lg:mx-0 mt-72 z-20 text-white text-justify">
            <p
              className=" lg:w-[35%]"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              L’étude de marché va vous permettre d’éliminer ou de réduire les
              zones d’incertitudes qui subsistent dans vos différents projets.
              En vous apportant un regard sur les attentes de vos consommateurs
              et une visibilité sur les acteurs déjà en place sur le marché
              concerné.
            </p>
          </div>
        </div>

        {/* <!-- frame - 136  --> */}
        <div className="flex justify-center lg:justify-start">
          <div className="lg:w-[35%] text-justify mx-5 absolute top-[200vh] z-20 text-white">
            <p
              className="my-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Cela vous permettra de cerner les opportunités de marché : est-ce
              que je me lance sur ce marché ? si oui dans quelles conditions ?
            </p>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1200"
            >
              Vous serez également en mesure d’identifier les risques et chances
              de succès. L’étude de marché va vous permettre de mieux connaitre
              l’environnement dans lequel vous évoluez, de vous rassurer sur
              l’orientation à prendre pour maximiser les chances de succès et de
              rassurer également l’ensemble des parties prenantes (associés,
              financeurs, organismes tiers…)
            </p>
          </div>
        </div>

        {/* <!-- frame ---401 --> */}
        <div className="flex justify-center lg:justify-end">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mx-5 lg:w-[35%] absolute top-[300vh]  z-20 text-white text-justify"
          >
            <p>
              L’étude de marché sera votre base de réflexion pour bâtir une
              stratégie adaptée et définir des objectifs réalistes. Nous
              pourrons ensuite réaliser un prévisionnel financier sur mesure et
              un plan d’actions personnalisé.
            </p>
          </div>
        </div>

        {/* <!-- Frame 913  --> */}
        <div className="flex justify-center">
          <div
            className="absolute top-[650vh] z-20 text-white "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h1 className="text-2xl lg:text-3xl font-bold mx-5 lg:mx-0 ">
              Et si nous prenions de la hauteur ensemble ?
            </h1>
          </div>
        </div>

        {/* <!-- frame --- 1066 --> */}
        <div className="flex justify-center  ">
          <div className="mx-5 lg:w-[35%] absolute top-[700vh]  z-20 text-white  text-justify">
            <p className="my-5">
              Que ce soit un projet pour une entreprise établie ou en création,
              l’étude de marché vous permettra de prendre du recul et de la
              hauteur sur votre projet afin de vous permettre de vous projeter
              et de prendre les meilleures décisions pour l’avenir.
            </p>
            <p>
              Kibyon vous évitera de tomber dans des biais de confirmation et
              vous apportera d’autres points de vue et axes de réflexions afin
              d’ouvrir le champ des possibles.
            </p>
          </div>
        </div>

       
        <div className="flex justify-center ">
          <div className="h-[80vh] absolute top-[920vh] z-20 ">
        
          <div className="sticky top-[80vh]">
          <Link to="/contact">
              <button className=" border px-3 py-2 rounded-lg hover: bg-primary text-white hover:scale-105 duration-150">
                Contactez-nous
              </button>
            </Link>
        
           </div>
          </div>
        </div>

        {/* ===================================
  video--2     
  ===================================== */}

      <div>
          {/* <!-- frame - 00 ----------------  --> */}
          <div  className="flex justify-center ">
          <div id="financial_forecast"
            className="  mx-5 lg:mx-0 absolute top-[1030vh] flex items-center h-screen text-white z-20"
          >
            <p  className="font-bold text-2xl lg:text-3xl"   data-aos="zoom-out"
             >
              Qu’est-ce qu’un prévisionnel financier ?
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="mx-5 absolute top-[1120vh] text-white z-20">
            <p
              className="lg:w-[40%] text-justify"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Il est d’usage de dire que le prévisionnel financier est la partie
              financière du business plan. C’est la modélisation chiffrée de
              votre stratégie à 3-5ans. En simplifiant, le prévisionnel
              financier, sera votre boussole qui révèlera les impacts financiers
              à court, moyen et long terme des actions que vous entreprendrez
              pour bâtir votre projet au fil du temps.
            </p>
          </div>
        </div>

        {/* <!-- frame -- 300 --> */}
        <div className="flex justify-center lg:justify-start">
          <div className="mx-5 absolute top-[1180vh] text-left text-white z-20">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" my-5 text-2xl  font-bold"
            >
              Pourquoi faire un prévisionnel financier ?
            </h1>
            <p
              data-aos="fade-up 2xl:text-xl"
              data-aos-anchor-placement="top-bottom"
              className="lg:w-[40%] text-justify"
            >
              Tout d’abord, il est évident qu’il faut déjà le faire pour vous.
              Nous devons étudier votre projet d’un point de vue financier pour
              valider le business model (connaitre sa rentabilité) et pouvoir
              évaluer les perspectives financières et le risque qui en découle.
              Il vous permettra de connaitre les ressources financières
              nécessaires pour mener à bien ce projet.
            </p>
          </div>
        </div>

        {/* ======= */}
        <div className="flex justify-center lg:justify-start">
          <div className="mx-5 lg:w-[50%] absolute top-[1250vh] text-white z-20">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-justify"
            >
              Vous pourrez ensuite vous en servir pour établir vos objectifs et
              garder cet outil de référence tout on long de votre parcours
              entrepreneurial. Croyez-nous, vous apprécierez pouvoir vous y
              rattacher dans les moments mouvementés.
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-justify  my-5"
            >
              Enfin, il a un intérêt certain pour les parties externes afin de
              les aider à appréhender votre projet dans son ensemble, de les
              convaincre de l’opportunité financière et donc attirer de
              potentiels investisseurs. Il est toujours difficile de se projeter
              et de réaliser un prévisionnel, on peut vite se sentir perdu.
            </p>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-justify"
            >
              Avec Kibyon, vous aurez un outil sur mesure clef en main vous
              permettant de réaliser des simulations, des scénarios pour ainsi
              trouver le bon équilibre et une alchimie parfaite entres les
              divers flux qui constituent un prévisionnel financier et les
              contraintes qui s’imposent à vous.
            </p>
          </div>
        </div>

        {/* <!-- frame - 1100 --> */}
        <div className="flex justify-center">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mx-5 absolute top-[1360vh] text-white z-20"
          >
            <h1 className="text-2xl lg:text-3xl text-center font-bold">
              Avec Kibyon, gardez un œil sur l’avenir !
            </h1>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="mx-5 lg:w-[35%] absolute top-[1400vh] text-white z-20">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-justify"
            >
              Il n’est pas toujours aisé de se projeter et de simuler le chiffre
              d’affaires, les dépenses, les investissements etc que vous aurez à
              3 - 5ans. Nous vous proposons des scénarios adaptés et réalistes,
              basés sur des indicateurs pertinents.
            </p>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-justify my-5"
            >
              L’idée est de vous rendre autonome en vous expliquant les tenants
              et aboutissants de l’outil que nous développons pour vous.
            </p>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-justify my-5"
            >
              Ainsi, vous serez en mesure de tirer le maximum de bénéfice du
              prévisionnel financier que nous mettrons à votre disposition et
              pour lequel vous pourrez réaliser de nouveaux scenarios à cours
              moyen et long terme.
            </p>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-justify"
            >
              Nous tenons à faire preuve de pédagogie pour vous permettre
              également d’expliquer les scenarios à de potentiels investisseurs
              ou établissements financier.
            </p>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="h-[200vh] absolute top-[1700vh] z-20 ">
        
          <div className="sticky top-[80vh]">
          <Link to="/contact">
              <button className=" border px-3 py-2 rounded-lg hover: bg-primary text-white hover:scale-105 duration-150">
                Contactez-nous
              </button>
            </Link>
        
           </div>
          </div>
        </div>
      </div>

        {/* ==================================
  video-3
  =========================  */}
        <div>
          <div className="flex justify-center">
            <div
              id="Business_plan"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" absolute top-[2000vh] text-white z-20"
            >
              <h1 className="text-4xl text-center font-bold">
                Qu’est-ce qu’un Business plan ?
              </h1>
            </div>
          </div>

          {/* <!-- Frame 160  --> */}
          <div className="flex justify-center lg:justify-start">
            <div className="mx-5 absolute top-[2050vh] text-white z-20">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="lg:w-[35%] text-justify"
              >
                Contrairement aux idées reçues, on ne fait pas un business plan
                uniquement dans le cadre d’une création d’entreprise mais
                également pour tout projet nouveau au sein de cette dernière. Un
                business plan adapté est de mise pour traduire les projections
                de développement et démontrer la cohérence de votre stratégie à
                360° (R.H, finance, marketing…) quant aux objectifs et à la
                rentabilité du projet. Il s’agit à la fois d’apporter de la
                clarté dans votre projet, savoir précisément dans quelle
                direction vous allez et de quelle façon.
              </p>
            </div>
          </div>
          {/* <!-- frame -- 320 --> */}
          <div className="flex justify-center">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mx-5  absolute top-[2150vh]  text-white z-20"
            >
              <h1 className="text-4xl  font-bold ">
                Pourquoi faire un Business plan ?
              </h1>
            </div>
          </div>

          {/* <!-- Frame 420  --> */}
          <div className="flex justify-center lg:justify-end">
            <div className="lg:w-[35%] mx-5 lg:mx-0 absolute top-[2200vh] text-white text-justify z-20">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="  my-5"
              >
                Réaliser un business plan est avant tout primordial pour vous
                permettre de valider la viabilité de votre projet et de vous
                aider à le structurer en adoptant la meilleure stratégie. C’est
                également un puissant outil incontournable pour convaincre vos
                partenaires et financeurs de la pertinence de votre projet sur
                tous les plans.
              </p>
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Il ne faut donc pas prendre sa rédaction à la légère et savoir
                mettre en avant les atouts du projet tout en montrant que vous
                avez pris en compte les différents risques possibles et que vous
                y êtes préparé.
              </p>
            </div>
          </div>

          {/* <!-- 	Frame 730   --> */}
          <div className="flex justify-center lg:justify-start">
            <div className="lg:w-[30%] mx-5 absolute top-[2400vh] text-white z-20">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-justify "
              >
                Nous vous proposons un business plan sur mesure adapté à votre
                usage et qui correspondra aux attentes de vos partenaires
                (banques, investisseurs, fournisseurs etc.). De par notre
                expertise et notre savoir-faire, nous saurons réaliser le
                business plan qui répond à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Controller>
        <Scene duration="2400%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default OSecThree;
