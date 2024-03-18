import React, { useRef } from "react";
import { ImLocation2, ImMobile } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import "./ContactBody.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactBody = () => {

  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_grck269', 'template_0seduj2', form.current, 'pp_-UYRZf5K43m3Um')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
      toast.success('Merci de nous avoir contacté, votre email a été envoyé avec succès.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
  }

  return (
    <div>
      <div className=" bg-secondary lg:h-auto relative py-10 flex justify-center">
       <div className=" max-w-[1500px]">
       <div className="text-center flex  items-center flex-col text-base-100">
          <h1
            data-aos="fade-down"
            className="lg:text-5xl text-3xl font-bold py-2"
          >
            Contactez-nous
          </h1>
          <p
            data-aos="fade-down"
            data-aos-duration="1500"
            className="p-2 max-w-[750px] text-lg"
          >
            Concrétisez vos projets avec Kibyon ! Si vous avez une question, une demande particulière ou pour tout autre besoin contactez-nous. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:px-20 px-5 py-10 mt-10 overflow-hidden">
          {/* -----------------
        contact info side start
        ---------------- */}

          <div className="text-base-100 ">
            {/* =====================Pourquoi nous contacter=============================     */}
            <div className="flex gap-5  mb-5" data-aos="fade-right">
              <div>
                <BsCheckAll className="text-5xl text-primary w-16 h-16 p-3 bg-base-100 rounded-full" />
              </div>
              <div>
                <h3 className="lg:text-3xl text-2xl font-bold">
                  Pourquoi nous contacter ?
                </h3>
                <p className="text-justify lg:pr-16 max-w-[600px]">
                  Bénéficiez de l'expertise de notre équipe passionnée pour
                  transformer vos idées en succès concret. Profitez d'un premier
                  échange gratuit et sans engagement pour comprendre pourquoi
                  notre accompagnement personnalisé fera toute la différence
                  dans votre parcours entrepreneurial. Faites le premier pas
                  vers un avenir prometteur en nous contactant dès maintenant !
                  Votre futur et celui de vos projets s’écrivent dès aujourd’hui, ensemble donnons vie à votre vision. 
                </p>
              </div>
            </div>

            {/* ==========================Adresse========================= */}

            <div
              className="flex gap-5 items-center my-5"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <div className="w-16 h-16 p-3 bg-white rounded-full flex items-center justify-center">
                <ImLocation2 className="text-5xl text-primary z-10" />
              </div>

              <div>
                <h3 className="lg:text-3xl text-2xl font-bold">Adresse</h3>
                <p>71 route de la prieurée, 45110 Germigny-des-prés</p>
              </div>
            </div>
            {/* ==========================N° de télépohne========================= */}

            <div
              className="flex gap-5 items-center my-5"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1200"
            >
              <ImMobile className="text-5xl text-primary w-16 h-16 p-3 bg-base-100 rounded-full" />
              <div>
                <h3 className="lg:text-3xl text-2xl font-bold">
                  N° de téléphone
                </h3>
                <p><a href="tel:0780989762">07 80 98 97 62</a></p>
              </div>
            </div>
            {/* ==========================Mail========================= */}

            <div
              className="flex gap-5 items-center"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1500"
            >
              <MdAlternateEmail className="text-5xl text-primary w-16 h-16 p-3 bg-base-100 rounded-full" />
              <div>
                <h3 className="lg:text-3xl text-2xl font-bold">Mail</h3>
                <p> <a href="mailto:contact@kibyon.fr">contact@kibyon.fr</a></p>
              
              </div>
            </div>
          </div>  
          
          {/* -----------------
        contact info side start
        ---------------- */}

          {/* ------------------------
        contact form side
        ------------------- */}
          <div
            className="bg-base-100 px-10 py-16 rounded-lg  max-w-[600px]"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="text-3xl font-semibold pb-8">Envoyer un message</h2>

            <form ref={form} onSubmit={sendEmail} className="contactForm">
              {/* name---------- */}
              <div className="relative inputBox">
                <input
                  className="border-b-2 "
                  required="required"
                  type="text"
                  name="name"
                />
                <span>NOM*</span>
              </div>
              {/* sure name------------ */}
              <div className="relative inputBox">
                <input
                  className="border-b-2 "
                  required="required"
                  type="text"
                  name="surename"
                />
                <span>Prénom*</span>
              </div>
              {/* ----email-------------------------- */}
              <div className="inputBox relative my-3">
                <input
                  className="border-b-2 "
                  required="required"
                  type="email"
                  name="email"
                />
                <span className="my-5">Adresse Mail*</span>
              </div>
              {/* ----number-------------------------- */}
              <div className="inputBox relative my-3">
                <input
                  className="border-b-2 "
                  
                  type="tel"
                  name="phone"
                />
                <span className="my-5 !text-[#666]">Numéro de téléphone</span>
              </div>
              {/* ------------------------------------ */}
              <div className="inputBox relative my-3">
                <textarea
                  className="border-b-2 "
                  required="required"
                  type="text"
                  name="message"
                />
                <span>Ecrivez votre message ici...*</span>
              </div>
              {/* ------------------------------------ */}
              <input
                type="submit"
                value="Envoyer"
                className="cursor-pointer w-full bg-primary hover:bg-secondary hover:scale-105 duration-150 p-3 rounded-lg hover:text-white text-white duration-500  hover:text-secondary font-semibold  hover:border hover:border-secondary"
              />
            </form>
          </div>
        </div>
       </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ContactBody;
