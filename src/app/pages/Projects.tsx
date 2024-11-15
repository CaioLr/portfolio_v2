import React from 'react'
import Line from '../Components/Line'
import ProjectsBox from '../Components/ProjectsBox'

const Projects = (props: any) => {

  
  const texts:any = {
    "Portuguese":{
      "title":"Projetos",
    },
    "English":{
      "title":"Projects",
    },
    "Spanish":{
      "title":"Proyectos",
    }
  }

  return (
    <>
    <div id='projects' className='flex h-screen w-full justify-center'>

      {/* WEB */}
      <div className='hidden lg:flex flex-col h-screen w-[70%]'>

        <div className='w-full h-full'>

        <div className="flex flex-col h-full w-full justify-center items-center mb-6 mt-10">

          <p className='font-mono text-4xl mb-8'>{texts[props.language]['title']}</p>

          <div className='w-full h-[65%]'><ProjectsBox></ProjectsBox></div>

        </div>

        </div>

        <Line></Line>
    </div>

      {/* MOBILE */}
      <div className='flex lg:hidden flex-col h-screen w-[90%]'>
        <div className='w-full h-full'>

        <div className="flex flex-col h-full w-full justify-center items-center mb-6 mt-10">

          <p className='font-mono text-4xl mb-8'>{texts[props.language]['title']}</p>

          <div className='w-full h-[40%]'><ProjectsBox></ProjectsBox></div>

        </div>

        </div>

        <Line></Line>
      </div>

    </div>
    </>
  )
}

export default Projects