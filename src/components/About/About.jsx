import React, { useEffect, useState } from 'react'
import Style from "./About.module.css"
import { MdOutlineMail } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { FaMapMarkerAlt, FaPlus, FaStar } from 'react-icons/fa'
import { LuHeart } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function About() {
    useEffect(() => {
   AOS.init({duration: 1500})
  }, [])
  return <>
    <div className=' max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto'>
      <div className='text-center my-5'>
        <h1 className='font-normal text-[40px] text-[#202435]'>من نحن</h1>
        <p className='font-medium text-[18px] text-[#202435] max-w-[600px] mx-auto'> رحلة طهي استثنائية بدأت منذ أكثر من 15 عامًا، هدفها تقديم أفضل تجربة طعام تجمع بين النكهات الأصيلة والعرض العصري.</p>
      </div>

      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-5 my-9 m-auto '>
        <div  data-aos="fade-left" className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <h2 className='flex items-center justify-center gap-1.5 text-[#b14d06] text-3xl font-bold'> <FaStar />5</h2>
          <h3 className='font-bold text-[20px] text-[#E2B 354]'> تقييم العملاء </h3>
          
        </div>
        <div  data-aos="flip-left" className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <h2 className='flex items-center justify-center gap-1 text-[#b14d06] text-3xl font-bold'><FaPlus />200</h2>
          <h3 className='font-bold text-[20px] text-[#E2B 354]'>  طبق مميز
</h3>
          
        </div>
        <div data-aos="flip-right" className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <h2 className='flex items-center justify-center gap-1 text-[#b14d06] text-3xl font-bold'><FaPlus /> 50K</h2>
          <h3 className='font-bold text-[20px] text-[#E2B 354]'>  عميل راضٍ
</h3>
          
        </div>
        <div data-aos="fade-right" className=' border border-[#EDEEF5] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <h2 className='flex items-center justify-center gap-1 text-[#b14d06] text-3xl font-bold'> <FaPlus /> 15</h2>
          <h3 className='font-bold text-[20px] text-[#E2B 354]'>  سنة من الخبرة </h3>
          
        </div>
      </div>
      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-5 my-9 m-auto '>
        <div data-aos="fade-left"  className='group text-[#F3F3F6] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <div className="p-2 bg-[#e7e6e590] w-14 mx-auto rounded-full flex items-center justify-center         <FaMapMarkerAlt className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:bg-[#F97316] [transition:all_.9s]">
          <FaUserGraduate  className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:text-white [transition:all_.9s]' />
          </div>
          <h3 className='font-bold text-[20px] text-[#F3F3F6]'>حائز على جوائز</h3>
          <h3 className='font-semibold text-[16px] text-[#F3F3F6]'>حصلنا على جوائز أفضل مطعم لعدة سنوات متتالية.</h3>
        </div>
        <div data-aos="zoom-in" className='group text-[#F3F3F6] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <div className="p-2 bg-[#e7e6e590] w-14 mx-auto rounded-full flex items-center justify-center         <FaMapMarkerAlt className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:bg-[#F97316] [transition:all_.9s]">
            <LuHeart  className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:text-white [transition:all_.9s]' />
          </div>        
          <h3 className='font-bold text-[20px] text-[#F3F3F6]'>أجواء فريدة</h3>
          <h3 className='font-semibold text-[16px] text-[#F3F3F6]'>تصميم داخلي أنيق لتجربة طعام لا تُنسى.</h3>
        </div>
        <div data-aos="zoom-in" className='group text-[#F3F3F6] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <div className="p-2 bg-[#e7e6e590] w-14 mx-auto rounded-full flex items-center justify-center         <FaMapMarkerAlt className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:bg-[#F97316] [transition:all_.9s]">
            <BsFillPeopleFill className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:text-white [transition:all_.9s]' />
          </div>
          <h3 className='font-bold text-[20px] text-[#F3F3F6]'>فريق محترف </h3>
          <h3 className='font-semibold text-[16px] text-[#F3F3F6]'>طهاة ذوو خبرة عالية وطاقم خدمة استثنائي.</h3>
        </div>
        <div data-aos="fade-right" className='group text-[#F3F3F6] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 overflow-hidden'>
          <div className="p-2 bg-[#e7e6e590] w-14 mx-auto rounded-full flex items-center justify-center         <FaMapMarkerAlt className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:bg-[#F97316] [transition:all_.9s]">
            <IoFastFood  className='text-[#f97316] text-center m-auto text-3xl mb-2.5 group-hover:text-white [transition:all_.9s]' />
          </div>
          <h3 className='font-bold text-[20px] text-[#F3F3F6]'> طعام عالي الجودة</h3>
          <h3 className='font-semibold text-[16px] text-[#F3F3F6]'> أفضل المكونات الطازجة لتحضير أطباقنا.</h3>
        </div>
      </div>



      <div className='grid max-w-[90%] md:max-w-[75%] gap-5 my-9 m-auto'>
        <div data-aos="zoom-in" className='group text-[#F3F3F6] shadow-2xl rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
          <h1 className='font-bold text-[22px] text-black'> بادر بالحجز</h1>
          <h3 className='mb-5 font-semibold text-[16px] text-black'> احجز طاولتك الآن واستمتع بأشهى الأطباق في أجواء راقية وأنيقة.</h3>
          <Link to={"/"} className="  px-4 py-2 bg-gray-700 rounded-xl">أحجز الآن </Link>
        </div>
       
      </div>
    </div>
  </>
}
