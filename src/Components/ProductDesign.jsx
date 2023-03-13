import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Phone from "./Phone";
import styled from 'styled-components';


const Desc = styled.div`
 position: absolute;
 font-size: 32px;
 font-weight: bold;
 color: white;
 bottom:80px;
 margin-left: 250px;
 border: 1px solid;
 border-radius: 0.3rem;
 padding : 0.5rem 10px;



`;

function ProductDesign() {
  return (
    <>
     <Canvas>
        <Stage environment= "sunset" intensity={0.3}>
            <Phone />
            <OrbitControls/>
        </Stage>
    </Canvas>
    <Desc>
        This is an Iphone 13 pro max
    </Desc>
    </>
  )
}

export default ProductDesign;
