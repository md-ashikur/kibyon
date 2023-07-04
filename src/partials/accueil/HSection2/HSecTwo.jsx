import React, { useEffect } from "react";
import "./HSecTwo.css";
import pl from "../../../Videos/Plane  trnasparent _ home page 04-23 VF_VP9.webm";
import p from "../../../Videos/Market reasearch.mp4";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Hand } from "../Model/Hand";

const HSecTwo = () => {
  useEffect(() => {
    const registerVideo = (boundSelector, videoSelector) => {
      const bound = document.querySelector(boundSelector);
      const video = bound.querySelector(videoSelector);

      if (!video) {
        console.error("Video element not found.");
        return;
      }

      const scrollVideo = () => {
        if (video.duration) {
          const distanceFromTop =
            window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled =
            (window.scrollY - distanceFromTop) /
            (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      };

      requestAnimationFrame(scrollVideo);
    };

    registerVideo("#bound-one", "video");
  }, []);

  return (
  
      <div id="bound-one" className="scroll-bound">
        <div className="content">
          <video className="object-cover w-96" muted preload>
            <source src={pl} type="video/webm" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>

  );
};

export default HSecTwo;
