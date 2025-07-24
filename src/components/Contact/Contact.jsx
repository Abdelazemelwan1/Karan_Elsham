import React, { useEffect, useState } from 'react'
import Style from "./Contact.module.css"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { Link } from 'react-router-dom'



export default function Contact() {
  return <>
  <div className=' max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto'>

    <div className='text-center my-5'>
      <h1 className='font-normal text-[40px] text-[#202435]'>تواصل معنا</h1>
      <p className='font-medium text-[18px] text-[#202435] max-w-[460px] mx-auto'> نحن هنا لخدمتك. تواصل معنا لحجز طاولة أو الاستفسار عن خدماتنا.
      </p>
    </div>
    <div className='grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_2fr_2fr_1fr] gap-5 my-9 m-auto'>
      <div className='bg-[#F3F3F6] border border-[#EDEEF5] rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
        <FaMapMarkerAlt className='text-[#E2B354] text-center m-auto text-3xl mb-2.5' />
        <h3 className='font-bold text-[20px] text-[#E2B354]'>العناوين</h3>
        <h3 className='font-semibold text-[16px] text-[#E2B354]'>
          فرع السادس من أكتوبر -

          فرع القاهرة -

          فرع فيصل -

          فرع شبرا -

          فرع حلوان -

          فروع الإسكندرية -

          فرع مصر الجديدة -

          فرع المنصورة -

          فرع المعادي
        </h3>
      </div>
      <div className='bg-[#F3F3F6] border border-[#EDEEF5] rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
        <MdOutlineMail className='text-[#E2B354] text-center m-auto text-3xl mb-2.5' />
        <h3 className='font-bold text-[20px] text-[#E2B354]'>البريد الإلكتروني</h3>
        <h3 className='font-semibold text-[16px] text-[#E2B354]'>contact@logodalil.com</h3>
        <h3 className='font-semibold text-[16px] text-[#E2B354]'>reservations@restaurantelite.sa</h3>
      </div>
      <div className='bg-[#F3F3F6] border border-[#EDEEF5] rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
        <MdOutlineMail className='text-[#E2B354] text-center m-auto text-3xl mb-2.5' />
        <h3 className='font-bold text-[20px] text-[#E2B354]'>ساعات العمل </h3>
        <h3 className='font-semibold text-[16px] text-[#E2B354]'>السبت - الخميس: 12:00 صباحاً - 12:00 مساءً</h3>
        <h3 className='font-semibold text-[16px] text-[#E2B354]'>الجمعة: 2:00 صباحاً - 12:00 مساءً</h3>
      </div>
      <div className='bg-[#F3F3F6] border border-[#EDEEF5] rounded-[7px] py-[31px] px-2.5 xl:px-[33px] text-center space-y-2 hover:scale-105 [transition:all_.4s]'>
        <FiPhoneCall  className='text-[#E2B354] text-center m-auto text-3xl mb-2.5' />
        <h3 className='font-bold text-[20px] text-[#E2B354]'>رقم الهاتف</h3>
        <h3 className='font-semibold text-[16px] text-[#E2B354]'>19509</h3>
      </div>
    
      
    </div>

    <div className="isolate  my-20 px-6 py-24 sm:py-15 lg:px-8 bg-[#FFFFFF01] border border-[#EDEEF5] rounded-[7px] shadow  [box-shadow:0px_0px_60px_0px_rgba(0,0,0,0.08)] ">

      <div className="mx-auto max-w-2xl text-center border border-transparent border-b-[#EDEEF5] pb-[57px] space-y-2">
        <h2 className='text-[#202435] font-normal text-[40px] '>أرسل رسالة</h2>
        <p className='font-medium text-[17px] text-[#202435] '>
اتصل بنا لطرح جميع أسئلتك وآرائك، أو يمكنك حل مشاكلك في وقت أقصر مع مكاتب الاتصال لدينا.</p>
      </div>
      
      <form action="#" method="POST" className="mx-auto mt-13 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-[16px] font-semibold leading-6 text-[#202435]">الأسم</label>
            <div className="mt-2.5 focus:border-none  focus:outline-none">
              <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="focus:border-troutline-transparent  focus:outline-transparent bg-[#F3F4F7] block w-full rounded-[4px] outline-none  border-0 px-4 py-3.5 text-gray-900 focus:border-amber-500  placeholder:text-gray-400  sm:text-sm " placeholder='اسمك' />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-[16px] font-semibold leading-6 text-[#202435]">البريد الإلكتروني</label>
            <div className="mt-2.5">
              <input type="email" placeholder='البريد الإلكتروني' name="last-name" id="email" autoComplete="email" className="bg-[#F3F4F7] block w-full rounded-[4px] outline-none focus:outline-none border-0 px-4 py-3.5 text-gray-900 focus:border-amber-500  placeholder:text-gray-400  sm:text-sm " />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-[16px] font-semibold leading-6 text-[#202435]">رقم الهاتف</label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">Country</label>
                <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                  <option>UK</option>
                  <option>YE</option>
                  <option>MA</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
              <input placeholder='رقم الهاتف' type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="bg-[#F3F4F7] ps-24 block w-full rounded-[4px] outline-none focus:outline-none border-0 px-4 py-3.5 text-gray-900 focus:border-amber-500  placeholder:text-gray-400  sm:text-sm " />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-[16px] font-semibold leading-6 text-[#202435]">الرسالة</label>
            <div className="mt-2.5">
              <textarea placeholder='أكتب رسالة هنا' name="message" id="message" rows={4} className="resize-none bg-[#F3F4F7] block w-full rounded-[4px] outline-none focus:outline-none border-0 px-4 py-3.5 text-gray-900 focus:border-amber-500  placeholder:text-gray-400  sm:text-sm " defaultValue={""} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link type="submit" className="bg-[#202435] hover:bg-[#303756]    rounded-[4px] block w-fit  px-3.5 py-2.5 text-center text-sm font-medium text-[#FFFFFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">إرسال الرسالة</Link>
        </div>
      </form>
    </div>
  </div>


  </>
}
