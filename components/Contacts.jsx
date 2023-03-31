import React from 'react'
import Link from 'next/link'
import {FaLinkedinIn, FaGithub,} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io'

function Contacts() {
  return (
   <div id='contacts' className='w-full p-2'>
      <div className='max-w-[1240px]  mx-auto px-2 py-16'>
         <h2 className='my-4 tracking-widest text-center uppercase'>
            Contact
         </h2>
         <div className='text-center'>
          <p className='py-4 text-xl text-gray-700 max-w-[70%] m-auto '>I am available for freelance or full-time positions. <br /> Please feel free to contact me and let's talk.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-5'>
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

export default Contacts