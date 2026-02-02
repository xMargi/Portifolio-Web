import './App.css'
import About from './components/about/about'
import Home from './components/home/home'
import NavBar from './components/navbar/navbar'

import { ReactLenis } from 'lenis/react'


function App() {

  return (
    <div className='bg-[#ffffff] h-screen w-full'>
      <ReactLenis root>
        <NavBar />
        <Home />
        <About />

      </ReactLenis>
    </div>

  )

}

export default App
