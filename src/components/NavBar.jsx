import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'


export default function NavBar() {
    const [navBar, setNav] = useState(false)

    const navItems = [
        {
            id:1,
            link:'home'
        },
        
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'education'
        },
        {
            id:4,
            link:'portfolio'
        },
        {
            id:5,
            link:'experience'
        },
        {
            id:6,
            link:'contact'
        },

]
    
    return (
        <div className = 'flex justify-between items-center fixed w-full h-20 bg-black text-white z-50'>
            <div className = 'p-2 font-signature text-5xl'>Syeda Gulnaj</div>

            <div className='p-4 '> 
                <ul className = 'md:flex hidden'>
                    {
                        navItems.map(({id, link})=>( 
                        <li key={id} className='px-4 text-gray-400 hover:scale-105 font-medium duration-200 capitalize cursor-pointer'>
                            <Link to={link} smooth duration={700}>
                                {link}
                            </Link>
                            
                        </li>
                    ))}

                </ul>
            </div>

            <div onClick={()=>{setNav(!navBar)}} className='cursor-pointer z-10  md:hidden text-gray-400 pl-0 pr-4'>
                { navBar ?  <FaTimes size={30}/> : <FaBars size={30}/>  }
               
            </div>

             {navBar && (
                <ul className = 'flex flex-col justify-start items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-950 opacity-95'>
                    {
                        navItems.map(({id, link})=>( 
                        <li key={id} className='py-6 text-gray-50 cursor-pointer text-2xl capitalize'>
                            <Link to={link} smooth duration={500} onClick={()=>{
                                setNav(!navBar)
                            }} >{link}</Link>


                        </li>))
                    }

                </ul> 
                
            )}
          
        </div>
    )
}
