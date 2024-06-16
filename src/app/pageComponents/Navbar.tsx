import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-screen'>

        {/* WEB */}
        <div className='hidden lg:flex w-full h-[10%] bg-white items-center'>

            <div className='flex w-[60%] justify-evenly ml-20'>

                <p className='font-mono text-2xl uppercase'>Home</p>
                <p className='font-mono text-2xl uppercase'>Sobre</p>
                <p className='font-mono text-2xl uppercase'>Projetos</p>
                <p className='font-mono text-2xl uppercase'>Contato</p>

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

        <div className='flex w-full h-0.5 justify-center'>
        <div className='w-full h-full bg-gray-300'></div>
        </div>
        

        {/* MOBILE */}

    </div>
  )
}

export default Navbar