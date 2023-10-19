import React, { useRef } from 'react'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import noClouds from '../../assets/noClouds.jpg'

export const Planet = ({PlanetDayMap, PlanetNormalMap, PlanetSpecularyMap, PlanetCloudsMap}) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [PlanetDayMap, PlanetNormalMap, PlanetSpecularyMap, noClouds ?? PlanetCloudsMap ])

  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
    cloudsRef.current.rotation.y = elapsedTime / 5
  })

  return (
    <>
      <pointLight 
        color="#f6f3ea"
        position={[2, 0, 4]} 
        intensity={25}
      />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[3.01, 50, 50]} />
        <meshPhongMaterial 
          map={cloudsMap} 
          opacity={0.4} 
          depthWrite={true} 
          transparent={true} 
          side={THREE.DoubleSide} 
        />
      </mesh >
      <mesh ref={earthRef}>
        <sphereGeometry args={[3, 50, 50]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial 
          map={colorMap} 
          normalMap={normalMap} 
          metalness={0.5} 
          roughness={1}
        />
        {/* <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true} 
          zoomSpeed={0.2}
          // autoRotateSpeed={0.3}
          rotateSpeed={0.1}
        /> */}
      </mesh>
    </>
  )
}
