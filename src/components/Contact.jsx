import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-700 p-4 text-white lg:pl-20 xl:pl-0'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-7xl font-signature pb-12'>Contact</p>
                <p className='text-xl'>Please Fill the form To Reach Me!</p>
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/paqgreqa" method='POST' className='flex flex-col w-full md:w-1/2 mb-20' >

                <input 
                type="text" 
                name='name' 
                placeholder='Enter Your Name'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input 
                type="email" 
                name='email' 
                placeholder='Enter Your Email'
                className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                <textarea 
                name="message" 
                placeholder='Enter Your Message'
                row='10' 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                id=""></textarea>

                <button className='flex-col w-full justify-center items-center bg-gradient-to-r from-blue-400 via-blue-700 to-blue-950 px-6 py-3 rounded-lg hover:scale-95 duration-500 text-xl font-medium my-3'>Submit</button>

            </form>
        </div>
    </div>
  )
}
