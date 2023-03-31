import React, { useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Image from 'next/image'
import Link from 'next/link'
import voiceassistant from '../public/img/VA.png'
import hatchcloud from '../public/img/HC.png'
import zoo from '../public/img/zo.png'
import expense from '../public/img/expense.png'

function Projects() {
  useEffect(() => {
    Aos.init({duration: 2000});
 }, []);
  return (
    <div id='projects' className='w-full lg:h-screen p-2'>
      <div data-aos="fade-up" 
       
      className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='my-4 tracking-widest  uppercase'>
            Projects
        </h2>
        <div className='border-b border-gray-400 my-4 mb-'>
        </div>
        
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#001845] to-[#33415c]'>
            <Image 
            className='rounded-xl group-hover:opacity-10' 
            src={hatchcloud} 
            width='1800' 
            height='500' 
            alt="Hatch Cloud" 
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center mb-3'>Hatch Cloud E-Commerce</h3>
              <Link href='https://github.com/felixxmulya/HatchCloud-Website' target='_blank'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#001845] to-[#33415c]'>
            <Image 
            className='rounded-xl group-hover:opacity-10' 
            src={voiceassistant} 
            width='140' 
            height='300' 
            alt="Voice Assistant" 
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center mb-3'>Voice Assistant</h3>
              <Link href='https://github.com/felixxmulya/VoiceAssistant' target='_blank'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#001845] to-[#33415c]'>
            <Image className='rounded-xl group-hover:opacity-10' 
            src={zoo} 
            width='1800' 
            height='500' 
            alt="zoo" 
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center mb-3'>ZooKeeper Game</h3>
              <Link href='https://github.com/felixxmulya/Zookeeper' target='_blank' >
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#001845] to-[#33415c]'>
            <Image className='rounded-xl group-hover:opacity-10' 
            src={expense} 
            width='350' 
            height='500' 
            alt="Expense Tracker" 
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center mb-3'>Expense Tracker</h3>
              <Link href='https://github.com/felixxmulya/budget-tracker' target='_blank'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects