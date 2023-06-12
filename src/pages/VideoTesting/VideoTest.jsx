import React, { useRef } from "react";
import "./VideoTest.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import mvideo from "../../Videos/WP - Section 3 -Services 5 étoiles VF-03_2023.blend0001-0400.mp4";
import { useState } from "react";
import fd from "../../Videos/Market_reasearch_VF-05_2023_AdobeExpress.mp4"

gsap.registerPlugin(ScrollTrigger);


const VideoTest = () => {

 


  return (
    <div id="main">
    <div className="relative sec1">
      <video
        className="video vid1"
        playsInline
        webkitplaysinline="true"
        preload="auto"
        muted={true}
      >
        <source src={fd} type="video/mp4" />
      </video>
    </div>
  
    <div className="relative">
      <video
        className="video"
        playsInline
        webkitplaysinline="true"
        preload="auto"
        muted={true}
      >
        <source src={mvideo} type="video/mp4" />
      </video>
    </div>
  
    <div className="relative">
      <video
        className="video"
        playsInline
        webkitplaysinline="true"
        preload="auto"
        muted={true}
      >
        <source src={fd} type="video/mp4" />
      </video>
    </div>
  
    <div className="text-section">
      <h2>Scroll Triggered Text Section</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  
  );
};

export default VideoTest;
