'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Orb() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.pointer.y * 0.18 + state.clock.elapsedTime * 0.08
    mesh.current.rotation.y = state.pointer.x * 0.26 + state.clock.elapsedTime * 0.12
    mesh.current.position.x = state.pointer.x * 0.12
    mesh.current.position.y = state.pointer.y * 0.1
  })

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh ref={mesh} scale={1.38}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.45}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.22}
          distortionScale={0.3}
          temporalDistortion={0.12}
          color="#d5ff39"
          roughness={0.12}
          transmission={0.96}
          ior={1.2}
        />
      </mesh>
    </Float>
  )
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 36 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 3, 4]} intensity={2.2} color="#f7ffe2" />
        <pointLight position={[-3, -2, 1]} intensity={10} distance={7} color="#b8e62a" />
        <Orb />
        <Sparkles count={70} scale={5.4} size={1.1} speed={0.2} color="#d5ff39" opacity={0.5} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}

export function HeroSceneFallback() {
  return <div className="hero-scene-fallback" aria-hidden="true" />
}

export default HeroScene

/**
 * If the canvas cannot initialize, CSS keeps the hero visually complete.
 */
void HeroSceneFallback
void useFrame
void THREE
void OrbitControls
void Float
void MeshTransmissionMaterial
void Sparkles
void Canvas
void useRef
