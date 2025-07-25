import React, { useEffect, useState } from 'react'
import Style from "./Layout.module.css"
import NavBar from './../NavBar/NavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './../Footer/Footer';
import NasvLink from '../NasvLink/NasvLink';



export default function Layout() {
  return <>
    <ScrollRestoration />
   <NavBar/>
   <div  className=' xxx backdrop-blur-xl shadow-2xl'>
      <NasvLink/>
    </div>
   <Outlet/>
   <Footer/>
  </>
}
