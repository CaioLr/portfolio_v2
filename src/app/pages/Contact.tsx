import React, { useRef, useState } from 'react'
import { object, string } from 'yup';
import emailjs from '@emailjs/browser';


const Contact = (props: any) => {

  const texts:any= {
    "Portuguese":{
        "title":"Contato",
        "text1":"Saiba mais sobre a minha carreira profissional e entre em contato comigo!",
        "text2":"Explore meus códigos, projetos pessoais e os desafios que já realizei."
    },
    "English":{
        "title":"Contact",
        "text1":"Learn more about my professional journey and get in touch with me!",
        "text2":"Explore my code, personal projects, and the challenges I've tackled."
    },
    "Spanish":{
      "title":"Contacto",
      "text1":"Descubre más sobre mi trayectoria profesional y ponte en contacto conmigo.",
      "text2":"Explora mis códigos, proyectos personales y los desafíos que he enfrentado."
    }
  }


  return (
    <>
    <div id='contact' className='flex w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col w-[70%]'>

      <div className='flex flex-col w-full my-8 justify-center'>

        <p className='text-4xl text-center mt-8 mb-4'>{texts[props.language]['title']}</p>

        <div className='flex flex-row w-full mb-14 justify-evenly'>

          
          
          <div className='flex my-10 mx-10 w-[50%] h-full'><a href="https://www.linkedin.com/in/caio-eduardo-ramos/" target='_blank' className='flex w-full h-full justify-end'>

          <div className='flex flex-row w-[80%] h-[90%] justify-center items-center border-2 rounded-lg hover:bg-slate-50'>

            <div className='flex flex-col  items-center  ml-8'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="object-scale-down mb-2 rounded-lg w-[75px]"/>
              <p className= 'text-sm lg:text-xl'>LinkedIn</p>
            </div>

            <p className='text-lg text-left ml-8 mr-2'>{texts[props.language]['text1']}</p>

          </div>
          
          </a></div>
        
          
          <div className='flex flex-rol my-10 mx-10 w-[50%] h-full'><a href="https://github.com/CaioLr" target='_blank' className='flex w-full h-full justify-start'>

          <div className='flex flex-row w-[80%] h-[90%] justify-center items-center border-2 rounded-lg hover:bg-slate-50'>

            <div className='flex flex-col items-center ml-8'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="object-scale-down mb-2 rounded-lg w-[75px]"/>
              <p className='text-sm lg:text-2xl'>GitHub</p>
            </div>

            <p className='text-lg text-left ml-8 mr-2'>{texts[props.language]['text2']}</p>

          </div>

          </a></div>

          
          
        </div>

      </div>

    </div>

    {/* MOBILE */}
    <div className='flex lg:hidden flex-col h-screen w-[90%]'>

    </div>

    </div>
    </>
  )
}

export default Contact