import React from "react";
import { Link } from "react-router-dom";
import cookieImg from "../img/Kibyon-3-2.png";

const Test = () => {
  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[100]">
        <div className="bg-white max-w-[500px] shadow-2xl shadow-white/50 rounded-3xl overflow-hidden mx-5">
          <div className="flex justify-center my-5 ">
            <img src={cookieImg} alt="" className="w-44 h-44" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Cookies !</h2>
          <p className="mb-4 text-center lg:px-8 px-3">
            Nous utilisons des cookies pour améliorer votre expérience de
            navigation.
          </p>
          <div className="grid grid-cols-2 ">
            <Link to="/politique">
              <button className="border-t-2 text-black hover:border-t-2 hover:border-t-black hover:bg-black hover:text-white px-4 py-5 w-full ">
                Politique de confidentialité
              </button>
            </Link>
            <button className="bg-black text-white hover:bg-black/95  px-4 py-5 w-full">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
