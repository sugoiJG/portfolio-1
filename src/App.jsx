import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import Experience from './components/Experience'
import About from './components/About'


function App() {

  return (
    <>
    <NavBar />
    <Home />
    <About />
    
    <SocialLinks />
    <Experience />
    </>
  )
}

export default App
