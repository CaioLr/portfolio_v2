import React from 'react'
import Line from '../Components/Line'

const Start = (props: any) => {

  const texts:any = {
    "Portuguese":{
      "text1":"Olá, eu sou o Caio",
      "text2":"Clique na imagem para me conhecer de forma interativa."
    },
    "English":{
      "text1":"Hi, I'm Caio",
      "text2":"Click on the image to get to know me interactively."
    },
    "Spanish":{
      "text1":"Hola, yo soy Caio",
      "text2":"Haz clic en la imagen para conocerme de manera interactiva."
    }
  }

  return (
    <>
    <div id='start' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-[70%]'>

      <div className='w-full h-[10%]'></div>

      <div className='flex w-full h-[25%] items-center'>

        <div className='flex flex-col w-full'>
        <p className='text-center text-2xl mb-4'>{texts[props.language]['text1']}</p>
        <p className='text-center text-xl text-cyan-600 dark:text-cyan-200 '>{texts[props.language]['text2']}</p>
        </div>

      </div>

      <div className='flex w-full h-[65%] items-center mb-4 justify-center'>

          <img className="relative h-[90%] object-scale-down hover:scale-105 transform transition duration-500" src="well.gif" alt=""/>

      </div>

      <Line></Line>
    </div>

    {/* MOBILE */}
    <div className='flex lg:hidden flex-col h-screen w-[90%]'>

      <div className='w-full h-[10%]'></div>

      <div className='flex w-full h-[25%] items-center'>

        <div className='flex flex-col w-full'>
        <p className='text-center text-xl mb-4 '>Olá, eu so o Caio</p>
        <p className='text-center text-lg text-cyan-600'>Clique na imagem para me conhecer de forma interativa.</p>
        </div>

      </div>

      <div className='flex w-full h-[70%] items-center mb-4 justify-center'>

          <img className="relative h-[100%] object-scale-down hover:scale-105 transform transition duration-500" src="well.gif" alt=""/>

      </div>

    <Line></Line>
    </div>
    
    </div>
    </>
    
  )
}

export default Start