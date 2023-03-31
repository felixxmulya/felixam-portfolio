import React , { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub,} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='text-xl text-gray-700 tracking-widest '>Hi, my name is</p>
          <h1 className='py-4 text-5xl font-bold'>Felix Ardy Mulya</h1>
          <p className='py-4 text-xl text-gray-700 max-w-[70%] m-auto '>I'm a Software Engineer student at Tunghai University who is passionate about coding, especially in full stack development.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/felix-ardy-mulya-47747915b/' target='_blank' >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6
            cursor-pointer hover:scale-110 ease-in duration-400'>
                <FaLinkedinIn/>
              </div>
            </Link>
            <Link href='https://github.com/felixxmulya' target='_blank'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6
            cursor-pointer hover:scale-110 ease-in duration-400'>
              <FaGithub/>
            </div>
            </Link>

            <Link href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:c21c5ace-ea07-4f24-9a09-996437f4db88' target='_blank' >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6
            cursor-pointer hover:scale-110 ease-in duration-400'>
              <IoIosPaper/>
            </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main