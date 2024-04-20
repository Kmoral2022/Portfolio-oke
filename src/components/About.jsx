import React from 'react';
import Typical from 'react-typical';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-500'>About</p>
                </div>
                <div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 md:gap-8'>
<div className='sm:text-right text-4xl font-bold '>
    <p>Hi. I'm <u className='text-red-040'>Oke</u>, nice meeting you. Please take a look around.</p>
</div>
<div >
    <p >I am passionate about building  excellent software that improves the lives of those around me.
        I can also learn re-learn and unlearn easily. What will you do if you had a committed sofware developer available at your fingertips?
    </p>
</div>
<div className='profile-details-role'>
    <span className='primary-text'>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            <Typical className='text-red-400 text-left'
                loop={Infinity}
                steps={[
                    "🚀 Ethusiastic Dev",
                    1500,
                    "💻 Intermediate Software Engineer",
                    1500,
                    "⚛️ React Developer",
                    1500,
                    "🌐 Full Stack Web Developer (Junior Level)",
                    1500,
                    "🎙️ An astute radio presenter",
                    1500,
                    "🎥 A Youtuber",
                    1500,
                ]}
            />
        </h1>
    </span>
</div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default About