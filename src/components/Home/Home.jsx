import React, { useEffect, useState } from 'react'
import Style from "./Home.module.css"
import Elsohap from "../../assets/_16750278866235610 (1).jpeg"
import { Link } from 'react-router-dom';
import api from "../../api/recipes.js";
// import { FaStar } from 'react-icons/fa';
// import { FaStar } from 'react-icons/fa';
// import { FaRegStarHalfStroke, FaStarHalfStroke } from 'react-icons/fa6';
// import { FaStar } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from 'react-icons/fa6';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {
  const [offers, setOffers] = useState([])

async function callApi() {
  await api.get("/offer").then((res)=>{
    setOffers(res.data)
    console.log(res.data);
    

  }).catch((err)=>{
console.log(err);

  })
}


useEffect(() => {
  callApi()
}, [])
  useEffect(() => {
   AOS.init({duration: 1500})
  }, [])

  return <>
    <div className='text-center pt-7'>
      <img className='rounded-full w-24 border-2 text-center m-auto' src={Elsohap} alt="" />
      <h2 className='text-[#9f6a00]'>العروض</h2>
    </div>
    <div className='bg-[#DBB466] mt-4 pt-1 pb-7'>
      <div className="container max-w-[90%]   sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem]  xl:max-w-[74rem]  2xl:max-w-[88rem]  mx-auto mt-[70px]">
        {/* <h3>العروض</h3> */}
        <div className='flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4'>
          {offers.map((offer) => (


// data-aos="fade-down"
//      data-aos-easing="linear"
//      data-aos-duration="1500"
            
            <div {...(offer.id % 2 === 0 ?  { 'data-aos': 'fade-up' } 
              : {'data-aos': 'fade-down' ,
               'data-aos-easing' : 'linear',
               'data-aos-duration' : '1500'  
               })} 
     data-aos-duration="4000" key={offer.id} className='mt-5 group shadow-2xl py-6 px-4 rounded-2xl border border-amber-50/55'>
          <Link className='flex flex-col-reverse sm:flex-row justify-between items-center gap-6' to={""}>
            <div className='flex flex-col justify-between w-full'>
              <div className='space-y-3'>
                <h2 className='font-bold text-2xl'> {offer.name}</h2>
                <p className='font-medium text-xl'>{offer.description}</p>
              </div>
              <div className='flex justify-between mt-3'>
                <p className='bg-amber-400 w-fit p-2 px-4 rounded-xl'> price : {offer.price}EGP</p>
                <p className='flex gap-3 items-center'>
                  {offer?.star == 5.0 ? <FaStar className=' text-yellow-400 text-xl' />  : <FaRegStarHalfStroke className=' text-yellow-400 text-xl'/>}
                {offer?.star}
                </p>
              </div>
            </div>
            <img className='w-full h-[350px] sm:w-44 sm:h-44 rounded-2xl [filter:blur(2.5px)] group-hover:blur-none [transition:all_.9s]' src={offer.image} alt="" />
          </Link>
        </div>
          ))}
       

        </div>
      </div>
    </div>
  </>
}
