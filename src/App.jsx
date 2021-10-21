import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function App() {

  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[0, 10, 2]} />
        <mesh>
          <boxGeometry args={[10, 5, 0.2]} />
          <meshPhongMaterial color={"rebeccapurple"} attach={"material"} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
