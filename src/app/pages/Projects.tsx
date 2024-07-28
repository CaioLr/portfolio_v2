import React from 'react'
import Line from '../Components/Line'

const Projects = (props: any) => {

  const texts:any = {
    "Portuguese":{
    },
    "English":{
    },
    "Spanish":{
    }
  }

  return (
    <>
    <div id='projects' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-[70%]'>

      <div className='w-full h-full'></div>

      <Line></Line>
    </div>

    {/* MOBILE */}
    <div className='flex lg:hidden flex-col h-screen w-[90%]'>


    <Line></Line>
    </div>

    </div>
    </>
  )
}

export default Projects