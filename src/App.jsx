import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar> 
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
