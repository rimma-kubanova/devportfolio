import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, projectType, projectInfo, tools, projectCode, projectDemo}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
                rounded-xl p-4 group flex-col'>
                    <Image
                    className='rounded-xl group-hover:opacity-90' 
                    src={backgroundImg}
                    alt='/'
                    />
        <div className='col-span-4 py-4'>
        <h3 className='text-2xl text-gray-800 tracking wider text-center'>{title}</h3>
        <div className=''>
          <p className='text-medium text-lg text-gray-500'>{projectType}</p>
          <p className='text-gray-700 text-2xl pt-4 px-4'> {projectInfo}</p>
          <p className='text-gray-500 text-2xl pt-6 px-4 text-medium'>Tools: {tools}</p>
          </div>
          <div className='items-end justify-center py-4'>
            <Link href={projectDemo}>
          <button className='px-12 py-4 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href={projectCode}>
          <button className='px-12 py-4 mt-4 mr-8'>Code</button>
          </Link>
          </div>
        </div>
                </div>
  )
}

export default ProjectItem