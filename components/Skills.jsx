import React from 'react'
import {html, github, javascript, mongo, nextjs, react, node, tailwind } from '../components/imports'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='p-8 items-center pt-16 text-center' >
        <h1 className='text-5xl text-medium tracking-widest text-gray-800 uppercase'>My Skills</h1>
             <div className='items-center justify-center grid grid-cols-2 py-16 md:grid-cols-4 gap-8'>
                <div className='m-auto'>
                    <Image src={html} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>HTML</p>
                </div>
                <div className='m-auto'>
                    <Image src={javascript} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>JavaScript</p>
                </div>
                <div className='m-auto'>
                    <Image src={tailwind} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>Tailwind CSS</p>
                </div>
                <div className='m-auto'>
                    <Image src={react} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>React</p>
                </div>
                <div className='m-auto'>
                    <Image src={nextjs} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>Next.js</p>
                </div>
                <div className='m-auto'>
                    <Image src={node} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>Node.js</p>
                </div>
                <div className='m-auto'>
                    <Image src={mongo} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>MongoDB</p>
                </div>
                <div className='m-auto'>
                    <Image src={github} width={64} height={64}  alt='/'/>
                    <p className='py-4 text-gray-500 text-base text-medium'>Github</p>
                </div>
             </div>
    </div>
  )
}

export default Skills