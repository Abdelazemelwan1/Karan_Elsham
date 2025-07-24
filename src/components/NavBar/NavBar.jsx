import React, { useEffect, useState } from 'react'
import Style from "./NavBar.module.css"
// import styled from 'styled-components';

// import bglogo from "../../assets/default-cover.png"
// import bglogo from "../../assets/banner.jpg"
import bglogo from "../../assets/bg.jpg"
import logo from "../../assets/karam_el-sham_-_كــرم_الشــام_-_a.ashmawytala-co.sa_16749130157558198.jpeg"
import { Link, Links, NavLink } from 'react-router-dom';
import { FaCaravan, FaFacebook, FaInstagram, FaLink, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaTiktok, FaWhatsapp } from "react-icons/fa";
import NasvLink from '../NasvLink/NasvLink';




export default function NavBar() {
  return <>
    <nav className=''>
      <div className='w-full h-[40vh] md:h-[50vh] relative'>
      {/* <div className="w-[100%] h-[100vh]  bg-[url(https://d8aaen7rph5y9.cloudfront.net/app/mediafiles/t_1674749199_h74dut/restaurants/karam_el-sham_-_%D9%83%D9%80%D9%80%D8%B1%D9%85_%D8%A7%D9%84%D8%B4%D9%80%D9%80%D8%A7%D9%85_-_a.ashmawytala-co.sa_16749126885407512.jpeg)] [object-fit:cover] bg-no-repeat" ></div> */}
      <img className='w-full h-full' src={bglogo} alt="" />
      <div className='[transform:translateX(-50%)] flex items-center justify-center bottom-[-22%] absolute md:bottom-[-17%] left-[50%] rounded-full overflow-hidden'>
        <img className='w-24 h-32 ' src={logo} alt="" />
      </div>
      </div>
      <h1 className='mt-18 text-center font-bold text-2xl md:text-3xl'> كــــــــرم الشــــــــام   Karam EL-Sham </h1>
      <div className='flex items-center justify-center gap-6 mt-3'>
        <ul className='flex justify-center items-center gap-3'>
          <li className=''><Link to={"https://ww12.karam-elsham.com/?usid=20&utid=16507213943"}><FaLink   className='font-bold text-xl' /></Link></li>
          <li className=''><Link to={"tel:+2019509"}><FaPhoneAlt className='font-bold text-xl' /></Link></li>
          <li className=''><Link to={"https://api.whatsapp.com/send/?phone=201211748854&text&type=phone_number&app_absent=0"}><FaWhatsapp  className='font-bold text-xl' /></Link></li>
          <li className=''><Link to={"https://www.instagram.com/karamelshamfoods/"}><FaInstagram  className='font-bold text-xl' /></Link></li>
        </ul>
        <ul className='flex justify-center items-center gap-3'>
          <li className=''><Link to={"https://www.tiktok.com/@karamelshamegypt"}><FaTiktok  className='font-bold text-xl' /></Link></li>
          <li className=''><Link to={"https://www.facebook.com/karamelshaam/"}><FaFacebook  className='font-bold text-xl' /></Link></li>
          <li className=''><Link to={"https://www.google.com/maps/search/%D9%83%D8%B1%D9%85+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D9%85%D8%B5%D8%B1%E2%80%AD%E2%80%AD/@30.5614392,30.1404067,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"}><FaMapMarkerAlt className='font-bold text-xl' /></Link></li>
          <li className='rotate-y-180 '><Link><FaCaravan className='font-bold text-xl' /></Link></li>
        </ul>
      </div>
      {/* <div className=' py-3 px-3 md: mt-3 flex items-center justify-center border-4 border-transparent border-b-[#dea739]'>
      <ul className='flex gap-5 md:gap-6  '>
        <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={""}> الرئيسية</NavLink></li>
        <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={"/about"}>عن المطعم</NavLink></li>
        <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={"/menu"}>المنيو</NavLink></li>
        <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={"/contact"}> تواصل معنا </NavLink></li>
      </ul>
      </div> */}
<div className=' xxx'>

<NasvLink/>
</div>


    </nav>
  </>
}
