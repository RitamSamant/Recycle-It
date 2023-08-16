"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
const admin = () => {
  const [data,Setdata] = useState([])
  const getProductData = async ()=>{
    try {
      
      const token = localStorage.getItem('token')
      const res = await axios.get('http://localhost:5000/org/dashboard/products',{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      console.log(res.data.products)
      Setdata(res.data)
      Setpic(data[0].img)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(()=>{
    getProductData()
  },[])
  return (
    <div>admin</div>
  )
}

export default admin
