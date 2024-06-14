import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Contact() {

  const [copySuccessMessage, setCopySuccessMessage] = useState('')
  const [copySuccessMessagePhone, setCopySuccessMessagePhone] = useState('')
  const [msgState, setMsgState] = useState(false)
  const [msgStatePhone, setMsgStatePhone] = useState(false)
  const [instructions, setInstructions] = useState('')
  const [instructionsPhone, setInstructionsPhone] = useState('')
  const email = 'syedashafi4@gmail.com'
  const phone='01744231929'
  const style = 'opacity-0'

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('')
      setCopySuccessMessagePhone('')
      setMsgState(false)
      setMsgStatePhone(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copySuccessMessage, copySuccessMessagePhone])



  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopySuccessMessage(`${email} copied to clipboard!`)
    setInstructions('')
  }

  function copyPhone() {
    navigator.clipboard.writeText(phone)
    setCopySuccessMessagePhone(`${phone} copied to clipboard!`)
    setInstructionsPhone('')
  }

  function showInstruction() {
   setMsgState(true)
    if (copySuccessMessage) {
      return
    }
    setInstructions(`Click to copy!`)
  }
  function showInstructionPhone() {
   setMsgStatePhone(true)
    if (copySuccessMessagePhone) {
      return
    }
    setInstructionsPhone(`Click to copy!`)
  }

  function hideInstruction() {
    setMsgState(false)
    setInstructions('')
  }
  function hideInstructionPhone() {
    setMsgStatePhone(false)
    setInstructionsPhone('')
  }

  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-700 p-4 text-white lg:pl-20 xl:pl-0 '>
        <div className='flex flex-col py-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-7xl font-signature pb-12'>Contact</p>
                <p className='text-xl'>Please Fill the form To Reach Me!</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-12 justify-center items-start max-w-screen-lg w-full h-full mx-auto'>
            <form action="https://getform.io/f/paqgreqa" method='POST' className='flex flex-col w-full  mb-20' >

                <input 
                type="text" 
                name='name' 
                placeholder='Enter Your Name'
                required
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input 
                type="email" 
                name='email' 
                placeholder='Enter Your Email'
                required
                className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                <textarea 
                name="message" 
                placeholder='Enter Your Message'
                row='10' 
                required
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                id=""></textarea>

                <button className='group flex w-full justify-center items-center bg-gradient-to-r from-blue-400 via-blue-700 to-blue-950 px-6 py-3 rounded-lg text-xl font-medium my-3 '>
                      <span className=''>Shoot</span>
                    <span className=''>
                      <IoIosArrowRoundForward className='h-10 w-10 group-hover:translate-x-24 group-hover:opacity-0 duration-700 transition-all' />
                    </span>
                </button>

            </form>
            <div >
                
                <div className='flex flex-col w-full h-ful pb-24'>
                    <div className='border w-full h-full px-3 py-4 rounded-md relative' onClick={copyEmail} onMouseOver={showInstruction} onMouseOut={hideInstruction}>
                        {msgState && (
                            <p className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-md text-center md:py-4 lg:${style} hover:opacity-100 duration-500`}> {copySuccessMessage || instructions} </p>
                        )}

                        <div>
                        Email:
                            <p className='inline w-full h-full'> syedashafi4@gmail.com</p>      
                        </div>
                    </div>

                    <div className='py-4 border px-3 rounded-md my-4 relative'  onClick={copyPhone} 
                    onMouseOver={showInstructionPhone} onMouseOut={hideInstructionPhone}>
                         {msgStatePhone && (
                            <p className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-md text-center py-4 lg:${style} hover:opacity-100 duration-500`}> {copySuccessMessagePhone || instructionsPhone} </p>
                        )}

                        <div>
                        Phone:
                            <p className='inline w-full h-full'> 01744231929 </p>      
                        </div>
                    </div>

                    <div className='border px-3 py-4 rounded-md' >
                        Address: Moulvibazar, Sylhet, BD.
                    </div>

                </div>
            </div>


        </div>
    </div>
  )
}
