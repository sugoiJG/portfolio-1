import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import Experience from './components/Experience'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {

  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />

    <SocialLinks />
    </>
  )
}

export default App
