/* eslint-disable react/no-unescaped-entities */
import React , { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub,} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io'
import logo from '../public/img/bg.png'


const Navbar = () => {
   const [nav, setNav] = useState(false);
   const [shadow, setShadow] = useState(false);
   const handleNav = () => {
      setNav(!nav);
   };

   useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

   return (
   <div 
   className={shadow ? 'fixed w-full h-20 shadow-xl bg-[#ecf0f3] z-[100]' 
   : 'fixed w-full h-20 bg-[#ecf0f3] z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
         <Link className='text-sm font-bold hover:border-b'href="/#home">
            <Image 
            src={logo} 
            width='60' 
            height='300' 
            alt="" />
         </Link> 
      <div>
         <ul className='hidden md:flex'>
            <Link href="/#home">
               <li className='ml-10 text-sm uppercase font-bold hover:border-b-2 border-black ' >Home</li>
            </Link>
            <Link href="/#about">
               <li className='ml-10 text-sm uppercase font-bold hover:border-b-2 border-black ' >About</li>
            </Link>
            <Link href="/#skills">
               <li className='ml-10 text-sm uppercase font-bold hover:border-b-2 border-black'>Skills</li>
            </Link>
            <Link href="/#projects">
               <li className='ml-10 text-sm uppercase font-bold hover:border-b-2 border-black'>Projects</li>
            </Link>
            <Link href="/#contacts" >
               <li className='ml-10 text-sm uppercase font-bold hover:border-b-2 border-black'>Contact</li>
            </Link>
         </ul>
         <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
         </div>
      </div>
   </div>
   <div onClick={() => setNav(false)} className={nav ? 'md:hidden fixed right-o top-0 w-full h-screen bg-black/70': ''}>
      <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[50%] md:w-[40%] h-screen bg-[#ecf0f3] p-3 ease-in duration-500 rounded-xl' : 'fixed right-[-100%] top-0 p-10 ease-in duration-500 '}>
         <div>
            <div className='flex w-full items-center justify-between'>
               <h2>Felix Mulya</h2>
               <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose/>
               </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
               <p className='w-[85%] md:2-[90%]'></p>
            </div>
         </div>
         <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
               <Link href="/#home">
                  <li onClick={() => setNav(false)} className='py-4 text-base font-bold'>Home</li>
               </Link>
               <Link href="/#about">
                  <li onClick={() => setNav(false)} className='py-4 text-base font-bold'>About</li>
               </Link>
               <Link href="/#skills">
                  <li onClick={() => setNav(false)} className='py-4 text-base font-bold'>Skills</li>
               </Link>
               <Link href="/#projects">
                  <li onClick={() => setNav(false)} className='py-4 text-base font-bold'>Projects</li>
               </Link>
               <Link href="/#contacts">
                  <li onClick={() => setNav(false)} className='py-4 text-base font-bold'>contact</li>
               </Link>
            </ul>
            <div className='pt-40'>
               <p className='uppercase tracking-widest font-bold'>Let's Connect</p>
               <div className='flex items-center justify-between my-5 w-full sm:w-[60%]'>
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

            <Link href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f64d282e-89e5-41fb-8def-70c49e1e5e45' target='_blank' >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6
             cursor-pointer hover:scale-110 ease-in duration-400'>
              <IoIosPaper/>
            </div>
            </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>

</div>
  );
};

export default Navbar