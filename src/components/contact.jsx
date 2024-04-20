import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-current flex justify-center items-center p-4 '>

        <form method='POST' action="https://formsubmit.co/omoge82@gmail.com"  className='flex flex-col max-w-[600] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>
                    Contact
                </p>
                <p className='py-8 text-2xl text-gray-300'>Submit the form below or shoot me an email- omoge82@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="10" placeholder='message'></textarea>
            <button className='text-gray-300 border-2 border-white bg-black hover:bg-blue-600 px-4 py-3 my-8 rounded mx-auto flex items-center '>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;