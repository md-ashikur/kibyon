import React, { useState } from 'react';
import { Shoes } from "../Model/Shoes";
import { Plane } from "../Model/Plane";
import { Logo } from "../Model/Logo";
import { Hand } from "../Model/Hand";
import { Maps } from "../Model/Maps";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import "./Wheader.css";
import { useRef } from 'react';
import { useEffect } from 'react';
import { HandModel } from '../Model/HandModel';


const Wheader = () => {

    
    return (
        <div className='relative'>
             <Canvas
            camera={{ fov: 50, position: [0, 0, 20] }}
            className=" absolute bottom-0 !w-screen !h-screen z-1 "
            enableZoom={true}
            rotation={[0, -0.4, 0]}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.1} />

              <directionalLight position={[3, 5, 0]} />
              <pointLight position={[3, 10, 3]} />

              <Shoes
                position={[-13, 2, -10]}
                rotation={[-0.2, 1, 0]}
                scale={0.6}
               
                onClick={() => (window.location.href = "#shoe")}
              />

              <Plane
                position={[7, -3, 0]}
                rotation={[0.1, 0.2, 0]}
                scale={4}
                onClick={() => (window.location.href = "#plane")}
              />

              {/* <Logo  position={[0, -4.2, 0]} scale={0.6} /> */}

              <HandModel
                scale={1.2}
                className=""
                position={[3, -2, 6]}
                rotation={[2.8, -2.5, 3.5]}
                onClick={() => (window.location.href = "#hand")}
              />

              <Maps
                position={[9, 1, 3]}
                scale={1.3}
                rotation={[-0.3, 4.3, -0.8]}
                onClick={() => (window.location.href = "#map")}
              />
            </Suspense>
          </Canvas>

        

        </div>
    );
};

export default Wheader;