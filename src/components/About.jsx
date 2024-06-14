import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-gray-700 to-black text-white'>
        <div className='max-w-screen-lg mx-auto py-12 px-4 flex flex-col justify-center w-full h-full lg:pl-20 xl:pl-0 '>
            <div className='pb-12'>
                <p className='text-7xl font-signature'>About</p>
            </div>
            <p className='text-xl'>
             
                 Hi ther, I am Syeda Gulnaj Akther. I am a full stack developer. For front-end, I am proficient in HTML, CSS, JavaScript, and modern frameworks like React. I also have experience with design tools such as Tailwind and Bootstrap, which help me craft responsive and visually appealing user interfaces.  On the back-end, I specialize in Django and DRF, leveraging their powerful capabilities to build dynamic and secure server-side applications. I am well-versed in database management with MySQL, ensuring data integrity and optimal performance.
            </p>

            <br />
            <p className='text-xl'>
                 My knowledge extends to software development principles like Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP), which I apply to write clean, efficient, and maintainable code. I am also familiar with version control using Git and GitHub, which helps me collaborate effectively with other developers and manage code changes systematically. Whether it's developing user-friendly interfaces or robust back-end systems, I am committed to delivering high-quality solutions that meet the unique needs of each project. Let's build something great together!
            </p>

             
        </div>
    </div>
  )
}
