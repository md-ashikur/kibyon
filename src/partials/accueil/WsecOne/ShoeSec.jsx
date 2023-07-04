import { Text, useGLTF, useScroll } from "@react-three/drei";

import { useRef } from "react";


export function ShoeSec(props) {
  const { nodes, materials } = useGLTF("/models/Shoes.glb");
  const shoesRef = useRef();
 
  
  
  return (
    <>
    <group ref={shoesRef} {...props} dispose={null} >
      <group
        position={[-3.6, 2.24, 1.1]}
        rotation={[-Math.PI / 2, 0, 0.32]}
        scale={16.64}
      >
        <mesh
          geometry={nodes.Aviators_Black_gloss_0.geometry}
          material={materials.Black_gloss}
        />
        <mesh
          geometry={nodes.Aviators_Glass_tinted_0.geometry}
          material={materials.Glass_tinted}
        />
        <mesh
          geometry={nodes.Aviators_Gold_metallic_0.geometry}
          material={materials.Gold_metallic}
        />
        <mesh
          geometry={nodes.Aviators_Silver_metallic_0.geometry}
          material={materials.Silver_metallic}
        />
        <mesh
          geometry={nodes.Aviators_Transparent_0.geometry}
          material={materials.Transparent}
        />
      </group>
      <group
        position={[-6.05, 0.71, 0.79]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.24}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.shoe_shoe_0.geometry}
            material={materials.shoe}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.shoelace_shoelace_0.geometry}
            material={materials.shoelace}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <group
        position={[-8.32, 2.27, 0.97]}
        rotation={[-Math.PI / 2, 0, -0.14]}
        scale={16.64}
      >
        <mesh
          geometry={nodes.Aviators_Black_gloss_0001.geometry}
          material={materials.Black_gloss}
        />
        <mesh
          geometry={nodes.Aviators_Glass_tinted_0001.geometry}
          material={materials.Glass_tinted}
        />
        <mesh
          geometry={nodes.Aviators_Gold_metallic_0001.geometry}
          material={materials.Gold_metallic}
        />
        <mesh
          geometry={nodes.Aviators_Silver_metallic_0001.geometry}
          material={materials.Silver_metallic}
        />
        <mesh
          geometry={nodes.Aviators_Transparent_0001.geometry}
          material={materials.Transparent}
        />
      </group>
      
    </group>
    
    </>
  );
}
