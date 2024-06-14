import React from 'react'
import atom from '../assets/atom.png'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import github from '../assets/github.png'
import html from '../assets/html.jpg'
import java_script from '../assets/java-script.png'
import mysql from '../assets/mysql.png'
import tailwind from '../assets/tailwind.png'
import drf from '../assets/Django_REST.png'


export default function Experience() {
    const techs = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style:'shadow-blue-700',
        },
        {
            id:3,
            src:bootstrap,
            title: 'Bootstrap',
            style:'shadow-violet-500',
        },
        {
            id:4,
            src:tailwind,
            title: 'Tailwind',
            style:'shadow-sky-400',
        },
        {
            id:5,
            src:java_script,
            title: 'JavaScript',
            style:'shadow-yellow-600',
        },
        {
            id:6,
            src:github,
            title: 'Github',
            style:'shadow-gray-500',
        },
        {
            id:7,
            src:django,
            title: 'Django',
            style:'shadow-teal-500',
        },
        {
            id:8,
            src:atom,
            title: 'React',
            style:'shadow-sky-700',
        },
        {
            id:9,
            src:mysql,
            title: 'MySQL',
            style:'shadow-orange-500',
        },
        {
            id:10,
            src:drf,
            title: 'DRF',
            style:'shadow-red-500',
        },
    ]


  return (
    <div name='experience' className='bg-gradient-to-b from-gray-700 to-black w-full h-full py-12'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:pl-20 xl:pl-0'>
            <div className='py-8'>
                <p className='text-7xl font-signature pb-12'>Experience</p>
                <p className='text-xl'>These are the technologies I have worked with!</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-4'>

                {techs.map(({id, src, title, style})=>(
                    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 flex flex-col items-stretch justify-between rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-24 md:h-24 mx-auto' />
                         <p className='mt-4'>{title}</p>
                    </div>

                ))}
                
               
            </div>

        </div>

    </div>
  )
}
