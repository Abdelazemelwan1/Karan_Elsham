import React, { useEffect, useState } from 'react'
import Style from "./MenuDetails.module.css"
import api from "../../api/recipes.js";
import { useParams } from 'react-router-dom';



export default function MenuDetails() {
  let { id } = useParams();
  const [offers, setOffers] = useState([])
  async function getSpecificProduc(id) {

    let {data} = await api.get(`/recipes/${id}`)
    .then((res)=>{
      setOffers(res.data.data)
      console.log(data);

    }).catch((err)=>{
  console.log(err);
  
    })
  }
  
  
  useEffect(() => {
   getSpecificProduc(id)
  }, [id])

  return <>
    <h2>MenuDetails</h2>
  </>
}
