import { Text, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useRef } from "react";

export const FLOOR_HIGHT = 7;
export const NB_FLOORS = 3;

export function Shoes(props) {
  const { nodes, materials } = useGLTF("/models/Shoes.glb");
  const shoeRef = useRef();
  const tl = useRef();

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 3.5;
    const y = (mouse.y * viewport.height) / 3.5;
    shoeRef.current.lookAt(x, y, 1);
  });

  

  useEffect(() => {
    const tween = gsap.to(shoeRef.current.position, {
      y: '-6',
    
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: 'power1.inOut',
    });
    return () => {
      tween.kill();
    };
  }, []);

  useFrame(() => {
    // Update any other animations here
    
  });

  
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    gsap.to(shoeRef.current.scale, { duration: 0.2, x: 0.8, y: 0.8, z: 0.8 });
    gsap.to(shoeRef.current.rotation, { duration: 0.2, x: -0.2, y: 0, z: 0 });
    gsap.to(shoeRef.current.position, { duration: 0.2, x: -15, y: -7, z: -10 });
    setShowText(true);
  };

  const handleMouseLeave = () => {
    gsap.to(shoeRef.current.scale, { duration: 0.2, x: 0.6, y: 0.6, z: 0.6 });
    gsap.to(shoeRef.current.rotation, { duration: 0.2, x: -0.1, y: -0.2, z: 0 });
    gsap.to(shoeRef.current.position, { duration: 0.2, x: -17, y: -7, z: -10 });

    setShowText(false);
  };

  
  return (
    <>
    <group ref={shoeRef} {...props} dispose={null} onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
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
    {showText &&<Text position={[-14, -6, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} fontSize={.5} font={'Arial'}>
      Choisir Kibyon, c’est oser avancer
</Text>}
    </>
  );
}
