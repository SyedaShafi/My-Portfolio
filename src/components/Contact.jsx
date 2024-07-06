import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import gmail from '../assets/gmail.png';
import address from '../assets/location-pin.png';
import phoneImg from '../assets/phone.png';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';
export default function Contact() {
  const [copySuccessMessage, setCopySuccessMessage] = useState('');
  const [copySuccessMessagePhone, setCopySuccessMessagePhone] = useState('');
  const [msgState, setMsgState] = useState(false);
  const [msgStatePhone, setMsgStatePhone] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [instructionsPhone, setInstructionsPhone] = useState('');
  const email = 'syedashafi4@gmail.com';
  const phone = '01744231929';
  const style = 'opacity-0';

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('');
      setCopySuccessMessagePhone('');
      setMsgState(false);
      setMsgStatePhone(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage, copySuccessMessagePhone]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} copied to clipboard!`);
    setInstructions('');
  }

  function copyPhone() {
    navigator.clipboard.writeText(phone);
    setCopySuccessMessagePhone(`${phone} copied to clipboard!`);
    setInstructionsPhone('');
  }

  function showInstruction() {
    setMsgState(true);
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`Click to copy!`);
  }
  function showInstructionPhone() {
    setMsgStatePhone(true);
    if (copySuccessMessagePhone) {
      return;
    }
    setInstructionsPhone(`Click to copy!`);
  }

  function hideInstruction() {
    setMsgState(false);
    setInstructions('');
  }
  function hideInstructionPhone() {
    setMsgStatePhone(false);
    setInstructionsPhone('');
  }
  // -----------------------------------------------------------------form submit handling--------------------------------------------------------
  const API = import.meta.env.VITE_CONTACT;
  const [formSuccessMsg, setFormSuccessMsg] = useState('');
  const [formErrorMsg, setFormErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };
  let messageTimeOut;
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(API, formData)
      .then((res) => {
        setLoading(false);
        setFormData(initialFormData);
        setFormSuccessMsg('Email sent successfully!');
        setFormErrorMsg('');
        clearTimeout(messageTimeOut);
        messageTimeOut = setTimeout(() => {
          setFormSuccessMsg('');
        }, 5000);
      })
      .catch((err) => {
        setFormErrorMsg('Some error occured.Please try again!');
        setFormSuccessMsg('');
        clearTimeout(messageTimeOut);
        messageTimeOut = setTimeout(() => {
          setFormErrorMsg('');
        }, 5000);
      });
  };

  return (
    <div
      name='contact'
      className='w-full h-full bg-gradient-to-b from-black to-gray-700 p-4 text-white lg:pl-20 xl:pl-0 '
    >
      <div className='flex flex-col py-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-7xl font-signature pb-12'>Contact</p>
          <p className='text-xl'>Please Fill This Form To Reach Me!</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-12 justify-center items-start max-w-screen-lg w-full h-full mx-auto'>
        <div>
          {loading ? (
            <div className='md:mt-8 lg:text-start text-center'>
              <SyncLoader color='#676f6e' size={20} />
            </div>
          ) : (
            <form
              className='flex flex-col w-full  md:mb-20'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                name='name'
                value={formData.name}
                placeholder='Enter Your Name'
                onChange={handleChange}
                required
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />

              <input
                type='email'
                name='email'
                value={formData.email}
                placeholder='Enter Your Email'
                onChange={handleChange}
                required
                className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />

              <textarea
                name='message'
                value={formData.message}
                placeholder='Enter Your Message'
                row='10'
                onChange={handleChange}
                required
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                id=''
              ></textarea>

              <button className='group flex w-full justify-center items-center bg-gradient-to-r from-blue-400 via-blue-700 to-blue-950 px-6 py-3 rounded-lg text-xl font-medium my-3 '>
                <span className=''>Shoot</span>
                <span className=''>
                  <IoIosArrowRoundForward className='h-10 w-10 group-hover:translate-x-24 group-hover:opacity-0 duration-700 transition-all' />
                </span>
              </button>
              {formErrorMsg && (
                <p className='text-red-600 font-semibold text-xl'>
                  {formErrorMsg}
                </p>
              )}
              {formSuccessMsg && (
                <p className='text-green-600 font-semibold text-xl'>
                  {formSuccessMsg}
                </p>
              )}
            </form>
          )}
        </div>

        <div>
          <div className='flex flex-col w-full h-ful pb-24 md:text-xl'>
            <div
              className=' w-full h-full px-2 py-4 rounded-md relative'
              onClick={copyEmail}
              onMouseOver={showInstruction}
              onMouseOut={hideInstruction}
            >
              {msgState && (
                <p
                  className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-md text-center md:py-4 lg:${style} hover:opacity-100 duration-500`}
                >
                  {' '}
                  {copySuccessMessage || instructions}{' '}
                </p>
              )}

              <div>
                <img
                  src={gmail}
                  className='lg:w-12 w-9 h-full inline px-2'
                  alt=''
                />
                <p className='inline w-full h-full'>
                  {' '}
                  Email: syedashafi4@gmail.com
                </p>
              </div>
            </div>

            <div
              className='py-4  px-2 rounded-md my-4 relative'
              onClick={copyPhone}
              onMouseOver={showInstructionPhone}
              onMouseOut={hideInstructionPhone}
            >
              {msgStatePhone && (
                <p
                  className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-500 rounded-md text-center py-4 lg:${style} hover:opacity-100 duration-500`}
                >
                  {' '}
                  {copySuccessMessagePhone || instructionsPhone}{' '}
                </p>
              )}

              <div>
                <span>
                  <img
                    src={phoneImg}
                    className='lg:w-12 w-9 h-full inline px-2'
                    alt=''
                  />
                  Phone:
                </span>
                <p className='inline w-full h-full'> +8801744231929 </p>
              </div>
            </div>

            <div className='px-2 py-4 rounded-md flex '>
              <img
                src={address}
                className='lg:w-12 w-9 h-full inline px-2'
                alt=''
              />

              <p> Address: Moulvibazar, Sylhet, BD. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
