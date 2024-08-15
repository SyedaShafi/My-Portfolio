import React from 'react';
import img from '../assets/heroImage.jpg';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import { SlSocialLinkedin } from 'react-icons/sl';
export default function Home() {
  return (
    <div
      name='home'
      className='h-full md:h-screen w-full bg-gradient-to-b from-black  via-black to-gray-700'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center h-full px-4 items-center pt-28'>
        <div className='text-white flex flex-col justify-center pb-8 h-full lg:pl-16 xl:pl-0'>
          <h1 className='text-4xl lg:text-5xl font-bold'>
            I'm Syeda Gulnaj Akther
          </h1>
          <h1 className='text-2xl lg:text-4xl py-7 font-semibold'>
            A Web Developer
          </h1>
          <p className='text-gray-400 py-4'>
            {' '}
            I am a dedicated Web Developer with a diverse skill set and a strong
            passion for creating robust and scalable web applications. My
            expertise spans both front-end and back-end technologies, allowing
            me to build seamless and efficient digital experiences from start to
            finish.
          </p>

          <div>
            <Link to={'projects'} smooth duration={700}>
              <button
                className='group flex justify-center items-center bg-gradient-to-r from-blue-400 via-blue-700
                     to-blue-950 px-6 py-3 rounded-xl hover:px-8 duration-300 text-xl font-medium w-fit'
              >
                Projects
                <span className='group-hover:rotate-90 duration-300'>
                  <IoIosArrowRoundForward className='h-10 w-10' />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='pb-12'>
          <img
            src={img}
            alt='my profile'
            className='rounded-2xl mx-auto w-3/4 lg:w-full h-full opacity-70 hover:opacity-90 hover:scale-105 duration-500'
          />

          <div className='flex justify-center '>
            <button className='lg:hidden text-center mt-8 shadow-md shadow-gray-500 py-2 rounded-md w-3/4 mx-auto'>
              <a
                className='text-white font-semibold w-full h-full cursor-pointer px-3'
                href='https://drive.google.com/file/d/1rMRr1YKq4aHu-sBH2jVNlNlhbJwR8QX7/view?usp=sharing'
                target='_blank'
              >
                Resume
                <FaDownload className='text-green-700 inline mx-3'></FaDownload>
              </a>
            </button>
          </div>
          <div className='lg:hidden flex justify-center text-gray-400'>
            <a
              href='https://github.com/SyedaShafi'
              target='_blank'
              className='px-3 py-2'
            >
              <LuGithub className='size-10 md:size-8'></LuGithub>
            </a>
            <a
              href='https://www.linkedin.com/in/syedagulnaj/'
              target='_blank'
              className='px-3 py-2 text-gray-400'
            >
              <SlSocialLinkedin className='size-10 md:size-8'></SlSocialLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
