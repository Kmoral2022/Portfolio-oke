import React from 'react';
import AzureImage from '../assets/Azure.png';
import CssImage from '../assets/css.png';
import GithubImage from '../assets/github.png';
import HtmlImage from '../assets/html.png';
import JavascriptImage from '../assets/javascript.png';
import MongoImage from '../assets/mongo.png';
import NodeImage from '../assets/node.png';
import ReactImage from '../assets/react.png';
import SqlImage from '../assets/Sql.png';
import TailwindImage from '../assets/tailwind.png';
import TroubleImage from '../assets/TroubleShooting.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-700  text-gray-300'>
        {/*Containers*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
            <p className='py-4 '>These are the techonologies have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-blue-500 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={AzureImage} alt='Azure'/>
                <p className='text-center'>Azure</p>
            </div>
            <div className='shadow-md shadow-white hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={CssImage} alt='CSS'/>
                <p className='text-center'>CSS</p>
            </div>
            <div className='shadow-md shadow-zinc-200 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={GithubImage} alt='Github'/>
                <p className='text-center'>Github</p>
            </div>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={JavascriptImage} alt='Java'/>
                <p className='text-center'>Javascript</p>
            </div>
            <div className='shadow-md shadow-green-500 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={MongoImage} alt='Mongo'/>
                <p className='text-center'>MongoDB</p>
            </div>
            <div className='shadow-md shadow-green-200 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={NodeImage} alt='Node'/>
                <p className='text-center'>Nodejs</p>
            </div>
            <div className='shadow-md shadow-blue-300 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={ReactImage} alt='React'/>
                <p className='text-center'>React</p>
            </div>
            <div className='shadow-md shadow-blue-500 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={SqlImage} alt='Sql'/>
                <p className='text-center'>SQL Server</p>
            </div>
            <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={TailwindImage} alt='Tailwind'/>
                <p className='text-center'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-sky-200 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={TroubleImage} alt='TS'/>
                <p className='text-center'>Trouble Shooting</p>
            </div>
            <div className='shadow-md shadow-red-900 hover:scale-110 duration-500'>
                <img className='w-24 block mx-auto' src={HtmlImage} alt='HTML'/>
                <p className='text-center'>HTML</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Skills