import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import '../styles/globals.css'
import Link from 'next/link'
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-[url("../public/assets/background.jpg")] bg-cover bg-no-repeat'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-6 text-gray-800 text-7xl'>HEI, I'M <span className='text-sky-500'>RIMMA KUBANOVA</span></h1>
                <p className='py-4 max-w-[70%] m-auto text-gray-800 text-2xl leading-10'>
                A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default Main