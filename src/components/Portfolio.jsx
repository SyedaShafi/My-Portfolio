import React from 'react'
import reactProject from '../assets/reactProject.jpg'
import recipeApp from '../assets/recipeApp.jpg'
import myTodo from '../assets/myTodo.jpg'
import cakeAndBake from '../assets/cakeAndBake.jpg'
import theRestaurant from '../assets/theRestaurant.jpg'
import wanderStay from '../assets/wanderStay.jpg'

export default function Portfolio() {

    const portfolios = [
        {
            id:1,
            src:myTodo,
            hrefDemo:'https://drf-todo-app.onrender.com/',
            hrefCode:'https://github.com/SyedaShafi/DRF_TODO_APP/tree/main',
        },
        {
            id:2,
            src:recipeApp,
            hrefDemo:'https://recipe-app-drf.onrender.com/',
            hrefCode:'https://github.com/SyedaShafi/Recipe_App_DRF/tree/main',
        },
        {
            id:3,
            src:reactProject,
            hrefDemo:'',
            hrefCode:'',
        },
        {
            id:4,
            src:cakeAndBake,
            hrefDemo:'https://regal-hotteok-8465bd.netlify.app/',
            hrefCode:'https://github.com/SyedaShafi/Cake-Shop',
        },
        {
            id:5,
            src:theRestaurant,
            hrefDemo:'https://remarkable-lolly-000606.netlify.app/',
            hrefCode:'https://github.com/SyedaShafi/My_Restaurant_Frontend',
        },
        {
            id:6,
            src:wanderStay,
            hrefDemo:'https://hotel-reservation-system.onrender.com/',
            hrefCode:'https://github.com/SyedaShafi/Hotel_Reservation_System/tree/main',
        },
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-700 w-full text-white h-auto'>

        <div className='max-w-screen-lg mx-auto py-28 flex flex-col justify-center w-full h-full lg:pl-20 xl:pl-0'>
            <div className='pb-8'>
                <p className='text-7xl font-signature pb-12 lg:px-0 px-4'>Portfolio</p>
                <p className='pb-12 lg:px-0 px-4 text-2xl font-medium text-gray-200'>Have a Look on some of my works</p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-4'>
                {/* all portfolios */}

                {portfolios.map(({id, src, hrefDemo, hrefCode})=>(
                        
                <div key={id} className='shadow-lg sm:h-80 h-64  w-full rounded-md shadow-gray-500'>
                    <div className='md:h-4/6 h-3/5 mx-auto'>
                        <img src={src} alt="" className='w-full h-full rounded-md    hover:scale-105 duration-500' />
                    </div>
                    <div className='flex justify-evenly items-center md:h-2/6 h-2/5'>

                        <button className=' w-1/2 px-5 py-1 rounded-lg font-semibold  shadow-md hover:shadow-stone-400 duration-500 m-4'><a href={hrefDemo} target='_blank' className='w-full h-full'>Demo</a></button>

                        <button className='w-1/2 px-5 py-1 rounded-lg font-semibold shadow-md hover:shadow-stone-400 duration-500 m-4'><a href={hrefCode} target='_blank' className='w-full h-full'>Code</a></button>

                    </div>
                </div>
                ))}

            </div>

        </div>

    </div>
  )
}
