import React from 'react'
import Line from '../Components/Line'

const Start = () => {
  return (
    <>
    <div id='start' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-[70%]'>

      <div className='w-full h-[10%]'></div>

      <div className='flex w-full h-[25%] items-center'>

        <div className='flex flex-col w-full'>
        <p className='text-center text-2xl mb-4'>Olá, eu sou o Caio</p>
        <p className='text-center text-xl'>Clique na imagem para me conhecer de forma interativa</p>
        </div>

      </div>

      <div className='flex w-full h-[65%] items-center mb-4 justify-center'>

          <img className="h-[90%] object-scale-down hover:scale-105 transform transition duration-500" src="well.gif" alt=""/>

      </div>

      <Line></Line>
    </div>

    {/* MOBILE */}

    
    </div>
    </>
    
  )
}

export default Start