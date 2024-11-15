import React from 'react'
import Line from '../Components/Line'

const About = (props: any) => {

  const texts:any = {
    "Portuguese":{
      "text1":"Adoro programar, pois é minha principal forma de expressar minha criatividade. Já estou nesse mundo há mais de cinco anos.",
      "text2":"Inicialmente, identifiquei o PHP como minha principal ferramenta de backend. À medida que mergulhava no universo da programação, expandi meus horizontes e aprimorei minhas habilidades em JavaScript, Node.js, Python, C#, React, entre outras tecnologias essenciais nesse cenário em constante evolução.",
      "text3":"",
      "title1":"Jornada",
      "title2":"",
      "title3":"Principais habilidades",
      
    },
    "English":{
      "text1":"I love programming because it's my main way to express my creativity. I've been in this world for over five years.",
      "text2":"Initially, I identified PHP as my primary backend tool. As I delved into the world of programming, I broadened my horizons and honed my skills in JavaScript, Node.js, Python, C#, React, among other essential technologies in this constantly evolving field.",
      "text3":"",
      "title1":"My jorney",
      "title2":"",
      "title3":"Main skills",
    },
    "Spanish":{
      "text1":"Amo programar porque es mi principal manera de expresar mi creatividad. He estado en este mundo por más de cinco años.",
      "text2":"Inicialmente, identifiqué PHP como mi principal herramienta de backend. A medida que me sumergía en el mundo de la programación, amplié mis horizontes y perfeccioné mis habilidades en JavaScript, Node.js, Python, C#, React, entre otras tecnologías esenciales en este campo en constante evolución.",
      "text3":"",
      "title1":"Mi camino",
      "title2":"",
      "title3":"Habilidades principales",
    }
  }

  return (
    <>
    <div id='about' className='flex w-full bg-zinc-800 justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col w-full bg-zinc-800 items-center'>
      <div className='flex flex-col w-[70%] my-20 justify-center '>

        <div className="flex justify-start mb-0 mt-10 px-20">
              <img className="object-cover w-[180px] h-[180px] self-center mb-6 rounded" src="about/fotocaio.jpg" alt=""/>
              <div>
                <p className="font-sans text-4xl text-white mb-6 pl-6 pt-8">Caio Ramos</p >
                <p className="font-sans text-xl  text-white mb-6 pl-6 text-justify">{texts[props.language]['text1']}</p>
              </div>
        </div>

        <div className='flex flex-row my-2 px-20 justify-evenly'>
            <div className='flex flex-col w-full justify-start mr-8'>
              <p className='font-mono text-2xl text-gray-400 uppercase mb-4'>{texts[props.language]['title1']}</p>
              <p className='font-sans text-lg text-white text-justify'>{texts[props.language]['text2']}</p>
            </div>
           
        </div>

        <div className='flex flex-col  mb-5 mt-10 px-20'>
          <p className='font-mono text-2xl text-gray-400 uppercase mb-6'>{texts[props.language]['title3']}</p>
          <div className='flex flex-wrap mb-4'>
  
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="50" height="50"/></div>
          <div className='py-4 px-4 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" width="50" height="50"/></div>
    
          </div>
        </div>

      </div>
 
    </div>

    {/* MOBILE */}
    <div className='flex lg:hidden flex-col  w-[90%] bg-zinc-800 '>
    <div className='flex flex-col w-full justify-center '>

        <div className="flex flex-col justify-start mb-4 mt-6 px-0">
            <div className='flex flex-row'>
              <img className="object-cover w-[140px] h-[140px] self-center mb-6 rounded-md" src="about/fotocaio.jpg" alt=""/>
              <div className='mb-6 pl-4 pt-8'>
                <p className="text-4xl text-white">Caio</p >
                <p className="text-4xl text-white">Ramos</p >
              </div>
            </div>
            <div>
              <p className="text-sm text-justify text-white">{texts[props.language]['text1']}</p>
            </div>
        </div>

        <div className='flex flex-col my-4 px-0 justify-evenly'>
            <div className='flex flex-col w-full justify-start mr-8'>
              <p className='text-base text-gray-400 uppercase mb-2'>{texts[props.language]['title1']}</p>
              <p className='text-sm text-white text-justify'>{texts[props.language]['text2']}</p>
            </div>
            
        </div>

        <div className='flex flex-col w-full mb-4 mt-6 px-0'>
          <p className='text-base text-gray-400 uppercase mb-6'>{texts[props.language]['title3']}</p>
          <div className='flex flex-wrap w-full'>

          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="35" height="35"/></div>
          <div className='py-2 px-2 mr-2 mb-2 border rounded-lg hover:bg-zinc-700'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" width="35" height="35"/></div>


          </div>
        </div>

        </div>

    </div>

    </div>
    </>
  )
}

export default About