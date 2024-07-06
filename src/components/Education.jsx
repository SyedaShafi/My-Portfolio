import React from 'react';

export default function Education() {
  return (
    <div
      name='education'
      className='w-full h-full bg-gradient-to-b from-black to-gray-700 text-white'
    >
      <div className='max-w-screen-lg mx-auto py-12 px-4 flex flex-col justify-center w-full h-full lg:pl-20 xl:pl-0 '>
        <div className='pb-12'>
          <p className='text-7xl font-signature'>Education</p>
        </div>

        <div className='bg-gray-800 shadow hover:shadow-green-50 duration-300 overflow-hidden sm:rounded-lg mb-6'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg font-medium leading-6 text-gray-200'>
              Bachelor of Science in Computer Science and Engineering
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>
              Institution: Sylhet Engineering College, Sylhet.
            </p>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>
              Graduation Year: May 2024
            </p>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>CGPA: 3.79</p>
          </div>
        </div>

        <div className='bg-gray-900 shadow hover:shadow-green-50 duration-300 overflow-hidden sm:rounded-lg mb-6'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg font-medium leading-6 text-gray-200'>
              Higher Secondary Certificate (HSC)
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>
              Institution: Suja Memorial College, Shamsher Nagar.
            </p>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>
              Graduation Year: July 2018
            </p>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>GPA: 5.00</p>
          </div>
        </div>

        <div className='bg-gray-950 shadow hover:shadow-green-50 duration-300 overflow-hidden sm:rounded-lg mb-6'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg font-medium leading-6 text-gray-200'>
              Secondary School Certificate (SSC)
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>
              Institution: A. A. T. M. Bohumukhi High School, Shamsher Nagar.
            </p>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>
              Graduation Year: May 2016
            </p>
            <p className='mt-1 max-w-2xl text-sm text-gray-200'>GPA: 5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
