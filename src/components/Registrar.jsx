import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Registrar = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
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