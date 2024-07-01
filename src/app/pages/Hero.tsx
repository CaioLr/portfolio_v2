import Navbar from './Navbar'
import Start from './Start'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


const Hero = () => {
  
  return (
    <div className='bg-white dark:bg-stone-900'>
    <Navbar></Navbar>
    <Start></Start>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  )
}

export default Hero