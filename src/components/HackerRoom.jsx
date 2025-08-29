import React from 'react'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/hacker-room.glb')

const HackerRoom = (props) => {
  const { scene } = useGLTF('/models/hacker-room.glb')
  
  return <primitive object={scene} {...props} />
}

export default HackerRoom;
