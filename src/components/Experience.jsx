import { Center, Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import React from 'react'
import { BoxGeometry } from 'three'
import Model from './Model'

const Experience = () => {
  return (
    <>
        {/* <OrbitControls/> */}
        {/* <mesh>
            <boxGeometry/>
            <meshStandardMaterial color='hotpink' metalness={1} roughness={0.1} />
        </mesh> */}
        <Environment preset='city' />
        {/* <ScrollControls pages={2}> */}
            {/* <Scroll> */}
                {/* <Center> */}
                    <Model/>
                {/* </Center> */}
            {/* </Scroll> */}
        {/* </ScrollControls> */}
    </>
    
  )
}

export default Experience