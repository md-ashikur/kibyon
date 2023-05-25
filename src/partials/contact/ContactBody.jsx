import React from 'react';
import { ImLocation2, ImMobile } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import { useForm } from "react-hook-form";
import "./ContactBody.css";

const ContactBody = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
    return (
        <div>
             <div className=" bgPic lg:h-auto relative py-10">
      <div className="text-center flex  items-center flex-col text-base-100">
        <h1 data-aos="fade-down" className="lg:text-5xl text-3xl font-bold py-3">Contactez-nous</h1>
        <p data-aos="fade-down" data-aos-duration="1500" className="p-3 max-w-[800px]">
          Concretisez vos projets avec Kibyon ! Si vous avez une question, une
          demande particuliére ou pour tout autres besoin contactez-nous,
          ça ne vous engage à rien.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:px-20 px-5 py-10 overflow-hidden">
        {/* -----------------
        contact info side
        ---------------- */}

        <div className="text-base-100">
          {/* =====================Pourquoi nous contacter=============================     */}
          <div className="flex gap-5 items-center my-5" data-aos="fade-right" >
            <div>
            <BsCheckAll className="text-5xl text-primary w-16 h-16 p-3 bg-base-100 rounded-full" />
            </div>
            <div>
              <h3 className="lg:text-3xl text-2xl font-bold">Pourquoi nous contacter ?</h3>
              <p>blablabla</p>
            </div>
          </div>

          {/* ==========================Adresse========================= */}

          <div className="flex gap-5 items-center my-5" data-aos="fade-right" data-aos-duration="1100">
            <div className="w-16 h-16 p-3 bg-base-100 rounded-full flex items-center justify-center">
            <ImLocation2 className="text-5xl text-primary" />
            </div>

            <div>
              <h3 className="lg:text-3xl text-2xl font-bold">Adresse</h3>
              <p>71 route de la prieurée, 45110 Germigny-des-prés</p>
            </div>
          </div>
          {/* ==========================N° de télépohne========================= */}

          <div className="flex gap-5 items-center my-5" data-aos="fade-right" data-aos-duration="1200">
            <ImMobile className="text-5xl text-primary w-16 h-16 p-3 bg-base-100 rounded-full" />
            <div>
              <h3 className="lg:text-3xl text-2xl font-bold">N° de télépohne</h3>
              <p>+33 (0)645142367</p>
            </div>
          </div>
          {/* ==========================Mail========================= */}

          <div className="flex gap-5 items-center" data-aos="fade-right"  data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
            <MdAlternateEmail className="text-5xl text-primary w-16 h-16 p-3 bg-base-100 rounded-full" />
            <div>
              <h3 className="lg:text-3xl text-2xl font-bold">Mail</h3>
              <p>contact@kibyon.fr</p>
            </div>
          </div>
        </div>

        {/* ------------------------
        contact form side
        ------------------- */}
        <div className="bg-base-100 p-10 rounded-lg  " data-aos-anchor-placement="top-bottom" data-aos="fade-left" data-aos-duration="1500">
          <h2 className="text-3xl font-semibold pb-8" >Envoyer un message</h2>

          <form
            className="contactForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative inputBox">
              <input
                className="border-b-2 outline-0"
                required="required"
                type="text"
                name="name"
              /> 
              <span>NOM Prénom</span>
              
             
            </div>
            {/* ------------------------------ */}
            <div className="inputBox relative my-3">
              <input
                className="border-b-2 outline-0 "
                required="required"
                type="text"
                name="email"
              />
              <span className="my-5">Adresse Mail</span>
              
              
            </div>
            {/* ------------------------------------ */}
            <div className="inputBox relative my-3">
              <textarea
                className="border-b-2 outline-0"
                required="required"
                type="text"
                name="message"
              />
              <span >Ecrivez votre message ici.</span>
              
              
            </div>
            {/* ------------------------------------ */}
            <input type="submit" value="Envoyer" className="cursor-pointer w-full bg-primary p-3 rounded-lg text-base-100 duration-500 hover:bg-base-100 hover:text-secondary font-semibold border-2 hover:border-2 hover:border-secondary"/>
          </form>
        </div>
      </div>
   
    </div>
        </div>
    );
};

export default ContactBody;