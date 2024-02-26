import React,{ useEffect} from 'react'
import Aos from "aos"
import Image from 'next/image'
import "aos/dist/aos.css"
import {AiFillHtml5} from 'react-icons/ai'
import felix from '../public/img/fel.jpg'

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
               <p className='py-2 text-justify'>Hello! My name is Felix Ardy Mulya, and I&apos;m excited to share a bit about myself and my journey in the world of computer science. Graduating with a Bachelor of Engineering in Computer Science from Tunghai University in 2023 marked the beginning of my adventure in the tech industry. I am deeply passionate about full-stack development. From designing and developing the front-end to building robust back-end systems, I find joy in every step of the development process. </p>
               <p className='py-2 text-justify'>Through various courses and projects at Tunghai University, I have gained proficiency in multiple programming languages, such as HTML, CSS, JavaScript, Python. With a dedication to continuous learning, I&apos;m excited to learn more about different programming languages and gain expertise in a variety of coding techniques.</p>
            </div>
            <div  className='w-auto h-auto m-auto  shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image 
               data-aos="fade-up" 
               className='rounded-full shadow-xl' 
               src={felix} 
               width='350' 
               height='100' 
               alt="felix" />
            </div>
         </div>
      </div>
  )
}

export default About