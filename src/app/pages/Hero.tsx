'use client'

import Navbar from './Navbar'
import Start from './Start'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { useState } from 'react'


const Hero = () => {

  const [language, setLanguage] :any = useState("English");
  
  return (
    <div className='bg-white dark:bg-stone-900'>
      
        <Navbar setLanguage={setLanguage} language={language}></Navbar>
        <Start setLanguage={setLanguage} language={language}></Start>
        <About setLanguage={setLanguage} language={language}></About>
        <Projects setLanguage={setLanguage} language={language}></Projects>
        <Contact setLanguage={setLanguage} language={language}></Contact>

    </div>
  )
}

export default Hero