import React from 'react'
import Line from '../Components/Line'

const About = (props: any) => {

  const texts:any = {
    "Portuguese":{
      "text1":"Adoro programar, pois é minha principal forma de expressar minha criatividade. Já estou nesse mundo há mais de cinco anos.",
    },
    "English":{
      "text1":"I love programming because it's my main way to express my creativity. I've been in this world for over five years now.",
    },
    "Spanish":{
      "text1":"Amo programar porque es mi principal manera de expresar mi creatividad. He estado en este mundo por más de cinco años.",
    }
  }

  return (
    <>
    <div id='about' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-[70%]'>

      <div className='w-full h-full'>
      <div className="flex justify-start my-8 px-20">
          <img className="object-cover w-[200px] h-[200px] self-center mb-6 rounded" src="about/fotocaio.jpg" alt=""/>
          <div>
            <p className="text-4xl mb-6 pl-8 pt-8">Caio Ramos</p >
            <p className="text-lg mb-6 pl-6 text-justify">{texts[props.language]['text1']}</p>
          </div>
      </div>
      </div>

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

export default About