import React from 'react';

import WsecOne from './WsecOne/WsecOne';
import WSecTwo from './WelcomeSecTwo/WSecTwo';
import WSecThree from './WSceThree/WSecThree';
import Wheader from './Wheader/Wheader';
import welcomeBg from '../../img/intro welcome page background.png'
const AccueilBody = () => {
    return (
        <div className=" ">
        <div className=" relative -mt-20 overflow-hidden z-10">
          <div className="h-screen w-full -mt-7">
            <img
              src={welcomeBg}
              alt=""
              draggable={false}
              className="object-cover lg:object-none h-full lg:h-auto lg:w-full"
            />
          </div>
  
          <div className="absolute top-20 ">
            <Wheader />
          </div>
          <WsecOne />
        </div>
  
        <section className="relative z-20">
          <WSecTwo />
        </section>
  
        <WSecThree />
      </div>
    );
};

export default AccueilBody;