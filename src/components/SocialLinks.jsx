import React from 'react'

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export default function SocialLinks() {
    const liItems = [
      {
        id: 1,
        child: (
          <>
            LinkedIn
            <FaLinkedin size={35}></FaLinkedin>
          </>
        ),
        href: 'https://www.linkedin.com/in/syedagulnaj/',
        style: 'rounded-tr-md',
      },
      {
        id: 2,
        child: (
          <>
            GitHub
            <FaGithub size={35}></FaGithub>
          </>
        ),
        href: 'https://github.com/SyedaShafi',
      },
      {
        id: 3,
        child: (
          <>
            Mail
            <HiOutlineMail size={35}></HiOutlineMail>
          </>
        ),
        href: 'mailto:syedashafi4@gmail.com',
      },
      {
        id: 4,
        child: (
          <>
            Resume
            <BsFillPersonLinesFill size={35}></BsFillPersonLinesFill>
          </>
        ),
        href: 'https://drive.google.com/file/d/1rMRr1YKq4aHu-sBH2jVNlNlhbJwR8QX7/view?usp=sharing',
        style: 'rounded-br-md',
        download: true,
      },
    ];

  return (
    <div className='fixed top-[35%] left-0 hidden lg:flex flex-col'>
        <ul>
            {liItems.map(({id, child, href, style, download}) =>
            (
                <li key={id} className={`flex ml-[-98px] hover:ml-[-10px] justify-between items-center px-4 bg-gray-700 p-2 w-40 duration-500 ${style}`}>
                    <a 
                   
                    href={href}
                    className='text-white flex  justify-between items-center w-full' 
                    target='_blank'> 

                      {child}

                    </a>
                </li>

            ))}
          
        </ul>
    </div>
  )
}
