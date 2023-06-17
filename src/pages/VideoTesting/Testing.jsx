import React, { useEffect, useRef } from 'react';
import './Test.css';
import vid from "../../Videos/Market reasearch.mp4";
import vid2 from "../../Videos/Prévi VF (2023).mp4";

const Testing = () => {
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
    registerVideo("#bound-two", "video");
    // registerVideo("#bound-three", "video");
  }, []);

  return (
    <div className="">
      <div id="bound-one" className="scroll-bound">
        <div className="content">
         
          <video width="full" muted preload>
            <source src={vid} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>

      <div id="bound-two" className="scroll-bound">
        <div className="content">
         
          <video width="full" muted preload>
            <source src={vid2} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div>
{/* 
      <div id="bound-three" className="scroll-bound">
        <div className="content">
          <p>MP4 Video - Keyframe Interval 20</p>
          <video width="600" muted preload>
            <source src="https://cdn.ananaspizza.de/file/malte-image-store/keyframe-interval-20.mp4" type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
      </div> */}

     
    </div>
  );
};

export default Testing;
