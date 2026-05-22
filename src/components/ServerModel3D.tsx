"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";
import type { MeshStandardMaterial } from "three";
import type { ServerPart } from "@/data/server-parts";

type ClickablePartProps = {
  part: ServerPart;
  isSelected: boolean;
  onSelect: (part: ServerPart) => void;
};

function ClickablePart({ part, isSelected, onSelect }: ClickablePartProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!meshRef.current) return;
    const raw = meshRef.current.material;
    if (Array.isArray(raw)) return;
    const material = raw as MeshStandardMaterial;

    const target = isSelected ? 0.45 : hovered ? 0.25 : 0.08;
    material.emissiveIntensity += (target - material.emissiveIntensity) * 0.12;
  });

  return (
    <mesh
      ref={meshRef}
      position={part.position}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(part);
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <boxGeometry args={part.size} />
      <meshStandardMaterial
        color={part.imageColor}
        emissive={part.imageColor}
        emissiveIntensity={isSelected ? 0.45 : 0.08}
        metalness={0.4}
        roughness={0.35}
      />
    </mesh>
  );
}

type ServerSceneProps = {
  parts: ServerPart[];
  selectedId: string;
  onSelect: (part: ServerPart) => void;
};

function ServerScene({ parts, selectedId, onSelect }: ServerSceneProps) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} />

      <group>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.7, 2.1, 0.75]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.6} roughness={0.45} />
        </mesh>

        {parts.map((part) => (
          <ClickablePart
            key={part.id}
            part={part}
            isSelected={part.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
      />
    </>
  );
}

type ServerModel3DProps = {
  parts: ServerPart[];
  selectedId: string;
  onSelect: (part: ServerPart) => void;
};

export function ServerModel3D({ parts, selectedId, onSelect }: ServerModel3DProps) {
  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        className="rounded-[1.75rem]"
      >
        <ServerScene parts={parts} selectedId={selectedId} onSelect={onSelect} />
      </Canvas>

      <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-xs text-white/50">
        Drag to rotate · Click a component
      </p>
    </div>
  );
}
