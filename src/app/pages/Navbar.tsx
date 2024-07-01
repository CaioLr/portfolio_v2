import React from 'react'
import Line from '../Components/Line'
import ThemeButton from '../Components/ThemeButton'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-[70px] bg-white dark:bg-stone-900 z-10'>

        {/* WEB */}
        <div className='hidden lg:flex w-full h-full items-center'>

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
                    <ThemeButton></ThemeButton>
                </div>

            </div> 

        </div>

             

        {/* MOBILE */}
        <div className='flex lg:hidden w-full h-full items-center '>

            <div className='flex w-[100%]'>
                <div className='flex flex-row w-[80%] justify-start'>
                    <p className='mx-2 text-sm'>english</p>
                    <p className='mr-2 text-sm'>/</p>
                    <p className='mr-2 text-sm'>espanol</p>
                    <p className='mr-2 text-sm'>/</p>
                    <p className='text-sm'>português</p>
                </div>

                <div className='flex w-[20%] justify-end mr-2'>
                    <ThemeButton></ThemeButton>
                </div>

            </div> 

        </div>

        <Line></Line>

    </div>
  )
}

export default Navbar