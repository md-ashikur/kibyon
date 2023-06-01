import React from 'react';

import WsecOne from './WsecOne/WsecOne';
import WSecTwo from './WelcomeSecTwo/WSecTwo';
import WSecThree from './WSceThree/WSecThree';
import Wheader from './Wheader/Wheader';
import welcomeBg from '../../img/intro welcome page background.png'
const AccueilBody = () => {
    return (
        <div className=" ">
        <div className=" relative  overflow-hidden z-20">
          <div className="h-screen w-full -mt-7">
            <img
              src={welcomeBg}
              alt=""
              draggable={false}
              className="object-cover lg:object-none h-full lg:h-screen lg:w-full"
            />
          </div>
  
          <div className="absolute top-10 ">
            <Wheader />
          </div>
        
        </div>
      <section className=" top-20 z-20">  
      <WsecOne />
      </section>
        <section className="relative z-20">
          <WSecTwo />
        </section>


        <WSecThree />
      </div>
    );
};

export default AccueilBody;