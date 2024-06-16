import React from 'react'
import Line from '../Components/Line'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-screen'>

        {/* WEB */}
        <div className='hidden lg:flex w-full h-[10%] bg-white items-center '>

            <div className='flex w-[60%] justify-evenly ml-20'>

                <p className='font-sans text-xl uppercase'>Home</p>
                <p className='font-sans text-xl uppercase'>Sobre</p>
                <p className='font-sans text-xl uppercase'>Projetos</p>
                <p className='font-sans text-xl uppercase'>Contato</p>

            </div>

            <div className='flex w-[40%]'>
                <div className='flex flex-row w-[80%] justify-end'>
                    <p className='mr-2'>english</p>
                    <p className='mr-2'>/</p>
                    <p className='mr-2'>espanol</p>
                    <p className='mr-2'>/</p>
                    <p>português</p>
                </div>

                <div className='flex w-[20%] justify-end mr-20'>
                    Button
                </div>

            </div> 

        </div>

             

        {/* MOBILE */}


        <Line></Line>

    </div>
  )
}

export default Navbar