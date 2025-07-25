import React, { useEffect, useState } from 'react'
import Style from "./Footer.module.css"
import { Link } from 'react-router-dom'
import yalla from "../../assets/logo-b9d2b334.svg"
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok } from 'react-icons/fa'
import { IoMailOpenSharp } from 'react-icons/io5'



export default function Footer() {
  return <>
    <div>
      <br/>
      <h2 className='border-2 border-transparent border-t-amber-50 border-b-amber-50 py-10 text-center text-xl'>مطعم كرم الشام للمأكولات السورية</h2>


     <div className="flex items-center py-3  justify-between container max-w-[90%]   sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem]  xl:max-w-[74rem]  2xl:max-w-[88rem]  mx-auto mt-[30px]">
      <div className='grid text-center sm:text-start sm:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr_1fr] gap-6'>
        
        
        <div className='space-y-3.5'>
          <h1 className='font-bold text-2xl'>مطعم كرم الشام</h1>
          <p className='max-w-[90%]'>نقدم لك تجربة طعام استثنائية تجمع بين النكهات الأصلية والتقديم العصري. مطعمنا هو وجهتك المثالية للاستمتاع بأطباق شهية في أجواء راقية وأنيقة.</p>
          <ul className=' justify-center  space-x-2.5 flex items-center sm:justify-start'>
            <li className='bg-amber-500 transition-all duration-500 p-2.5 rounded-full text-white hover:bg-amber-600 hover:text-black'><Link to={"https://www.facebook.com/KaramLSham"} target='_blank'><FaFacebookF className='' /></Link></li>
            <li className='bg-amber-500 transition-all duration-500 p-2.5 rounded-full text-white hover:bg-amber-600 hover:text-black'><Link to={"https://www.instagram.com/karamelshamfoods"} target='_blank'><FaInstagram className='' /></Link></li>
            <li className='bg-amber-500 transition-all duration-500 p-2.5 rounded-full text-white hover:bg-amber-600 hover:text-black'><Link to={"https://www.tiktok.com/@karamelshamegypt"} target='_blank'><FaTiktok className='' /></Link></li>
          </ul>
        </div>
        <div className='space-y-3.5'>
          <h1 className='font-bold text-2xl'>روابط رئيسية</h1>
          <ul className=' space-y-1.5'>
            <li className=' transition-all duration-500   hover:text-white text-black text-xl'><Link to={""} >الرئيسية</Link></li>
            <li className=' transition-all duration-500   hover:text-white text-black text-xl'><Link to={"about"} >عن المطعم</Link></li>
            <li className=' transition-all duration-500   hover:text-white text-black text-xl'><Link to={"menu"} >المنيو</Link></li>
            <li className=' transition-all duration-500   hover:text-white text-black text-xl'><Link to={"/contact"} >تواصل معنا</Link></li>
          </ul>
        </div>
        <div className='space-y-3.5'>
          <h1 className='font-bold text-2xl'>معلومات التواصل</h1>
          <ul className=' space-y-1.5 flex flex-col items-center sm:items-start'>
            <li className=' transition-all duration-500   text-black text-xl flex items-center gap-1.5 '><FaMapMarkerAlt className='text-[#E17100]'/> شارع عباس العقاد القاهرة مصر </li>
            <li className=' transition-all duration-500   text-black text-xl flex items-center gap-1.5 '><FaPhoneAlt className='text-[#E17100]'/>201098770087+</li>
            <li className=' transition-all duration-500   text-black text-xl flex items-center gap-1.5 '><IoMailOpenSharp className='text-[#E17100]'/> talabat.com</li>
          </ul>
        </div>

      </div>
    </div>


    <div className="flex items-center py-3 pb-6 justify-between container max-w-[90%]   sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem]  xl:max-w-[74rem]  2xl:max-w-[88rem]  mx-auto mt-[30px]">
      <Link className='border-2 border-[#593015] rounded-4xl text-[#593015] px-6 py-3 bg-[#fcbb3d] font-bold' to={"contact"}> الملاحظات والتقديم  </Link>
      <h2 className='flex items-center gap-2'>مقدّم من <Link to={"https://www.yallaplus.com/"}><img src={yalla}/></Link> </h2>
    </div>

   
    </div>
  </>
}
