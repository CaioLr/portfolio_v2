import React from 'react'
import Navbar from './pageComponents/Navbar'
import Start from './pageComponents/Start'
import About from './pageComponents/About'
import Projects from './pageComponents/Projects'
import Contact from './pageComponents/Contact'


const Hero = () => {
  return (
    <>
    <Navbar></Navbar>
    <Start></Start>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    </>
  )
}

export default Hero