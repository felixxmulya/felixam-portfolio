import React from 'react'
import Image from 'next/image'
import {AiFillHtml5} from 'react-icons/ai'

const About = () => {
  return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
         <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
               <h2 className='my-4 uppercase tracking-widest'>About</h2>
               <div className='border-b border-gray-400 my-4'>
               </div>
               <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus cum assumenda quo, natus eaque iste id amet repellat aut mollitia laborum voluptatem sequi magni maxime pariatur ipsam, aspernatur, corporis recusandae?</p>
               <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur quam perspiciatis laboriosam mollitia a incidunt exercitationem. Atque, dolores alias! Recusandae totam atque ex sunt distinctio cupiditate eius maiores id?</p>
               <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo explicabo laboriosam tempore maxime modi, perspiciatis corrupti sit sapiente ut, eius obcaecati perferendis voluptatibus quia iure veritatis incidunt vero fugit?</p>
            </div>
            <div className='w-auto h-auto m-auto  shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image className='rounded-full shadow-xl' src="/../public/fel.jpg" width='350' height='100' alt="" />
            </div>
         </div>
      </div>
  )
}

export default About