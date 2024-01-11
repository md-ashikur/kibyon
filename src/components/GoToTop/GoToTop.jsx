import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

  const listenToScroll = () => {
     let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

    return (
    
         
         <div >
         {isVisible && (
        <BsFillArrowUpCircleFill
       className=" text-4xl fixed lg:bottom-7 bottom-10 w-10 h-10 right-10 text-white bg-black hover:scale-125 transition duration-150 ease-in-out rounded-full border-2 border-black  z-50"
        onClick={goToTop}
      />
      )}
    </div>
      
    );
};

export default GoToTop;