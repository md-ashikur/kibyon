import React from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../../contexts/Play";
import { BsFileArrowUpFill } from 'react-icons/bs';
import { BsFileArrowDownFill } from 'react-icons/bs';


export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  const handleStartAgainClick = () => {
    // Reload the page when "Start again" is clicked
    console.log("Start again button clicked");
    window.location.reload();
  };

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
      ${end ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`}/>
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">KIBYON</h1>
          <p className="intro__scroll">
              Scroll pour découvrir Kibyon
            </p>
            
          <p className="intro__scroll flex mt-7 ">
          <span className="mx-3 text-xl animate-bounce"><BsFileArrowUpFill /></span> Accélérer 
           <BsFileArrowDownFill className="mx-3 text-xl animate-bounce"/> Ralentir ou revenir en arrière
            </p>

          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explorer
          </button>
        </div>
      )}

      
      <div className={`outro ${end ? "outro--appear " : ""}`}>
        <p className="outro__text">Merci d’avoir voyagé avec Kibyon</p>
      </div>
    </div>
  
  );
};
