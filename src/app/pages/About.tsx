import React from 'react'
import Line from '../Components/Line'

const About = (props: any) => {

  const texts:any = {
    "Portuguese":{
      "text1":"Adoro programar, pois é minha principal forma de expressar minha criatividade. Já estou nesse mundo há mais de cinco anos.",
      "text2":"Inicialmente, identifiquei o PHP como minha principal ferramenta de backend. À medida que mergulhava no universo da programação web, expandi meus horizontes e aprimorei minhas habilidades em JavaScript, Node.js, Python, C#, React, entre outras tecnologias essenciais nesse cenário em constante evolução. Além disso, realizei projetos relacionados a Machine Learning e sou um entusiasta do desenvolvimento de jogos.",
      "text3":"Atualmente, trabalho como Analista de Suporte Técnico na Simetrik. Meus objetivos para o futuro incluem, além do desenvolvimento profissional, reservar tempo para aprimorar as habilidades pessoais que desejo. Assim, estou me especializando cada vez mais na área de IA, para a qual direciono meus estudos.",
      "title1":"Jornada",
      "title2":"Objetivos",
      "title3":"Habilidades e competências",
      
    },
    "English":{
      "text1":"I love programming because it's my main way to express my creativity. I've been in this world for over five years.",
      "text2":"Initially, I identified PHP as my primary backend tool. As I delved into the world of web programming, I broadened my horizons and honed my skills in JavaScript, Node.js, Python, C#, React, among other essential technologies in this constantly evolving field. Additionally, I have worked on Machine Learning projects and am an enthusiast of Game Development.",
      "text3":"Currently, I work as a Technical Support Engineer at Simetrik. My future goals include, in addition to professional development, setting aside time to improve the personal skills I desire. Thus, I am increasingly specializing in the field of AI, towards which I am directing my studies.",
      "title1":"My jorney",
      "title2":"Goals",
      "title3":"Skills and competencies",
    },
    "Spanish":{
      "text1":"Amo programar porque es mi principal manera de expresar mi creatividad. He estado en este mundo por más de cinco años.",
      "text2":"Inicialmente, identifiqué PHP como mi principal herramienta de backend. A medida que me sumergía en el mundo de la programación web, amplié mis horizontes y perfeccioné mis habilidades en JavaScript, Node.js, Python, C#, React, entre otras tecnologías esenciales en este campo en constante evolución. Además, he trabajado en proyectos de Machine Learning y soy un entusiasta del desarrollo de videojuegos.",
      "text3":"Actualmente, trabajo como Analista de Soporte Técnico en Simetrik. Mis objetivos para el futuro incluyen, además del desarrollo profesional, reservar tiempo para mejorar las habilidades personales que deseo. Así, me estoy especializando cada vez más en el área de IA, hacia la cual dirijo mis estudios.",
      "title1":"Mi camino",
      "title2":"Objetivos",
      "title3":"Destrezas y competencias",
    }
  }

  return (
    <>
    <div id='about' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-full bg-zinc-800 items-center'>
      <div className='flex flex-col w-[70%] h-full justify-center '>

        <div className="flex justify-start mb-4 mt-10 px-20">
              <img className="object-cover w-[180px] h-[180px] self-center mb-6 rounded" src="about/fotocaio.jpg" alt=""/>
              <div>
                <p className="text-4xl text-white mb-6 pl-6 pt-8">Caio Ramos</p >
                <p className="text-lg  text-white mb-6 pl-6 text-justify">{texts[props.language]['text1']}</p>
              </div>
        </div>

        <div className='flex flex-row my-4 px-20 justify-evenly'>
            <div className='flex flex-col w-full justify-start mr-8'>
              <p className='text-xl text-white uppercase mb-4'>{texts[props.language]['title1']}</p>
              <p className='text-base text-white text-justify'>{texts[props.language]['text2']}</p>
            </div>
            <div className='flex flex-col w-full justify-start'>
              <p className='text-xl text-white uppercase mb-4'>{texts[props.language]['title2']}</p>
              <p className='text-base text-white text-justify'>{texts[props.language]['text3']}</p>
            </div>
        </div>

        <div className='flex flex-col  mb-5 mt-12 px-20'>
          <p className='text-xl text-white uppercase mb-6'>{texts[props.language]['title3']}</p>
          <div className='flex flex-wrap mb-4'>

            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="40" height="40"/>
            <img className='mr-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="40" height="40"/>
    
          </div>
        </div>

      </div>
 
    </div>

    {/* MOBILE */}
    <div className='flex lg:hidden flex-col h-screen w-[90%]'>
    <div className='flex flex-col w-full h-full justify-center'>

        <div className="flex flex-col justify-start mb-4 mt-6 px-0">
            <div className='flex flex-row'>
              <img className="object-cover w-[100px] h-[100px] self-center mb-6 rounded-md" src="about/fotocaio.jpg" alt=""/>
              <div className='mb-6 pl-4 pt-8'>
                <p className="text-2xl">Caio</p >
                <p className="text-2xl">Ramos</p >
              </div>
            </div>
            <div>
              <p className="text-xs text-justify">{texts[props.language]['text1']}</p>
            </div>
        </div>

        <div className='flex flex-col my-4 px-0 justify-evenly'>
            <div className='flex flex-col w-full justify-start mr-8'>
              <p className='text-base uppercase mb-2'>{texts[props.language]['title1']}</p>
              <p className='text-xs text-justify'>{texts[props.language]['text2']}</p>
            </div>
            <div className='flex flex-col w-full justify-start'>
              <p className='text-base uppercase mt-4 mb-2'>{texts[props.language]['title2']}</p>
              <p className='text-xs text-justify'>{texts[props.language]['text3']}</p>
            </div>
        </div>

        <div className='flex flex-col w-full mb-4 mt-6 px-0'>
          <p className='text-base uppercase mb-6'>{texts[props.language]['title3']}</p>
          <div className='flex flex-wrap w-full'>

            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="25" height="25"/>
            <img className='mr-4 mb-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="25" height="25"/>


          </div>
        </div>

        </div>

        <Line></Line>
    </div>

    </div>
    </>
  )
}

export default About