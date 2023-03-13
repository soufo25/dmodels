import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Web from "./Web";

function WebDev() {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.3}>
         <Web />
        <OrbitControls enableZoom ={false}/>
        </Stage>
    </Canvas>
  )
}

export default WebDev
