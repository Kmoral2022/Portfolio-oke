import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>


     {/* COntainer */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Oke Omoge</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400 sm:text-red-500'>I'm a junior Software Developer,</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>I'm a junior fullstack developer specializing in building (and ocassionally designing) exceptional digital 
            experiences. Currently, I'm focused in teaching young mind programming in the rural environment.
        </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' /> 
            </span>
             </button>
        </div>

     </div>
    </div>
  )
}

export default Home