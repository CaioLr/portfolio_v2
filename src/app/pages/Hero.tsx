'use client'


import Navbar from './Navbar'
import Start from './Start'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { useState } from 'react'
import Footer from './Footer'


const Hero = () => {

  const [language, setLanguage] :any = useState("English");
  
  return (
    <div className='bg-white dark:bg-stone-900'>
      
        <Navbar setLanguage={setLanguage} language={language}></Navbar>
        <Start id='start' setLanguage={setLanguage} language={language}></Start>
        <About id='about' setLanguage={setLanguage} language={language}></About>
        <Projects id='projects' setLanguage={setLanguage} language={language}></Projects>
        <Contact id='contact' setLanguage={setLanguage} language={language}></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Hero