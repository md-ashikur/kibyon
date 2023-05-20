import { Text, useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

export function Hand(props) {
 
    const { nodes, materials, animations } = useGLTF('/models/handSewing.glb')
    const { actions } = useAnimations(animations)

const handRef = useRef();

const [showText, setShowText] = useState(false);

const handleMouseEnter = () => {
  gsap.to(handRef.current.scale, { duration: 0.2, x: 1.7, y: 1.7, z: 1.7 });

  setShowText(true);
};

const handleMouseLeave = () => {
  gsap.to(handRef.current.scale, { duration: 0.2, x: 1.3, y: 1.3, z: 1.3 });

  setShowText(false);
};

    return (
     <>
      <group ref={handRef} {...props} dispose={null} onPointerEnter={handleMouseEnter}
       onPointerLeave={handleMouseLeave}>
        <group name="Scene">
         
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
            <group name="10d303afd96646438dfea7a6b7c7c561fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group name="aguja" position={[0.75, 37.17, -5.21]} rotation={[Math.PI / 2, 1.47, 2.11]} scale={0.4}>
                  <mesh name="aguja_aguja_0" geometry={nodes.aguja_aguja_0.geometry} material={materials.aguja} position={[1.54, 9.19, 8.36]} rotation={[0.16, -0.1, 0.01]} />
                </group>
                <group name="hilo" position={[1.98, 28.18, 11.53]} rotation={[Math.PI / 2, 1.47, -Math.PI]} scale={0.4}>
                  <mesh name="hilo_hilo_0" geometry={nodes.hilo_hilo_0.geometry} material={materials.hilo} position={[7.3, 3.4, 12.32]} rotation={[0, -0.19, 0]} />
                </group>
              </group>
            </group>
          </group>
          <group name="Armature" position={[0.11, 0.99, -0.67]} rotation={[1.26, 1.16, -0.54]}>
            <primitive object={nodes.pulseR} />
            <primitive object={nodes.index_tipR} />
            <primitive object={nodes.middle_tipR} />
            <primitive object={nodes.ring_tipR} />
            <primitive object={nodes.pinky_tipR} />
            <primitive object={nodes.thumb_tipR} />
            <skinnedMesh name="handSmooth001" geometry={nodes.handSmooth001.geometry} material={materials.lambert1} skeleton={nodes.handSmooth001.skeleton} />
          </group>
        
        </group>
      </group>
      {showText &&<Text position={[6, -6, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} fontSize={.5} font={'Arial'}>
      Un conseil personnalisé et adapté
</Text>}
      </>
    )
  }
  