import React from 'react'
import Image from 'next/image'
import aboutme from '@public/assets/aboutme.JPG'
const About = () => {
  return (
    <div id='about' className='w-full p-4 items-center py-16 bg-slate-50'>
        <div className='w-full p-8 border-l-2 text-center'>
        <h1 className='text-5xl text-medium tracking-widest text-gray-800 uppercase'>About Me</h1>
        </div>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-20 px-5 '>
            <div className='col-span-2 '>
                <h2 className='text-2xl py-4'>Get to know me!</h2>
                <p className='py-2 text-lg text-gray-600'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>

                <p className='py-2 text-lg text-gray-600'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>

                <p className='py-2 text-lg text-gray-600'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            </div>
            <div className=' h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-10'>
                <Image className='rounded-xl  ' src={aboutme} alt='/'/>
            </div>
        </div>
    </div>
    
  )
}

export default About