import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'


export default function Portfolio() {
    const API = import.meta.env.VITE_PORTFOLIO
    const[portfolios, setPortfolios] = useState([])
    const [loading, setLoading] = useState(true)


useEffect(()=>{
    axios.get(API)
    .then((res)=>{
        // console.log(res.data);
        setPortfolios(res.data);
        setLoading(false)
    }).catch((err)=>{
        console.log(err);
        setLoading(false)

    })
}, [])

  return (
    <div name='portfolio' className='bg-gradient-to-b from-gray-700 to-black w-full text-white h-auto'>

        <div className='max-w-screen-lg mx-auto py-28 flex flex-col justify-center w-full h-full lg:pl-20 xl:pl-0'>
            <div className='pb-8'>
                <p className='text-7xl font-signature pb-12 lg:px-0 px-4'>Portfolio</p>
                <p className='pb-12 lg:px-0 px-4 text-2xl font-medium text-gray-200'>Have a Look on some of my works</p>
            </div>

            {loading ? (<div className='text-center'> <PulseLoader size={30} color="#9abcb5" ></PulseLoader></div>): (
                   <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-4'>
                {/* all portfolios */}

                {portfolios.map(({id, image, code_link, live_link})=>(
                        
                <div key={id} className='shadow-lg sm:h-80 h-64  w-full rounded-md shadow-gray-500'>
                    <div className='md:h-4/6 h-3/5 mx-auto'>
                        <img src={image} alt="" className='w-full h-full rounded-md    hover:scale-105 duration-500' />
                    </div>
                    <div className='flex justify-evenly items-center md:h-2/6 h-2/5'>

                        <button className=' w-1/2 px-5 py-1 rounded-lg font-semibold  shadow-md hover:shadow-stone-400 duration-500 m-4'><a href={live_link} target='_blank' className='w-full h-full'>Demo</a></button>

                        <button className='w-1/2 px-5 py-1 rounded-lg font-semibold shadow-md hover:shadow-stone-400 duration-500 m-4'><a href={code_link} target='_blank' className='w-full h-full'>Code</a></button>

                    </div>
                </div>
                ))}

            </div>
            )}

         

        </div>

    </div>
  )
}
