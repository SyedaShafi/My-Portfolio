import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className='w-full h-20 bg-gradient-to-b  from-gray-800 to-gray-950'>
        <div className='grid grid-cols-1 w-full h-full'>
          <div className='text-gray-400 text-center pb-6 flex flex-col justify-end'>
            Copyright © 2024 - All right reserved
          </div>
          
        </div>
      </footer>
    </div>
  );
}
