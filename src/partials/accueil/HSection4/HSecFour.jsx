import React, { useEffect } from 'react';
import homeVideo from "../../../Videos/WP - Section 3 -Services 5.mp4"
import "./HSecFour.css";

const HSecFour = () => {
    const registerVideo = (boundSelector, videoSelector) => {
        const bound = document.querySelector(boundSelector);
        const video = bound.querySelector(videoSelector);
    
        const scrollVideo = () => {
          if (video && video.duration) {
            const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
            const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
            const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
    
            video.currentTime = video.duration * percentScrolled;
          }
          requestAnimationFrame(scrollVideo);
        };
    
        requestAnimationFrame(scrollVideo);
      };
    
      useEffect(() => {
        registerVideo("#bound-one", "video");
       
      }, []);

    return (
        <div className="">
      <div id="bound-one" className="scroll-bound">
        <div className="content">
         
          <video width="full" muted preload>
            <source src={homeVideo} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>
     
    </div>
    );
};

export default HSecFour;