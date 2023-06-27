import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import planeVideo from "../../Videos/Plane  trnasparent _ home page 04-23 VF_VP9.webm";
import mapVideo from "../../Videos/Maps transparent VF (quick time) 27-04_VP9.webm";

const VideoTest = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoDivs = gsap.utils.toArray('.vid');

    videoDivs.forEach((videoDiv) => {
      const videoElem = videoDiv.querySelector('video');

      ScrollTrigger.create({
        trigger: videoDiv,
        start: 'top center',
        end: '+=100%',
       
        onEnter: () => videoElem.play(),
        onEnterBack: () => videoElem.play(),
        onLeave: () => videoElem.pause(),
        onLeaveBack: () => videoElem.pause(),
      });
    });
  }, []);

  return (
    <div>
      <div className="h-screen"></div>

      <div className="flex justify-end items-center bg-green-400 h-screen px-20">
      <div className="vid w-96">
        <video playsInline autoPlay muted loop poster="">
          <source src={planeVideo} type="video/webm" />
        </video>
      </div>
</div>
      <div className="h-screen"></div>

      <div className="flex justify-end items-center bg-green-400 h-screen px-20">
        <div className="vid w-96">
          <video playsInline autoPlay muted loop poster="">
            <source src={mapVideo} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="spacer h-screen"></div>
    </div>
  );
};

export default VideoTest;
