'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import pokemon from '@public/assets/pokemon.png'   
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Navbar = () => {

  const [ nav,setNav ] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }



  return (
    <div className='fixed w-full h-24 shadow-xl z-[100] bg-white/50 backdrop-blur-lg'>
        <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
          <Link href='/#home'>
          <Image 
            src={pokemon}
            alt='/'
            width={50}
            height={50}          
          />
          </Link>
          <div>
            <ul className='hidden md:flex'>
              <Link href="/#home">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>Home</li>
              </Link>
              <Link href="/#about">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>About</li>
              </Link>
              <Link href="/#projects">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>Projects</li>
              </Link>
              <Link href="/#contact">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>Contact Me</li>
              </Link>
            </ul>

            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu  size={25}/>
            </div>
          </div>
        </div>
    
    <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-300' : 
    'fixed left-[-100%] top-0 p-8 ease-in duration-300' }>
        <div>
          <div className='flex w-full items-center justify-between'>
            <Image src={pokemon} alt='/' width={60} height={60}/>
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'><AiOutlineClose /></div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together!</p>
          </div>
        </div>


        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
          <Link href="/#home">
                <li onClick ={()=>setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href="/#about">
                <li onClick ={()=> setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href="/#projects">
                <li onClick ={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick ={()=> setNav(false)} className='py-4 text-sm'>Contact Me</li>
              </Link>
          </ul>

          <div className='pt-40'>
            <p className='uppercase tracking-widest text-sky-500'>Let's Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <Link href='https://www.linkedin.com/in/rimma-kubanova-a531081b5/'>
                    <div className='bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
        
                    </div>
                </Link>
                <Link href='https://github.com/rimma-kubanova'>
                    <div className='bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                </Link>
                <Link href='mailto:rimma.kubanova@gmail.com'>
                    <div className='bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar