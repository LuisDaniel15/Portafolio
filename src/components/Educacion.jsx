import React from 'react'
import Card from './compo/Card'
import { FaLaptopCode } from "react-icons/fa6";
import { FaReact, FaJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TfiMedallAlt } from "react-icons/tfi";
import { GoVerified } from "react-icons/go";
import { AiTwotoneCarryOut } from "react-icons/ai";



function Educacion() {
  return (
    <div className='mx-8'>
      <h1 className='text-center text-5xl p-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]'>Educacion</h1>
      <div className='flex gap-4 sm:flex-row flex-col [&>div]:w-[90%] items-center'>
        <div className={`bg-violet-200 shadow-xl p-5 rounded-md w-[50%] min-h-[200px] transition duration-200 hover:hover:shadow-sm `}>
          <h2 className='font-semibold text-xl p-2 flex gap-x-1'><TfiMedallAlt size={28} />Tecnico en sistemas informaticos.</h2>
          <p className='px-3 pt-2'>Centro inca</p>
          <p className='px-3 pt-2'>2021 - 2023</p>
        </div>
        <div className={`bg-purple-200 shadow-xl p-5 rounded-md w-[50%] min-h-[200px] transition duration-200 hover:hover:shadow-sm`}>
          <h2 className='font-semibold text-xl p-2 flex gap-x-1'><TfiMedallAlt size={28} />Estudiante de ingenieria de sistemas.</h2>
          <p className='px-3 pt-2'>Cul - Barranquilla</p>
          <p className='px-3 pt-2'>Actualmente.</p>
        </div>
      </div>

      <h2 className='font-semibold text-2xl px-8 py-5 [text-shadow:_0_2px_4px_rgb(70_70_40_/_0.8)]'>Conocimientos.</h2>
      <div className='flex gap-4 sm:flex-row flex-col [&>div]:w-[90%] items-center'>
        <div className={`bg-purple-200 shadow-xl p-5  rounded-md w-[48%] min-h-[350px] text-center transition duration-200 hover:hover:shadow-sm`}>
          <h1 className='text-xl font-medium p-3 pb-5 flex items-center gap-x-2'><FaLaptopCode size={25} color='2874a6' /> Herramientas de desarrollo</h1>
          <div className='flex justify-evenly'>
            <div className='[&>h2]: [&>h2]:p-1 pb-3'>
            <h1 className='text-lg p-2 font-medium flex items-center gap-x-2'><GoVerified />Nativas</h1>
              <h2>Html</h2>
              <h2>Css</h2>
              <h2>Javascript</h2>
              <h2>Python</h2>
              <h2>Sql</h2>
            </div>
            <div className='[&>h2]: [&>h2]:p-1 pb-5'>
              <h1 className='text-lg p-2 font-medium flex items-center gap-x-2'><GoVerified /> Bibliotecas</h1>
              <h2>React js</h2>
              <h2>Next js</h2>
              <h2>Tailwind</h2>
              <h2>Zustand</h2>
              <h2>Bootstrap</h2>
            </div>
          </div>

          <div className='flex justify-evenly gap-x-4 '>
            <FaReact size={25} color='2874a6' />
            <IoLogoJavascript size={25} color='FCCD2A' />
            <FaPython size={25} color='2874a6' />
          </div>
        </div>
        <div className='bg-violet-200 shadow-xl p-5 rounded-md w-[48%] max-h-[200px] text-center transition duration-200 hover:hover:shadow-sm'>
          <h1 className='text-xl font-medium p-5 flex justify-center items-center gap-2'><AiTwotoneCarryOut size={25}/>Habilidades</h1>
          <h2>Trabajo en equipo</h2>
          <h2>Compromiso</h2>
          <h2>Responsabilidad.</h2>
        </div>
      </div>

    </div>
  )
}

export default Educacion
