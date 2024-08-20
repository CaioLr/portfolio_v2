import React, { useRef, useState } from 'react'
import { object, string } from 'yup';
import emailjs from '@emailjs/browser';


const Contact = (props: any) => {

  const texts:any= {
    "Portuguese":{
        "title":"Contato",
    },
    "English":{
        "title":"Contact",
    },
    "Spanish":{
      "title":"Contacto"
    }
  }


  return (
    <>
    <div id='contact' className='flex w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col w-[70%]'>

      <div className='flex flex-col w-full my-8 justify-center'>

        <p className='text-4xl text-center my-8'>{texts[props.language]['title']}</p>

        <div className='flex flex-row w-full pl-24 mb-6 '>

          <a href="https://www.linkedin.com/in/caio-eduardo-ramos/" target='_blank' ><div className='flex flex-row items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="object-scale-down rounded-lg w-[40px] w-[30px]"/>
            <p className= 'text-sm lg:text-base ml-2 mr-5'>LinkedIn</p>
          </div></a>

          <a href="https://github.com/CaioLr" target='_blank' ><div className='flex flex-row items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="object-scale-down rounded-lg w-[40px] w-[30px]"/>
            <p className='text-sm lg:text-base ml-2 mr-5'>GitHub</p>
          </div></a>

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