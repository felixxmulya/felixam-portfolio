import React,{ useEffect} from 'react'
import Aos from "aos"
import Image from 'next/image'
import "aos/dist/aos.css"
import {AiFillHtml5} from 'react-icons/ai'

const About = () => {
   useEffect(() => {
      Aos.init({duration: 1000});
   }, []);

  return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
         <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div 
            data-aos="fade-up"
            className='col-span-2'>
               <h2 className='my-4 uppercase tracking-widest'>About</h2>
               <div className='border-b border-gray-400 my-4'>
               </div>
               <p className='py-2 text-justify'>As a computer science student at Tunghai University, I am deeply passionate about full-stack development. From designing and developing the front-end to building robust back-end systems, I find joy in every step of the development process. Through various courses and projects at Tunghai University, I have gained proficiency in multiple programming languages, frameworks, and tools, such as HTML, CSS, JavaScript, React, Node.js, Laravel, and MongoDB.</p>
               <p className='py-2 text-justify'>I have also honed my problem-solving and critical thinking skills, enabling me to tackle complex challenges with ease. With the ever-evolving nature of technology, I am eager to continue learning and keeping up with the latest trends and advancements in the industry.</p>
            </div>
            <div  className='w-auto h-auto m-auto  shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image 
               data-aos="fade-up" 
               className='rounded-full shadow-xl' 
               src="/../public/images/fel.jpg" 
               width='350' 
               height='100' 
               alt="" />
            </div>
         </div>
      </div>
  )
}

export default About