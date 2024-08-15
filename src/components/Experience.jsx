import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { PulseLoader } from 'react-spinners'

export default function Experience() {

    const API = import.meta.env.VITE_EXPERIENCE
   
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(API)
        .then((res)=>{
            // console.log(res.data)
            setTechs(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
    })
    }, [API])


  return (
    <div name='skills' className='bg-gradient-to-b from-black to-gray-700 w-full h-full py-12'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:pl-20 xl:pl-0'>

            <div className='py-8'>
                <p className='text-7xl font-signature pb-12'>Skills</p>
                <p className='text-xl'>These are the technologies I have worked with!</p>
            </div>

            {loading ? (<div className='text-center'> <PulseLoader size={30} color="#9abcb5" ></PulseLoader></div> ): (
                
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-4'>
                {techs.map((tech)=>(
                  
               
                    <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 flex flex-col items-stretch justify-between rounded-lg  ${tech.style}`}>
                        <img src={tech.src} alt="" className='w-24 md:h-24 mx-auto' />
                         <p className='mt-4'>{tech.title} </p>
                    </div>

                ))}               
            </div>
            )}


        </div>

    </div>
  )
}
