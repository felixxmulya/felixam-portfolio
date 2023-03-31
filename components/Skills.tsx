import React from 'react'
import {FaCss3Alt,FaReact, FaPython, FaLaravel, FaGit, FaDocker, FaFigma, FaLinux, FaJava, FaHtml5} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiMysql, SiTailwindcss, SiPytorch, SiPython} from 'react-icons/si'
import {TbBrandNextjs, TbSql,} from 'react-icons/tb'


function Skills() {
  return (
    <div id='skills' className='w-full lg:h-full p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='my-4 tracking-widest uppercase text-right'>
          Skills
        </h2>
        <div className='border-b border-gray-400 my-4 mb-'>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <FaHtml5/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <FaCss3Alt/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <SiJavascript/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <SiTypescript/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <SiPython/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <TbSql/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SQL</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <FaLaravel/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Laravel</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <FaReact/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <SiTailwindcss/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6'>
              <FaDocker/>
            </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Docker</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills