import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const Registrar = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c5dc78ff656ccd74b707c5995e4ff18e&hash=dfbaf82821ebec713f22cb3ad78f9de9")
  const [item,setItem]=useState();

  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.png" alt="" />
            </div>
           
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}