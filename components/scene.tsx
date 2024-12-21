"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float, Text3D } from "@react-three/drei"
import { Suspense } from "react"

function Scene3D() {
  return (
    <>
      <Environment preset="sunset" />
      <Float>
        <Text3D
          font="/fonts/Minecraft.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          KC Lifesteal SMP
          <meshStandardMaterial color="#50c878" />
        </Text3D>
      </Float>
    </>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
    </Canvas>
  )
}

