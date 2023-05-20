import { Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export function Maps(props) {
    const { nodes, materials } = useGLTF("/models/Maps.glb");

    const mapRef = useRef();

    


  useEffect(() => {
    const tween = gsap.to(mapRef.current.position, {
      y: '-4',
      
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
    gsap.to(mapRef.current.scale, { duration: 0.2, x: 1.7, y: 1.7, z: 1.7 });

    setShowText(true);
  };

  const handleMouseLeave = () => {
    gsap.to(mapRef.current.scale, { duration: 0.2, x: 1.3, y: 1.3, z: 1.3 });

    setShowText(false);
  };

    return (
    
      <>
       <group {...props} dispose={null} ref={mapRef}  
       onPointerEnter={handleMouseEnter}
       onPointerLeave={handleMouseLeave}>
        <mesh
        castShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          rotation={[0, -0.09, 0]}
          scale={0.97}
        />
        <mesh
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          scale={0.9}
        />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials.water}
          position={[0, 0.06, 0]}
          scale={0.91}
        />
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials["Material.001"]}
          position={[-0.01, 0.21, 0.42]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={0.02}
        />
        <mesh
          geometry={nodes.Circle011.geometry}
          material={materials["Material.001"]}
          position={[-0.01, 0.21, 0.43]}
          rotation={[2.76, -1.52, 1.11]}
          scale={0.02}
        />
        <mesh
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
          position={[-0.87, 0.17, 0.25]}
          scale={0.09}
        >
          <group position={[0, 0.49, 0]}>
            <mesh
              geometry={nodes.Plane005_1.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Plane005_2.geometry}
              material={materials.Window}
            />
          </group>
          <mesh
            geometry={nodes.Plane005.geometry}
            material={nodes.Plane005.material}
            position={[0, 4.33, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
          position={[0.69, 0.17, 0.23]}
          scale={0.09}
        >
          <group position={[0, 0.23, 0]}>
            <mesh
              geometry={nodes.Circle001_1.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Circle001_2.geometry}
              material={materials.Window}
            />
          </group>
          <mesh
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
            position={[0, 3.43, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Plane006.geometry}
          material={nodes.Plane006.material}
          position={[0.68, 0.17, -0.81]}
          rotation={[Math.PI, -0.03, Math.PI]}
          scale={0.09}
        >
          <group position={[0, 0.49, 0]}>
            <mesh
              geometry={nodes.Plane008_1.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Plane008_2.geometry}
              material={materials.Window}
            />
          </group>
          <mesh
            geometry={nodes.Plane008.geometry}
            material={nodes.Plane008.material}
            position={[0, 7.02, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Plane009.geometry}
          material={nodes.Plane009.material}
          position={[-0.22, 0.18, -0.83]}
          rotation={[0, -0.65, 0]}
          scale={0.09}
        >
          <group position={[0, 0.49, 0]}>
            <mesh
              geometry={nodes.Plane011_1.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Plane011_2.geometry}
              material={materials.Window}
            />
          </group>
          <mesh
            geometry={nodes.Plane011.geometry}
            material={nodes.Plane011.material}
            position={[0, 2.8, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Circle004.geometry}
          material={nodes.Circle004.material}
          position={[0.72, 0.16, -0.56]}
          scale={0.09}
        >
          <group position={[-0.05, 0.23, -0.01]}>
            <mesh
              geometry={nodes.Circle005_1.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Circle005_2.geometry}
              material={materials.Window}
            />
          </group>
          <mesh
            geometry={nodes.Circle006.geometry}
            material={nodes.Circle006.material}
            position={[0, 4.34, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Circle007.geometry}
          material={nodes.Circle007.material}
          position={[-0.3, 0.17, 0.12]}
          scale={0.09}
        >
          <group position={[0, 0.23, 0]}>
            <mesh
              geometry={nodes.Circle008_1.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Circle008_2.geometry}
              material={materials.Window}
            />
          </group>
          <mesh castShadow
            geometry={nodes.Circle009.geometry}
            material={nodes.Circle009.material}
            position={[0, 1.14, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Plane012.geometry}
          material={nodes.Plane012.material}
          position={[-0.06, 0.16, 0.82]}
          scale={0.09}
        >
          <group position={[0, 0.49, 0]}>
            <mesh
              geometry={nodes.Plane021.geometry}
              material={materials.Building}
            />
            <mesh
              geometry={nodes.Plane021_1.geometry}
              material={materials.Window}
            />
          </group>
          <mesh
            geometry={nodes.Plane017.geometry}
            material={nodes.Plane017.material}
            position={[0, 8.54, 0]}
          />
        </mesh>
        <group
          position={[-0.11, 0.16, 0.42]}
          rotation={[Math.PI / 2, 0, -1.66]}
          scale={0.1}
        >
          <mesh
            geometry={nodes.SnowMan_1.geometry}
            material={materials.defaultMat}
          />
          <mesh
            geometry={nodes.SnowMan_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          geometry={nodes.Circle010.geometry}
          material={materials["Material.002"]}
          position={[-0.33, 0.38, 0.19]}
          rotation={[1.51, 1.55, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          geometry={nodes.Snow001.geometry}
          material={materials.Snow}
          position={[-0.76, 0.16, -0.37]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk.geometry}
          material={materials.Trunk}
          position={[-0.76, 0.16, -0.37]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow.geometry}
          material={materials.Snow}
          position={[-0.75, 0.22, -0.36]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow002.geometry}
          material={materials.Snow}
          position={[-0.85, 0.16, -0.36]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk001.geometry}
          material={materials.Trunk}
          position={[-0.85, 0.16, -0.36]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow003.geometry}
          material={materials.Snow}
          position={[-0.85, 0.22, -0.35]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow004.geometry}
          material={materials.Snow}
          position={[-0.41, 0.16, 0.73]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk002.geometry}
          material={materials.Trunk}
          position={[-0.41, 0.16, 0.73]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow005.geometry}
          material={materials.Snow}
          position={[-0.4, 0.23, 0.74]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow006.geometry}
          material={materials.Snow}
          position={[-0.83, 0.15, -0.39]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk003.geometry}
          material={materials.Trunk}
          position={[-0.83, 0.15, -0.39]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow007.geometry}
          material={materials.Snow}
          position={[-0.83, 0.22, -0.38]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow008.geometry}
          material={materials.Snow}
          position={[-0.93, 0.15, -0.38]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk004.geometry}
          material={materials.Trunk}
          position={[-0.93, 0.15, -0.38]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow009.geometry}
          material={materials.Snow}
          position={[-0.92, 0.22, -0.37]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow010.geometry}
          material={materials.Snow}
          position={[0.55, 0.15, 0.93]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk005.geometry}
          material={materials.Trunk}
          position={[0.55, 0.15, 0.93]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow011.geometry}
          material={materials.Snow}
          position={[0.55, 0.22, 0.94]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />
        <mesh
          geometry={nodes.Snow012.geometry}
          material={materials.Snow}
          position={[0.46, 0.15, 0.94]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          geometry={nodes.Trunk006.geometry}
          material={materials.Trunk}
          position={[0.46, 0.15, 0.94]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
        castShadow
          geometry={nodes.Snow013.geometry}
          material={materials.Snow}
          position={[0.46, 0.22, 0.95]}
          rotation={[Math.PI / 2, 0, 3.03]}
          scale={0}
        />

      </group>
      
{showText &&<Text position={[13, -6, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} fontSize={.5} font={'Arial'}>
Pour répondre à vos besoins
</Text>}
      </>
      
    
    );
  }