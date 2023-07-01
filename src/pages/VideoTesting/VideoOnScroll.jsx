import React, { useEffect, useState } from 'react';
import "./VideoOnScroll.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const VideoOnScroll = () => {
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 90%",
    end: "bottom 30%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});

  }, []);

  return (
    <div>
     <div class="section">
  <h1>Scroll Down</h1>
</div>

<div class="section ">
  <h1 class="revealUp">Animation 1</h1>
</div>

<div class="section">
  <h1 class="revealUp">Animation 2</h1>
</div>


    </div>
  );
};

export default VideoOnScroll;