import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Shoes } from '../Model/Shoes';
import { Plane } from '../Model/Plane';
import { HandModel } from '../Model/HandModel';
import { Maps } from '../Model/Maps';
import "./HSecOne.css";


const HSecOne = () => {
    return (
        <div className=' flex justify-center mt-40 w-[100vw] bg-blue-400'>
        {/* <Canvas
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
     </Canvas> */}

<div className='all_models flex relative'>
    
{/* shoes================= */}
   <div className="absolute lg:top-1 lg:-left-[500px] -left-[235px]">
   <Canvas
              className="model shoeModel !h-[200px] !w-[200px] "
              camera={{ fov: 50, position: [0, 0, 20] }}
            >
              <Suspense fallback={null}>
              <ambientLight />
                  <directionalLight position={[3, 10, 6]} />
                  <pointLight position={[3, 10, 6]} />

                <Shoes
                  position={[5, -1, -10]}
                  rotation={[-0, 1, 0.3]}
                  scale={1.5}
                  onClick={() => (window.location.href = "#shoe")}
                />
              </Suspense>
            </Canvas>
            <p className='text-white shoeText'> Choisir Kibyon, c’est oser avancer</p>
   </div>

   {/* plane================== */}
   <div className="absolute lg:top-28 top-52 lg:-left-[250px] -left-[190px]">
   <Canvas
              className=" model planeModel !h-[200px] !w-[200px] "
              camera={{ fov: 50, position: [0, 0, 20] }}
            >
              <Suspense fallback={null}>
              <ambientLight />
                  <directionalLight position={[3, 10, 6]} />
                  <pointLight position={[3, 10, 6]} />

                <Plane
                 position={[24, -3, 0]}
                 rotation={[0.1, 0.2, 0]}
                 scale={9}
                 onClick={() => (window.location.href = "#plane")}
                />
              </Suspense>
            </Canvas>
            <p className='text-white planeText'> Et si on avançait ensemble ?</p>
   </div>
{/* =======hand============= */}
   <div className=" absolute lg:top-28 top-52 lg:-right-[250px] ">
   <Canvas
              className="model handModel !h-[200px] !w-[200px] "
              camera={{ fov: 50, position: [0, 0, 20] }}
            >
              <Suspense fallback={null}>
              <ambientLight />
                  <directionalLight position={[3, 10, 6]} />
                  <pointLight position={[3, 10, 6]} />

                <HandModel
                 position={[0, -1, 2]}
                 rotation={[0, 0.8, 0.2]}
                 scale={5}
                 onClick={() => (window.location.href = "#hand")}
                />
              </Suspense>
            </Canvas>
            <p className='text-white text-xs handText'>Un conseil personnalisé et adapté</p>
   </div>
{/* map============== */}
   <div className="absolute lg:top-1 lg:-right-[500px] top-10 -right-[220px]">
   <Canvas
              className="model mapModel !h-[200px] !w-[200px] "
              camera={{ fov: 50, position: [0, 0, 20] }}
            >
              <Suspense fallback={null}>
              <ambientLight intensity={0.1} />

         <directionalLight position={[3, 5, 0]} />
         <pointLight position={[3, 10, 3]} />
                <Maps
                position={[0, 1, 3]}
                scale={4}
                rotation={[-0.3, 4.7, -0.8]}
                onClick={() => (window.location.href = "#map")}
                />
              </Suspense>
            </Canvas>
            <p className='text-white mapText -mt-10'>Pour répondre à vos besoins</p>
   </div>

</div>
   </div>
    );
};

export default HSecOne;