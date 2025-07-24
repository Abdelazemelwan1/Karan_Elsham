import React, { useEffect, useState } from 'react'
import Style from "./Menu.module.css"
import api from "../../api/recipes.js";
import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Menu() {
    const [recipes, setRecipes] = useState([])
  
    
  async function callApi() {
    await api.get("/recipes").then((res)=>{
      setRecipes(res.data)
      console.log(res.data);
      
  
    }).catch((err)=>{
  console.log(err);
  
    })
  }
   const [search, setSearch] = useState(" ")
let filterion = recipes.filter((day) => {
                  return search?.toLowerCase() == '' ? " " : day?.category.toLowerCase().includes(search);
          })
  
  useEffect(() => {
    callApi()
  }, [])
  
  useEffect(() => {
   AOS.init({duration: 1500})
  }, [])
  
  return <>
    <div> <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

       breakpoints={{
          440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 9,
            spaceBetween: 30,
          }
        }}
    >
      {recipes.map((recipe) => (

      <SwiperSlide className='text-center mt-3 '>
        <Link className=' flex justify-center flex-col items-center' to={`#menu${recipe.id}`}>
          <img className='w-24 h-24 rounded-full border-2 border-amber-100' src={recipe.image} alt="" />
          <h3 className='mt-2'>{recipe.category}</h3>
        </Link>
      </SwiperSlide>
      ))}
    </Swiper></div>


















      <div className="container max-w-[90%]   sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem]  xl:max-w-[74rem]  2xl:max-w-[88rem]  mx-auto mt-[70px]">
        <form class="max-w-full  mx-auto my-9">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <input  onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ابحث عن أكلتك المفضلة" required />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
          </div>
        </form>
        <div className='grid grid-cols-1 w-full'>
          {filterion.length > 0 ?
          filterion?.map((day) => (
            <div>
              <h2 id={`menu${day.id}`} className="font-bold text-3xl border-4 border-transparent border-b-white w-fit px-4 mx-auto mb-4 py-2 pt-6">{day.category}</h2>

        <div className=' grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4'>

              {day.data.map((mii) => (
               


 <div data-aos="fade-down-left" key={mii.id} className='mt-5 group shadow-2xl py-6 px-4 rounded-2xl border border-amber-50/55'>
          <Link className='flex flex-col-reverse justify-between items-center gap-6' to={`/MenuDetails/${mii.id}`}>
            <div className='flex flex-col justify-between w-full [height:-webkit-fill-available]'>
              <div className='space-y-3 flex flex-col items-center justify-between h-full'>
                <h2 className='font-bold text-lg sm:text-2xl'> {mii.name}</h2>
                <p className='font-medium text-sm sm:text-xl px-4 py-2 border-2 border-amber-300/50 rounded-2xl w-fit'>Price : {mii.pricee} EGP</p>
              </div>
           
            </div>
            <div className='w-full'>
            <img className='w-full md:h-[250px] h-26 rounded-2xl [filter:blur(2.5px)] group-hover:blur-none [transition:all_.9s]' src={mii.image} alt="" />
            </div>
          </Link>
        </div>




              ))}
        </div>

            </div>
          )): <p className='font-bold text-2xl text-center py-3 bg-yellow-700/30 rounded-2xl'>هذا الأوردر غير متاح حاليا 🥲</p> }
        </div>
      </div>
  </>
}










































