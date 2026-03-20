import './App.css'
import About from './components/about/about'
import Home from './components/home/home'
import NavBar from './components/navbar/navbar'
import { ReactLenis } from 'lenis/react'
import Skills from './components/skills/skills'
import { Projects } from './components/projects/projects'
import { Contact } from './components/contacts/Contact'



function App() {

  return (
    <div className='bg-[#ffffff] h-screen w-full'>
      <ReactLenis root>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects/>
        <Contact/>
      </ReactLenis>
    </div>

  )

}

export default App
