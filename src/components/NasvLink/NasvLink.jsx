import React, { useEffect, useState } from 'react'
import Style from "./NasvLink.module.css"
import { NavLink } from 'react-router-dom'



export default function NasvLink() {
  return <>
  <div className='py-3 px-3 md:mt-3 flex items-center justify-center border-4 border-transparent border-b-[#dea739]'>
        {/* <Link to={""}> كــــــــرم الشــــــــام</Link> */}
        <ul className='flex gap-5 md:gap-6  '>
          <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={""}> الرئيسية</NavLink></li>
          <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={"/about"}>عن المطعم</NavLink></li>
          <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={"/menu"}>المنيو</NavLink></li>
          <li><NavLink className='bordlogo relative text-xl md:text-2xl' to={"/contact"}> تواصل معنا </NavLink></li>
        </ul>
        </div>
  </>
}
