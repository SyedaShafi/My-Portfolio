import React from 'react'
import { PulseLoader } from 'react-spinners'

export default function Preloader() {
  return (
    <div className='flex h-screen w-full justify-center items-center bg-gradient-to-b from-black to-gray-700'><PulseLoader color="#9abcb5" size={30} /></div>
  )
}
