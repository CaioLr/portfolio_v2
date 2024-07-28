import React from 'react'
import Line from '../Components/Line'
import ThemeButton from '../Components/ThemeButton'

const Navbar = (props: any) => {

    const texts:any = {
        "Portuguese":{
            "home":"Início",
            "about":"Sobre",
            "projects":"Projetos",
            "contact":"Contato",
        },
        "English":{
            "home":"Home",
            "about":"About",
            "projects":"Projects",
            "contact":"Contact",
        },
        "Spanish":{
            "home":"Inicio",
            "about":"Sobre",
            "projects":"Proyectos",
            "contact":"Contacto",
        }
    }


  return (
    <div className='fixed top-0 w-full h-[70px] bg-white dark:bg-stone-900 z-10'>

        {/* WEB */}
        <div className='hidden lg:flex w-full h-full items-center'>

            <div className='flex w-[60%] justify-evenly ml-20'>

                <p className='font-sans text-xl uppercase'>{texts[props.language]['home']}</p>
                <p className='font-sans text-xl uppercase'>{texts[props.language]['about']}</p>
                <p className='font-sans text-xl uppercase'>{texts[props.language]['projects']}</p>
                <p className='font-sans text-xl uppercase'>{texts[props.language]['contact']}</p>

            </div>


            <div className='flex w-[40%]'>
                <div className='flex flex-row w-[80%] justify-end'>
                    <button className="hover:underline decoration-2" onClick={() => props.setLanguage("English")}>english</button>
                    <div className='mx-2'>/</div>
                    <button className="hover:underline decoration-2" onClick={() => props.setLanguage("Spanish")}>español</button>
                    <div className='mx-2'>/</div>
                    <button className="hover:underline decoration-2" onClick={() => props.setLanguage("Portuguese")}>português</button>
                </div>

                <div className='flex w-[20%] justify-end items-center mr-20'>
                    <ThemeButton></ThemeButton>
                </div>

            </div> 

        </div>

             

        {/* MOBILE */}
        <div className='flex lg:hidden w-full h-full items-center '>

            <div className='flex w-[100%]'>
                <div className='flex flex-row w-[80%] justify-start'>
                <button className="hover:underline decoration-2 ml-4" onClick={() => props.setLanguage("English")}>english</button>
                    <p className='mx-2'>/</p>
                    <button className="hover:underline decoration-2" onClick={() => props.setLanguage("Spanish")}>español</button>
                    <p className='mx-2'>/</p>
                    <button className="hover:underline decoration-2" onClick={() => props.setLanguage("Portuguese")}>português</button>
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