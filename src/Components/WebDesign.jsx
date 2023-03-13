import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Chair from "./Chair"

function WebDesign() {
  return (
    <Canvas>
        <Stage environment="studio" intensity={0.3}>
        <Chair/>
        <OrbitControls enableZoom ={false}/>
        </Stage>
    </Canvas>
  )
}

export default WebDesign;
