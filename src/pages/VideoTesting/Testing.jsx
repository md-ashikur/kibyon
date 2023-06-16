import React, { useEffect, useRef } from 'react';
import './Test.css';
import vid from "../../Videos/WP - Section 3 -Services 5 étoiles VF-03_2023.blend0001-0400.mp4";
import vid2 from "../../Videos/Market_reasearch_VF-05_2023_AdobeExpress.mp4";

const Testing = () => {
    const registerVideo = (bound, video) => {
        bound = document.querySelector(bound);
        video = document.querySelector(video);
        const scrollVideo = ()=>{
            if(video.duration) {
                const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
                const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
                const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
                
                video.currentTime = video.duration * percentScrolled;
            }
            requestAnimationFrame(scrollVideo);
        }
        requestAnimationFrame(scrollVideo);
    }
    
    registerVideo("#bound-one", "#bound-one video");
    
    registerVideo("#bound-two", "#bound-two video")
    
    registerVideo("#bound-three", "#bound-three video")

    return (
        <div class="app">
        <div id="bound-one" class="scroll-bound">
            <div class="content">
                <p>WebM Video</p>
                 <video width="600" muted preload>
                    <source src={vid} type="video/webm"/>
                    <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
            </div>
        </div>
        
        <div id="bound-two" class="scroll-bound">
            <div class="content">
                <p>MP4 Video - Keyframe Interval 1</p>
                 <video width="600" muted preload>
                   <source src={vid2} type="video/mp4"/>
                <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
            </div>
        </div>
        
        <div id="bound-three" class="scroll-bound">
            <div class="content">
                <p>MP4 Video - Keyframe Interval 20</p>
                 <video width="600" muted preload>
                   <source src="https://cdn.ananaspizza.de/file/malte-image-store/keyframe-interval-20.mp4" type="video/mp4"/>
                <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
            </div>
        </div>
        
    </div>
  );
};

export default Testing;
