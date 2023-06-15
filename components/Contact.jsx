import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-slate-50'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <h1 className='py-4 uppercase text-center'>Get in Touch</h1>
            <p className='text-center text-2xl text-gray-600 py-4'>Feel free to contact me via Email!</p>
        <div>
            <div className='flex items-center justify-center py-4 gap-16'>
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

            <div className='flex justify-center py-12'>
                <Link href='#home'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-sky-500' size={30}/>
                </div>
                </Link>
            </div>
            </div>
            </div>
  )
}

export default Contact