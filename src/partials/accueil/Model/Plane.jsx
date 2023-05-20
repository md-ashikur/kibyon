import { Text, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Color, DoubleSide, MeshBasicMaterial } from "three";

export function Plane(props) {
  const { nodes, materials, animations } = useGLTF("/models/Plane.glb");
  const { actions } = useAnimations(animations);

  const planeRef = useRef();

  useEffect(() => {
    const tween = gsap.to(planeRef.current.position, {
      y: "+=0.6",
     
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "power1.inOut",
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
    gsap.to(planeRef.current.scale, { duration: 0.2, x: 4, y: 6, z:6 });

    setShowText(true);
  };

  const handleMouseLeave = () => {
    gsap.to(planeRef.current.scale, { duration: 0.2, x: 4, y: 4, z: 4 });

    setShowText(false);
  };

  return (
   <>
    <group
      ref={planeRef}
      {...props}
      dispose={null}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <group ref={planeRef} name="Studio_limbo_3_point_lighting_2x2x2">
        <group name="Jet_03" position={[3.4, -5.76, -51.38]}>
          <mesh
            name="Jet_Flame_mesh_Icosphere"
            geometry={nodes.Jet_Flame_mesh_Icosphere.geometry}
            material={
              new MeshBasicMaterial({
                color: new Color("gold"),
                side: DoubleSide,
                emissive: new Color("gold"),
                emissiveIntensity: 1,
              })
            }
            position={[-6.3, 5.95, 51.52]}
            scale={0.02}
          />
        </group>
        <group name="Jet_03002" position={[3.4, -5.76, -51.21]}>
          <mesh
            name="Jet_Flame_mesh_Icosphere001"
            geometry={nodes.Jet_Flame_mesh_Icosphere001.geometry}
            material={
              new MeshBasicMaterial({
                color: new Color("gold"),
                side: DoubleSide,
                emissive: new Color("gold"),
                emissiveIntensity: 1,
              })
            }
            position={[-6.31, 5.95, 51.49]}
            scale={0.02}
          />
        </group>
        <mesh
          name="Plane_With_Raised_Wings_Plane001"
          geometry={nodes.Plane_With_Raised_Wings_Plane001.geometry}
          material={materials.Paper}
          position={[-2.6, 0.22, 0.79]}
          rotation={[Math.PI / 2, 0, -1.57]}
          scale={0.2}
        />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials["Material.005"]}
          position={[-2.9, 0.23, 0.36]}
          rotation={[2.3, -0.08, 0.02]}
          scale={0.03}
        />
      </group>
     
    </group>
    {showText && (
        <Text
          position={[-6, -5, 2]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          fontSize={0.5}
          font={"Arial"}
        >
          Et si on avançait ensemble ?
        </Text>
      )}
   </>
  );
}
