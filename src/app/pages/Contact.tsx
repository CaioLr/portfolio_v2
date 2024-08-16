import React, { useRef, useState } from 'react'
import { object, string } from 'yup';
import emailjs from '@emailjs/browser';


const Contact = (props: any) => {

  const texts:any= {
    "Portuguese":{
        "title":"Contato",
        "name":"Nome",
        "email":"Email",
        "message":"Mensagem",
        "submit":"Enviar",
        "place_name":"Nome",
        "place_email":"Email",
        "place_message":"Digite sua mensagem",
        "error_1":"Nome é obrigatório.",
        "error_2":"Email é obrigatório.",
        "error_3":"Formato de email inválido.",
        "error_4":"Mensagem é obrigatória.",
        "error_5":"Mensagem está muito longa.",
        "success":"Sua mensagem para contato foi enviada com sucesso!",
        "fail":"Falha durante o envio da mensagem! Tente novamente depois de uns minutos.",
    },
    "English":{
        "title":"Contact",
        "name":"Name",
        "email":"Email",
        "message":"Message",
        "submit":"Submit",
        "place_name":"Name",
        "place_email":"Email",
        "place_message":"Type your message",
        "error_1":"Name is required.",
        "error_2":"Email is required.",
        "error_3":"Invalid email format.",
        "error_4":"Message is required.",
        "error_5":"Message is too long.",
        "success":"Your contact message has been sent successfully! ",
        "fail":"Error while sending the message! Try again after a few minutes.",
    }
  }

  const form:any = useRef();

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState(false)

  const [failMessage, setFailMessage] = useState(false)

  const sendEmail = async (e:any) => {
    e.preventDefault();

    try{
      console.log(process.env.EMAILJS_SERVICE_ID)
    }catch{

    }

    // try{
    //   await validationSchema.validate(formData, {abortEarly: false});
    // 
    //   emailjs
    //   .sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, {
    //     publicKey: process.env.EMAILJS_PUBLIC_KEY,
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //       setSuccessMessage(true);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //       setFailMessage(true);
    //     },
    //   );
 
    // }catch (error:any) {
    //   const newErrors:any = {};

    //   error.inner.forEach((err:any) => {
    //     newErrors[err.path] = err.message;
    //     console.log(err.message)
    //   });

    //   setErrors(newErrors);
    // }

  };

  const [formData, setFormData]:any = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  let validationSchema = object({
    user_name: string().required(texts[props.language]['error_1']),
    user_email: string()
    .required(texts[props.language]['error_2'])
    .email(texts[props.language]['error_3']),
    message: string()
    .required(texts[props.language]['error_4'])
    .max(1000,texts[props.language]['error_5']),
  });

  const handleChange = (e:any) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
    <div id='contact' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-[70%]'>

      <div className='flex flex-col w-full h-full justify-center'>

        <p className='text-4xl text-center my-8 uppercase'>{texts[props.language]['title']}</p>

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


        <div className="flex w-full items-center justify-start pl-24">

          <form ref={form} onSubmit={sendEmail} className='w-[90%]'>

          {/* {successMessage &&

          <div id="alert-border-3" className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-stone-900 dark:border-green-800" role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div className="ms-3 text-sm font-medium">{texts[props.language]['success']}</div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-stone-900 dark:text-green-400 dark:hover:bg-stone-700"
            onClick={() => {setSuccessMessage(false)}}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
          } */}

          {/* {failMessage &&

          <div id="alert-border-3" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-green-300 bg-green-50 dark:text-red-400 dark:bg-stone-900 dark:border-red-800" role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div className="ms-3 text-sm font-medium">{texts[props.language]['fail']}</div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-stone-900 dark:text-red-400 dark:hover:bg-stone-700"
              onClick={() => {setFailMessage(false)}}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
          } */}

          <div className="mb-4">
            <label htmlFor="name"className="mb-3 block text-base font-medium text-[#ffffff]">{texts[props.language]['name']}</label>
            <input type="text" name="user_name" placeholder={texts[props.language]['place_name']}
                value={formData.user_name}
                onChange={handleChange}
                className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"/>
            {errors.user_name && <div className='error' class='text-red-700 mt-1 pl-2'>{errors.user_name}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#ffffff]">{texts[props.language]['email']}</label>
            <input type="email" name="user_email" placeholder={texts[props.language]['place_email']}
                value={formData.user_email}
                onChange={handleChange}
                className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"/>
            {errors.user_email && <div className='error' class='text-red-700 mt-1 pl-2'>{errors.user_email}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#ffffff]">{texts[props.language]['message']}</label>
            <textarea rows="4" name="message" placeholder={texts[props.language]['place_message']}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md"/>
            {errors.message && <div className='error' class='text-red-700 mt-1'>{errors.message}</div>}
          </div>

          <div>
            <button type='submit'className="hover:shadow-form rounded-md bg-[#1565C0] py-3 px-8 text-base font-semibold text-white outline-none">
              {texts[props.language]['submit']}
            </button>
          </div>

          </form>

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