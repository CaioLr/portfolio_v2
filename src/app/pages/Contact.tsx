import React from 'react'

const Contact = (props: any) => {

  const texts:any = {
    "Portuguese":{
    },
    "English":{
    },
    "Spanish":{
    }
  }

  return (
    <>
    <div id='contact' className='flex h-screen w-full justify-center'>

    {/* WEB */}
    <div className='hidden lg:flex flex-col h-screen w-[70%]'>

      <div className='w-full h-full'></div>

    </div>

    {/* MOBILE */}
    <div className='flex lg:hidden flex-col h-screen w-[90%]'>

    </div>

    </div>
    </>
  )
}

export default Contact