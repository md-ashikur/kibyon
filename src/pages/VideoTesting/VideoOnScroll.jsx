import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "./VideoOnScroll.css";
import imgs from "../../../public/Videoimg/male0001.png"




const VideoOnScroll = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [isPlaying, setIsPlaying] = useState(true); // Track if image sequence is playing

  useEffect(() => {
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
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const files = (index) => {
      const data = `
      ../../../public/Videoimg/male0001.png
     ../../../public/Videoimg/male0002.png
     ../../../public/Videoimg/male0003.png
     ../../../public/Videoimg/male0004.png
     ../../../public/Videoimg/male0005.png
     ../../../public/Videoimg/male0006.png
     ../../../public/Videoimg/male0007.png
     ../../../public/Videoimg/male0008.png
     ../../../public/Videoimg/male0009.png
     ../../../public/Videoimg/male0010.png
     ../../../public/Videoimg/male0011.png
     ../../../public/Videoimg/male0012.png
     ../../../public/Videoimg/male0013.png
     ../../../public/Videoimg/male0014.png
     ../../../public/Videoimg/male0015.png
     ../../../public/Videoimg/male0016.png
     ../../../public/Videoimg/male0017.png
     ../../../public/Videoimg/male0018.png
     ../../../public/Videoimg/male0019.png
     ../../../public/Videoimg/male0020.png
     ../../../public/Videoimg/male0021.png
     ../../../public/Videoimg/male0022.png
     ../../../public/Videoimg/male0023.png
     ../../../public/Videoimg/male0024.png
     ../../../public/Videoimg/male0025.png
     ../../../public/Videoimg/male0026.png
     ../../../public/Videoimg/male0027.png
     ../../../public/Videoimg/male0028.png
     ../../../public/Videoimg/male0029.png
     ../../../public/Videoimg/male0030.png
     ../../../public/Videoimg/male0031.png
     ../../../public/Videoimg/male0032.png
     ../../../public/Videoimg/male0033.png
     ../../../public/Videoimg/male0034.png
     ../../../public/Videoimg/male0035.png
     ../../../public/Videoimg/male0036.png
     ../../../public/Videoimg/male0037.png
     ../../../public/Videoimg/male0038.png
     ../../../public/Videoimg/male0039.png
     ../../../public/Videoimg/male0040.png
     ../../../public/Videoimg/male0041.png
     ../../../public/Videoimg/male0042.png
     ../../../public/Videoimg/male0043.png
     ../../../public/Videoimg/male0044.png
     ../../../public/Videoimg/male0045.png
     ../../../public/Videoimg/male0046.png
     ../../../public/Videoimg/male0047.png
     ../../../public/Videoimg/male0048.png
     ../../../public/Videoimg/male0049.png
     ../../../public/Videoimg/male0050.png
     ../../../public/Videoimg/male0051.png
     ../../../public/Videoimg/male0052.png
     ../../../public/Videoimg/male0053.png
     ../../../public/Videoimg/male0054.png
     ../../../public/Videoimg/male0055.png
     ../../../public/Videoimg/male0056.png
     ../../../public/Videoimg/male0057.png
     ../../../public/Videoimg/male0058.png
     ../../../public/Videoimg/male0059.png
     ../../../public/Videoimg/male0060.png
     ../../../public/Videoimg/male0061.png
     ../../../public/Videoimg/male0062.png
     ../../../public/Videoimg/male0063.png
     ../../../public/Videoimg/male0064.png
     ../../../public/Videoimg/male0065.png
     ../../../public/Videoimg/male0066.png
     ../../../public/Videoimg/male0067.png
     ../../../public/Videoimg/male0068.png
     ../../../public/Videoimg/male0069.png
     ../../../public/Videoimg/male0070.png
     ../../../public/Videoimg/male0071.png
     ../../../public/Videoimg/male0072.png
     ../../../public/Videoimg/male0073.png
     ../../../public/Videoimg/male0074.png
     ../../../public/Videoimg/male0075.png
     ../../../public/Videoimg/male0076.png
     ../../../public/Videoimg/male0077.png
     ../../../public/Videoimg/male0078.png
     ../../../public/Videoimg/male0079.png
     ../../../public/Videoimg/male0080.png
     ../../../public/Videoimg/male0081.png
     ../../../public/Videoimg/male0082.png
     ../../../public/Videoimg/male0083.png
     ../../../public/Videoimg/male0084.png
     ../../../public/Videoimg/male0085.png
     ../../../public/Videoimg/male0086.png
     ../../../public/Videoimg/male0087.png
     ../../../public/Videoimg/male0088.png
     ../../../public/Videoimg/male0089.png
     ../../../public/Videoimg/male0090.png
     ../../../public/Videoimg/male0091.png
     ../../../public/Videoimg/male0092.png
     ../../../public/Videoimg/male0093.png
     ../../../public/Videoimg/male0094.png
     ../../../public/Videoimg/male0095.png
     ../../../public/Videoimg/male0096.png
     ../../../public/Videoimg/male0097.png
     ../../../public/Videoimg/male0098.png
     ../../../public/Videoimg/male0099.png
     ../../../public/Videoimg/male0100.png
     ../../../public/Videoimg/male0101.png
     ../../../public/Videoimg/male0102.png
     ../../../public/Videoimg/male0103.png
     ../../../public/Videoimg/male0104.png
     ../../../public/Videoimg/male0105.png
     ../../../public/Videoimg/male0106.png
     ../../../public/Videoimg/male0107.png
     ../../../public/Videoimg/male0108.png
     ../../../public/Videoimg/male0109.png
     ../../../public/Videoimg/male0110.png
     ../../../public/Videoimg/male0111.png
     ../../../public/Videoimg/male0112.png
     ../../../public/Videoimg/male0113.png
     ../../../public/Videoimg/male0114.png
     ../../../public/Videoimg/male0115.png
     ../../../public/Videoimg/male0116.png
     ../../../public/Videoimg/male0117.png
     ../../../public/Videoimg/male0118.png
     ../../../public/Videoimg/male0119.png
     ../../../public/Videoimg/male0120.png
     ../../../public/Videoimg/male0121.png
     ../../../public/Videoimg/male0122.png
     ../../../public/Videoimg/male0123.png
     ../../../public/Videoimg/male0124.png
     ../../../public/Videoimg/male0125.png
     ../../../public/Videoimg/male0126.png
     ../../../public/Videoimg/male0127.png
     ../../../public/Videoimg/male0128.png
     ../../../public/Videoimg/male0129.png
     ../../../public/Videoimg/male0130.png
     ../../../public/Videoimg/male0131.png
     ../../../public/Videoimg/male0132.png
     ../../../public/Videoimg/male0133.png
     ../../../public/Videoimg/male0134.png
     ../../../public/Videoimg/male0135.png
     ../../../public/Videoimg/male0136.png
     ../../../public/Videoimg/male0137.png
     ../../../public/Videoimg/male0138.png
     ../../../public/Videoimg/male0139.png
     ../../../public/Videoimg/male0140.png
     ../../../public/Videoimg/male0141.png
     ../../../public/Videoimg/male0142.png
     ../../../public/Videoimg/male0143.png
     ../../../public/Videoimg/male0144.png
     ../../../public/Videoimg/male0145.png
     ../../../public/Videoimg/male0146.png
     ../../../public/Videoimg/male0147.png
     ../../../public/Videoimg/male0148.png
     ../../../public/Videoimg/male0149.png
     ../../../public/Videoimg/male0150.png
     ../../../public/Videoimg/male0151.png
     ../../../public/Videoimg/male0152.png
     ../../../public/Videoimg/male0153.png
     ../../../public/Videoimg/male0154.png
     ../../../public/Videoimg/male0155.png
     ../../../public/Videoimg/male0156.png
     ../../../public/Videoimg/male0157.png
     ../../../public/Videoimg/male0158.png
     ../../../public/Videoimg/male0159.png
     ../../../public/Videoimg/male0160.png
     ../../../public/Videoimg/male0161.png
     ../../../public/Videoimg/male0162.png
     ../../../public/Videoimg/male0163.png
     ../../../public/Videoimg/male0164.png
     ../../../public/Videoimg/male0165.png
     ../../../public/Videoimg/male0166.png
     ../../../public/Videoimg/male0167.png
     ../../../public/Videoimg/male0168.png
     ../../../public/Videoimg/male0169.png
     ../../../public/Videoimg/male0170.png
     ../../../public/Videoimg/male0171.png
     ../../../public/Videoimg/male0172.png
     ../../../public/Videoimg/male0173.png
     ../../../public/Videoimg/male0174.png
     ../../../public/Videoimg/male0175.png
     ../../../public/Videoimg/male0176.png
     ../../../public/Videoimg/male0177.png
     ../../../public/Videoimg/male0178.png
     ../../../public/Videoimg/male0179.png
     ../../../public/Videoimg/male0180.png
     ../../../public/Videoimg/male0181.png
     ../../../public/Videoimg/male0182.png
     ../../../public/Videoimg/male0183.png
     ../../../public/Videoimg/male0184.png
     ../../../public/Videoimg/male0185.png
     ../../../public/Videoimg/male0186.png
     ../../../public/Videoimg/male0187.png
     ../../../public/Videoimg/male0188.png
     ../../../public/Videoimg/male0189.png
     ../../../public/Videoimg/male0190.png
     ../../../public/Videoimg/male0191.png
     ../../../public/Videoimg/male0192.png
     ../../../public/Videoimg/male0193.png
     ../../../public/Videoimg/male0194.png
     ../../../public/Videoimg/male0195.png
     ../../../public/Videoimg/male0196.png
     ../../../public/Videoimg/male0197.png
     ../../../public/Videoimg/male0198.png
     ../../../public/Videoimg/male0199.png
     ../../../public/Videoimg/male0200.png
     ../../../public/Videoimg/male0201.png
     ../../../public/Videoimg/male0202.png
     ../../../public/Videoimg/male0203.png
     ../../../public/Videoimg/male0204.png
     ../../../public/Videoimg/male0205.png
     ../../../public/Videoimg/male0206.png
     ../../../public/Videoimg/male0207.png
     ../../../public/Videoimg/male0208.png
     ../../../public/Videoimg/male0209.png
     ../../../public/Videoimg/male0210.png
     ../../../public/Videoimg/male0211.png
     ../../../public/Videoimg/male0212.png
     ../../../public/Videoimg/male0213.png
     ../../../public/Videoimg/male0214.png
     ../../../public/Videoimg/male0215.png
     ../../../public/Videoimg/male0216.png
     ../../../public/Videoimg/male0217.png
     ../../../public/Videoimg/male0218.png
     ../../../public/Videoimg/male0219.png
     ../../../public/Videoimg/male0220.png
     ../../../public/Videoimg/male0221.png
     ../../../public/Videoimg/male0222.png
     ../../../public/Videoimg/male0223.png
     ../../../public/Videoimg/male0224.png
     ../../../public/Videoimg/male0225.png
     ../../../public/Videoimg/male0226.png
     ../../../public/Videoimg/male0227.png
     ../../../public/Videoimg/male0228.png
     ../../../public/Videoimg/male0229.png
     ../../../public/Videoimg/male0230.png
     ../../../public/Videoimg/male0231.png
     ../../../public/Videoimg/male0232.png
     ../../../public/Videoimg/male0233.png
     ../../../public/Videoimg/male0234.png
     ../../../public/Videoimg/male0235.png
     ../../../public/Videoimg/male0236.png
     ../../../public/Videoimg/male0237.png
     ../../../public/Videoimg/male0238.png
     ../../../public/Videoimg/male0239.png
     ../../../public/Videoimg/male0240.png
     ../../../public/Videoimg/male0241.png
     ../../../public/Videoimg/male0242.png
     ../../../public/Videoimg/male0243.png
     ../../../public/Videoimg/male0244.png
     ../../../public/Videoimg/male0245.png
     ../../../public/Videoimg/male0246.png
     ../../../public/Videoimg/male0247.png
     ../../../public/Videoimg/male0248.png
     ../../../public/Videoimg/male0249.png
     ../../../public/Videoimg/male0250.png
     ../../../public/Videoimg/male0251.png
     ../../../public/Videoimg/male0252.png
     ../../../public/Videoimg/male0253.png
     ../../../public/Videoimg/male0254.png
     ../../../public/Videoimg/male0255.png
     ../../../public/Videoimg/male0256.png
     ../../../public/Videoimg/male0257.png
     ../../../public/Videoimg/male0258.png
     ../../../public/Videoimg/male0259.png
     ../../../public/Videoimg/male0260.png
     ../../../public/Videoimg/male0261.png
     ../../../public/Videoimg/male0262.png
     ../../../public/Videoimg/male0263.png
     ../../../public/Videoimg/male0264.png
     ../../../public/Videoimg/male0265.png
     ../../../public/Videoimg/male0266.png
     ../../../public/Videoimg/male0267.png
     ../../../public/Videoimg/male0268.png
     ../../../public/Videoimg/male0269.png
     ../../../public/Videoimg/male0270.png
     ../../../public/Videoimg/male0271.png
     ../../../public/Videoimg/male0272.png
     ../../../public/Videoimg/male0273.png
     ../../../public/Videoimg/male0274.png
     ../../../public/Videoimg/male0275.png
     ../../../public/Videoimg/male0276.png
     ../../../public/Videoimg/male0277.png
     ../../../public/Videoimg/male0278.png
     ../../../public/Videoimg/male0279.png
     ../../../public/Videoimg/male0280.png
     ../../../public/Videoimg/male0281.png
     ../../../public/Videoimg/male0282.png
     ../../../public/Videoimg/male0283.png
     ../../../public/Videoimg/male0284.png
     ../../../public/Videoimg/male0285.png
     ../../../public/Videoimg/male0286.png
     ../../../public/Videoimg/male0287.png
     ../../../public/Videoimg/male0288.png
     ../../../public/Videoimg/male0289.png
     ../../../public/Videoimg/male0290.png
     ../../../public/Videoimg/male0291.png
     ../../../public/Videoimg/male0292.png
     ../../../public/Videoimg/male0293.png
     ../../../public/Videoimg/male0294.png
     ../../../public/Videoimg/male0295.png
     ../../../public/Videoimg/male0296.png
     ../../../public/Videoimg/male0297.png
     ../../../public/Videoimg/male0298.png
     ../../../public/Videoimg/male0299.png
     ../../../public/Videoimg/male0300.png
 `;
      return data.split("\n")[index];
    };

    const frameCount = 300;
    const images = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    images.forEach((img, index) => {
      img.onload = () => {
        imagesRef.current[index] = img;
        if (index === 1) {
          render();
        }
      };
    });

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function render() {
      const img = imagesRef.current[imageSeq.frame];
      if (img && img.complete) {
        scaleImage(img, context);
      }
    }

    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
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
      // markers:true,
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

  const imageSeq = {
    frame: 1,
  };



  return (
    <div>
      <div id="nav">
        <h3>
          <b>CYBER</b>FICTION*
        </h3>
        <button>APRIL,2023</button>
      </div>
      <div id="main">
        <div id="page">
          <div id="loop">
            <h1>
              <b>CYBER</b>FICTION IS THE{" "}
              <b>
                <i>REAL</i>
              </b>{" "}
              <span>STORY</span> IN THE{" "}
              <span>
                <i>METAVERSE.</i>
              </span>
            </h1>
            <h1>
              <b>CYBER</b>FICTION IS THE{" "}
              <b>
                <i>REAL</i>
              </b>{" "}
              <span>STORY</span> IN THE{" "}
              <span>
                <i>METAVERSE.</i>
              </span>
            </h1>
            <h1>
              <b>CYBER</b>FICTION IS THE{" "}
              <b>
                <i>REAL</i>
              </b>{" "}
              <span>STORY</span> IN THE{" "}
              <span>
                <i>METAVERSE.</i>
              </span>
            </h1>
          </div>
          <h3>
            CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br />{" "}
            CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br />{" "}
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
              <br />
              JUST BE TOGETHER
            </h1>
          </div>
          <div id="left-text">
            <h1>
              MAKE A STORY
              <br />
              TAKE A CHANCE
              <br />
              BUILD AND OWNED
            </h1>
            <h3>..AND MAINTAIN GOOD HUMANITY</h3>
          </div>
        </div>
        <div id="page2">
          <div id="text1">
            <h3>CYBERFICTION / HAVE FUN</h3>
            <h1>
              LET'S
              <br />
              HAVE FUN
              <br />
              TOGETHER
            </h1>
          </div>
          <div id="text2">
            <p>
              LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION,{" "}
              <br /> STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND
              SHARE <br /> WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU
              CAN STAND <br /> TOGETHER IN THE METAVERSE.
            </p>
          </div>
        </div>
        <div id="page3">
          <div id="text1">
            <h3>CYBERFICTION / TAKE A CHANCE</h3>
            <h1>
              TAKE A
              <br />
              CHANCE
              <br />
              TO START
            </h1>
          </div>
          <div id="text2">
            <p>
              JUST GIVE IT A TRY! <br />
              THERE IS NO BOUNDARIES BETWEEN YOU <br />
              AND YOUR CREATIVITY IN THE METAVERSE. <br />
              FROM A SIMPLE TO COMPLEX STORY THAT YOU CREATE WILL <br />
              BE ABLE TO EXIST AND MAKE A PROFOUND IMPACT.
            </p>
          </div>
        </div>
        <div id="page4">
          <div id="text1">
            <h3>CYBERFICTION / BUILD AND OWNED</h3>
            <h1>
              BUILD AND
              <br />
              OWNED
              <br />
              TOGETHER
            </h1>
          </div>
          <div id="text2">
            <p>
              TOGETHER WE BUILD! <br />
              FROM CREATING CHARACTERS, MAKING STORIES, <br />
              DESIGNING THE METAVERSE, RUNNING A PROJECT, <br />
              TO BUILDING A DREAM AND EXPERIENCING IT.
            </p>
          </div>
        </div>
        <div id="page5">
          <div id="text1">
            <h3>CYBERFICTION / GOOD HUMANITY</h3>
            <h1>
              MAINTAIN
              <br />
              GOOD
              <br />
              HUMANITY
            </h1>
          </div>
          <div id="text2">
            <p>
              LET'S BE A GOOD PERSON IN THE METAVERSE AND <br />
              REAL WORLD, RESPECT OTHERS, DON'T SPREAD <br />
              HATRED, BULLYING, OR HARMFUL ACTIONS. <br />
              SO THAT CYBERFICTION WILL BE A HEALTHY AND <br />
              SAFE COMMUNITY.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoOnScroll;
