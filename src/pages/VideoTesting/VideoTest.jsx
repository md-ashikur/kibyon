import React, { useRef } from "react";
import "./VideoTest.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import mvideo from "../../Videos/WP - Section 3 -Services 5 étoiles VF-03_2023.blend0001-0400.mp4";
import { useState } from "react";




gsap.registerPlugin(ScrollTrigger);







const VideoTest = () => {

    const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const coolVideo = document.querySelector("video");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "top+=400% bottom",
        end: "bottom+=600% bottom",
        scrub: true,
        
        
      },
    });

    // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
    coolVideo.onloadedmetadata = function () {
      tl.to(coolVideo, { currentTime: coolVideo.duration });
    };

    // Dealing with devices
    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    if (isTouchDevice()) {
      coolVideo.play();
      coolVideo.pause();
    }
  }, []);

  return (
    <div id="main">
      <div className="bg-red-400 h-screen w-full z-10  relative">df</div>
      <div className="bg-green-400 h-screen w-full z-10  relative">
     
      </div>






      
      <div className="relative">
      <video
        class="video"
        playsinline="true"
        webkit-playsinline="true"
        preload="auto"
        muted="muted"
      >
        <source src={mvideo} type="video/mp4" />
      </video>
      </div>
     
    </div>
  );
};

export default VideoTest;
