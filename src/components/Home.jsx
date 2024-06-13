import React from 'react'
import img from '../assets/heroImage.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import {Link} from 'react-scroll'
export default function Home() {
  return (
    <div name='home' className='h-full md:h-screen w-full bg-gradient-to-b from-black  via-black to-gray-700'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center h-full px-4 items-center pt-28'>
            <div className="text-white flex flex-col justify-center pb-8 h-full lg:pl-16 xl:pl-0">
                <h1 className='text-4xl md:text-7xl font-bold'>I'm a Full Stack Developer</h1>
                <p className='text-gray-400 py-4'>   I am a dedicated Full Stack Developer with a diverse skill set and a strong passion for creating robust and scalable web applications. My expertise spans both front-end and back-end technologies, allowing me to build seamless and efficient digital experiences from start to finish.</p>

                <div>
                    <Link to={'portfolio'} smooth duration={700}>
                    <button className='group flex justify-center items-center bg-gradient-to-r from-blue-400 via-blue-700
                     to-blue-950 px-6 py-3 rounded-xl hover:px-8 duration-300 text-xl font-medium w-fit'>
                        Portfolio
                        
                        <span className='group-hover:rotate-90 duration-300'>
                        <IoIosArrowRoundForward className='h-10 w-10' />
                        </span>

                    </button>
                    </Link>
                </div> 
            </div>
            <div className='pb-12'>
                <img src={img} alt="my profile" className='rounded-2xl mx-auto w-3/4 lg:w-full opacity-70 hover:opacity-90 hover:scale-105 duration-500' />
            </div>
        </div>        
    </div>
  )
}
