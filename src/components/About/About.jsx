import React, { useEffect, useState } from 'react'
import Style from "./About.module.css"
import { MdOutlineMail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { FaMapMarkerAlt, FaPlus, FaStar } from 'react-icons/fa'



export default function About() {
  return <>
    <div className=' max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto'>
      <div className='text-center my-5'>
        <h1 className='font-normal text-[40px] text-[#202435]'>من نحن</h1>
        <p className='font-medium text-[18px] text-[#202435] max-w-[600px] mx-auto'> رحلة طهي استثنائية بدأت منذ أكثر من 15 عامًا، هدفها تقديم أفضل تجربة طعام تجمع بين النكهات الأصيلة والعرض العصري.</p>
      </div>

      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-5 my-9 m-auto'>
            <div className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
              <h2 className='flex items-center justify-center gap-1.5 text-[#b14d06] text-3xl font-bold'> <FaStar />5</h2>
              <h3 className='font-bold text-[20px] text-[#E2B 354]'> تقييم العملاء </h3>
              
            </div>
            <div className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
              <h2 className='flex items-center justify-center gap-1 text-[#b14d06] text-3xl font-bold'><FaPlus />200</h2>
              <h3 className='font-bold text-[20px] text-[#E2B 354]'>  طبق مميز
 </h3>
              
            </div>
            <div className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
              <h2 className='flex items-center justify-center gap-1 text-[#b14d06] text-3xl font-bold'><FaPlus /> 50K</h2>
              <h3 className='font-bold text-[20px] text-[#E2B 354]'>  عميل راضٍ
 </h3>
              
            </div>
            <div className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
              <h2 className='flex items-center justify-center gap-1 text-[#b14d06] text-3xl font-bold'> <FaPlus /> 15</h2>
              <h3 className='font-bold text-[20px] text-[#E2B 354]'>  سنة من الخبرة </h3>
              
            </div>
          
           
          
          
            
          </div>
    </div>
  </>
}
