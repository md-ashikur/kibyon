import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "./VideoOnScroll.css";





const VideoOnScroll = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    const locomotive = () => {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "relative",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    };

    locomotive();

    const files = (index) => {
      const data = `
      ../../../public/offerVideo1/marketStudy1.jpg
     ../../../public/offerVideo1/marketStudy2.jpg
     ../../../public/offerVideo1/marketStudy3.jpg
     ../../../public/offerVideo1/marketStudy4.jpg
     ../../../public/offerVideo1/marketStudy5.jpg
     ../../../public/offerVideo1/marketStudy6.jpg
     ../../../public/offerVideo1/marketStudy7.jpg
     ../../../public/offerVideo1/marketStudy8.jpg
     ../../../public/offerVideo1/marketStudy9.jpg
     ../../../public/offerVideo1/marketStudy10.jpg
     ../../../public/offerVideo1/marketStudy11.jpg
     ../../../public/offerVideo1/marketStudy12.jpg
     ../../../public/offerVideo1/marketStudy13.jpg
     ../../../public/offerVideo1/marketStudy14.jpg
     ../../../public/offerVideo1/marketStudy15.jpg
     ../../../public/offerVideo1/marketStudy16.jpg
     ../../../public/offerVideo1/marketStudy17.jpg
     ../../../public/offerVideo1/marketStudy18.jpg
     ../../../public/offerVideo1/marketStudy19.jpg
     ../../../public/offerVideo1/marketStudy20.jpg
     ../../../public/offerVideo1/marketStudy21.jpg
     ../../../public/offerVideo1/marketStudy22.jpg
     ../../../public/offerVideo1/marketStudy23.jpg
     ../../../public/offerVideo1/marketStudy24.jpg
     ../../../public/offerVideo1/marketStudy25.jpg
     ../../../public/offerVideo1/marketStudy26.jpg
     ../../../public/offerVideo1/marketStudy27.jpg
     ../../../public/offerVideo1/marketStudy28.jpg
     ../../../public/offerVideo1/marketStudy29.jpg
     ../../../public/offerVideo1/marketStudy30.jpg
     ../../../public/offerVideo1/marketStudy31.jpg
     ../../../public/offerVideo1/marketStudy32.jpg
     ../../../public/offerVideo1/marketStudy33.jpg
     ../../../public/offerVideo1/marketStudy34.jpg
     ../../../public/offerVideo1/marketStudy35.jpg
     ../../../public/offerVideo1/marketStudy36.jpg
     ../../../public/offerVideo1/marketStudy37.jpg
     ../../../public/offerVideo1/marketStudy38.jpg
     ../../../public/offerVideo1/marketStudy39.jpg
     ../../../public/offerVideo1/marketStudy40.jpg
     ../../../public/offerVideo1/marketStudy41.jpg
     ../../../public/offerVideo1/marketStudy42.jpg
     ../../../public/offerVideo1/marketStudy43.jpg
     ../../../public/offerVideo1/marketStudy44.jpg
     ../../../public/offerVideo1/marketStudy45.jpg
     ../../../public/offerVideo1/marketStudy46.jpg
     ../../../public/offerVideo1/marketStudy47.jpg
     ../../../public/offerVideo1/marketStudy48.jpg
     ../../../public/offerVideo1/marketStudy49.jpg
     ../../../public/offerVideo1/marketStudy50.jpg
     
     
 `;
      return data.split("\n")[index];
    };

    const frameCount = 50;
    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    
    
    ScrollTrigger.create({
      trigger: "#page>canvas",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `600% top`,
    });
    
    gsap.to("#page1", {
      scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`,
      },
    });
    gsap.to("#page2", {
      scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`,
      },
    });
    gsap.to("#page3", {
      scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`,
      },
    });
  }, []);

  return (
   <div>
<div id="nav">
<h3>
<b>CYBER</b>FICTION*
</h3>
<button>APRIL, 2023</button>
</div>
<div id="main">
<div className="lal"></div>
<div className="lal2"></div>
<div id="page">
<div id="loop">
<h1>
<b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN
THE <span><i>METAVERSE.</i></span>
</h1>
<h1>
<b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN
THE <span><i>METAVERSE.</i></span>
</h1>
<h1>
<b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN
THE <span><i>METAVERSE.</i></span>
</h1>
</div>
<h3>
CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br />
CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br />
WORLD.
</h3>
<h4>...SCROLL TO READ</h4>
<canvas ref={canvasRef} className="canvas"></canvas>
</div>
<div id="page1">
<div id="right-text">
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
HAVE FUN
<br />
LET'S PLAY
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
HAVE FUN
<br />
LET'S PLAY
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
HAVE FUN
<br />
LET'S PLAY
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
HAVE FUN
<br />
LET'S PLAY
</h1>
</div>
</div>
<div id="page2">
<div id="left-text">
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
ARTIFICIAL
<br />
INTELLIGENCE
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
ARTIFICIAL
<br />
INTELLIGENCE
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
ARTIFICIAL
<br />
INTELLIGENCE
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
ARTIFICIAL
<br />
INTELLIGENCE
</h1>
</div>
</div>
<div id="page3">
<div id="right-text">
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
BLOCKCHAIN
<br />
TECHNOLOGY
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
BLOCKCHAIN
<br />
TECHNOLOGY
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
BLOCKCHAIN
<br />
TECHNOLOGY
</h1>
<h3>CYBERFICTION / KEY WORD</h3>
<h1>
BLOCKCHAIN
<br />
TECHNOLOGY
</h1>
</div>
</div>
</div>
</div>
  );
};

export default VideoOnScroll;
