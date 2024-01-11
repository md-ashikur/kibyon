
import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useMemo } from 'react';
import { Experience } from '../../components/aboutComponents/Experience';
import { Overlay } from '../../components/aboutComponents/Overlay';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import { usePlay } from '../../contexts/Play';
import "./AboutBody.css"


const AboutBody = () => {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    ),
    []
  );

  return (
    <div className='overflow-hidden '>
      <Canvas className='can ' >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 100 : 0}
       
          damping={0.7}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            inset: "-5px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience  />
        </ScrollControls >
        {effects}
      </Canvas>
      <Overlay />
      </div>
    );
};

export default AboutBody;