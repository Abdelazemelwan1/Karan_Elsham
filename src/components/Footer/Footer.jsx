import React, { useEffect, useState } from 'react'
import Style from "./Footer.module.css"
import { Link } from 'react-router-dom'
import yalla from "../../assets/logo-b9d2b334.svg"



export default function Footer() {
  return <>
    <div>
      <br/>
      <h2 className='border-2 border-transparent border-t-amber-50 border-b-amber-50 py-10 text-center text-xl'>مطعم كرم الشام للمأكولات السورية</h2>

    <div className="flex items-center py-3 pb-6 justify-between container max-w-[90%]   sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem]  xl:max-w-[74rem]  2xl:max-w-[88rem]  mx-auto mt-[30px]">
      <Link className='border-2 border-[#593015] rounded-4xl text-[#593015] px-6 py-3 bg-[#fcbb3d] font-bold' to={""}> الملاحظات والتقديم  </Link>
      <h2 className='flex items-center gap-2'>مقدّم من <Link to={"https://www.yallaplus.com/"}><img src={yalla}/></Link> </h2>
    </div>
    </div>
  </>
}
