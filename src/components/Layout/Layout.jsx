import React, { useEffect, useState } from 'react'
import Style from "./Layout.module.css"
import NavBar from './../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';



export default function Layout() {
  return <>
  {/* <div className='fixed  left-0 right-0 z-30'> */}

   <NavBar/>
  {/* </div> */}

   <Outlet/>
   {/* </div> */}
   <Footer/>
  </>
}
