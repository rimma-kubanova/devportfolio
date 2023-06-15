import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blog from '@public/assets/projects/blog.png'
import chatgpt3 from '@public/assets/projects/chatgpt3.png'
import nupogodi from '@public/assets/projects/nupogodi.png'
import pokemon from '@public/assets/pokemon.png'
import promptopia from '@public/assets/projects/promptopia.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='w-full mx-auto px-32 py-16 text-center'>
        <h1 className='text-5xl text-medium tracking-widest text-gray-800 uppercase'>Projects</h1>
            <p className='py-4 text-2xl'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title='ChatGPT-3' 
               backgroundImg={chatgpt3} 
               projectType='Front-End Project' 
               projectInfo = "ChatGPT-3 - a landing website created using React.js. It's a web template that can be used for promotion any product."
                tools='JavaScript, React'
                projectDemo='https://gpt3-website-io.vercel.app'
                projectCode='https://github.com/rimma-kubanova/gpt3_website.io.git'
                 />

                <ProjectItem title='TechTales' 
               backgroundImg={blog}
               projectType='Full-Stack Project' 
               projectInfo='TechTales, a platform for blogs powered by the MERN stack. The platform supports CRUD operations for users, authentification process and leaving comments! 
               '
               tools='JavaScript, React, Node.js, Express.js, MongoDB, Redux, Sass'
               projectDemo='https://blog-frontend-gray-two.vercel.app'
               projectCode='https://github.com/rimma-kubanova/blog-backend.git'
              />

                <ProjectItem title='"Nu Pogodi" Game' 
               backgroundImg={nupogodi} 
               projectType='Web Game Project' 
               projectInfo='A Web Game created using JavaScript from scratch for competition. The purpose of the game is to collect the eggs as much as possible. The Design is created by me.'
             tools='HTML, CSS, JavaScript'
             projectDemo='https://nu-pogodi-io.vercel.app'
             projectCode='https://github.com/rimma-kubanova/nu-pogodi.io.git'
             />

                <ProjectItem title='Promptopia' 
               backgroundImg={promptopia} 
               projectType='Full-Stack Project' 
               projectInfo='Promptopia, a website that allows users to share prompts for popular AI tools such as MidJourney, ChatGPT and etc. The website supports CRUD operations for users and created using Next.js.'
               tools='React, Next.js 13, MongoDB, Google OAuth API' 
               projectDemo='https://promptopia-io.vercel.app'
               projectCode='https://github.com/rimma-kubanova/promptopia.io.git'
               />
            </div>
        </div>
    </div>
  )
}

export default Projects