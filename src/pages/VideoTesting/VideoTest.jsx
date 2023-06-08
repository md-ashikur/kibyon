import React, { useEffect, useRef, useState } from "react";

import "./VideoOnScroll.css";

const VideoOnScroll = () => {
 
  function getScrollLineHeight() {
    var r;
    var iframe = document.createElement('iframe');
    iframe.src = '#';
    document.body.appendChild(iframe);
    var iwin = iframe.contentWindow;
    var idoc = iwin.document;
    idoc.open();
    idoc.write('<!DOCTYPE html><html><head></head><body><span>a</span></body></html>');
    idoc.close();
    var span = idoc.body.firstElementChild;
    r = span.offsetHeight;
    document.body.removeChild(iframe);
    return r;
  }
  
  // html5 elements
  var vid = document.getElementById("v"); // HTML5 video element
  var canvas = document.getElementById("c"); // HTML5 canvas element
  var context = canvas.getContext('2d'); // Canvas context
  var momentum = document.getElementById('m'); // Current momentum display
  var delta = document.getElementById('d'); // Current deltaMode display
  var lineheight = document.getElementById('l'); // Current deltaMode display
  
  // Preloading videos bar & container
  var precarga = document.getElementById("precarga");
  var precontr = document.getElementById("precargacontainer");
  
  // Switching set
  var cod ={
    "6": [
      document.getElementById("cod6"), // html element
      "https://archive.org/download/video_g6/video_g6.webm", // Video source
      1 // Preload=0, No=1
    ],
    "24": [
      document.getElementById("cod24"), // html element
      "https://archive.org/download/video_g6/video_g24.webm", // Video source
      1 // Preload=0, No=1
    ],
  };
  
  var ch = 120; 
  var cw = Math.round(ch * (16 / 9)); 
  var targetOffset = 0; 
  
  var pc = 1000; 
  var lh = getScrollLineHeight(); 
  lineheight.value = lh;
  var modeCoefficient = [
    pc,
    (pc/lh), 
    0, 
  ];
  var modes = ['pixels', 'lines', 'page']; 
  
  
  canvas.width = cw;
  canvas.height = ch;
  
  vid.pause();
  
  // Listens video changes time position
  vid.addEventListener('seeked', function() {
    // Updates canvas with current video frame
    context.drawImage(vid, 0, 0, cw, ch);
  });
  
  // Listens mouse scroll wheel
  window.addEventListener('wheel', function(e) {
  
    // Don't do what scroll wheel normally does
    e.preventDefault();
  
    
    var coefficient = modeCoefficient[e.deltaMode];
    delta.value = modes[e.deltaMode];
  
    // Disable page scrolling, modes[e.deltaMode]=='page'
    if (coefficient <= 0) return false;
  
    
    targetOffset = targetOffset + (e.deltaY / coefficient); // e.deltaY is the thing!!
  
    // Shows current momentum
    momentum.value = targetOffset;
  
    return false;
  });
  
  // Updates canvas on a loop (both for play or pause state)
  var renderLoop = function() {
    requestAnimationFrame(function() {
  
      
      if (vid.paused || vid.ended) {
  
        
        targetOffset = targetOffset * 0.9;
       
        momentum.value = targetOffset.toFixed(2);
  
        var vct = vid.currentTime - targetOffset;
        if (vct < 0) {
          vct = vid.duration + vct;
        } else if (vct > vid.duration) {
          vct = vct - vid.duration;
        }
        vid.currentTime = parseFloat(vct.toFixed(2));
  
      
      } else {
        // update canvas with current video frame
        context.drawImage(vid, 0, 0, cw, ch);
      }
  
      renderLoop(); // Recursive call to loop
    });
  };
  
  // Preload videos
  videoPreload = function(iv) {
    if (cod[iv][2]<1) {
      // Preload video when needed
      precontr.style.visibility = 'visible';
      var xhrReq = new XMLHttpRequest();
      xhrReq.open('GET', cod[iv][1], true);
      xhrReq.responseType = 'blob';
      xhrReq.onload = function() {
        if (this.status === 200) {
          cod[iv][1] = URL.createObjectURL(this.response);
          vid.src = cod[iv][1];
          cod[iv][2] = 1; 
        }
      }
      xhrReq.onerror = function() {
        console.log('err' ,arguments);
      }
      xhrReq.onprogress = function(e){
        if(e.lengthComputable) {
          var percentComplete = ((e.loaded/e.total)*100|0);
          precarga.value=percentComplete;
  
          if(percentComplete>=99) precontr.style.visibility = 'hidden';
        }
      }
      xhrReq.send();
    } else {
      // Preloaded already (or normal loading)
      vid.src = cod[iv][1];
    }
  };
  
  // Switching video set
  var changeVideoSrc = function(iv) {
    var ps = false;
    var vct = vid.currentTime;
    if (!vid.paused && !vid.ended) {
      vid.pause();
      ps = true;
    }
    videoPreload(iv);
    vid.currentTime = parseFloat(vct.toFixed(2));
    if (ps) vid.play();
  };
  cod["6"][0].addEventListener('click', function() {
    this.style.background="#F40";
    cod["24"][0].style.background="#eee";
    changeVideoSrc("6");
  });
  cod["24"][0].addEventListener('click', function() {
    this.style.background="#F40";
    cod["6"][0].style.background="#eee";
    changeVideoSrc("24");
  });
  changeVideoSrc("6");
  renderLoop(); 

  return (
    <div>
    
<div id="precargacontainer">
  <div>Cargando video...</div>
  <progress id="precarga" value="0" max="100"></progress>
</div>
<div class="botones">
<button id="cod6" >
  Video Codificación -g 6
</button>
<button id="cod24">
  Video Codificación -g 24
</button>
</div>
<div class="row">
  <div class="column">
    <div>
      Video element:
    </div>
    <video controls height="120" id="v" tabindex="-1" autobuffer="auto" preload="auto"/>
  </div>
  <div class="column">
    <div>
      Canvas element:
    </div>
    <canvas id="c"></canvas>
  </div>
</div>
<div class="centrado">
  <h4>
    Info:
  </h4>
  
</div>
    </div>
  );
};

export default VideoOnScroll;
