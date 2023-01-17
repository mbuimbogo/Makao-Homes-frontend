import React from 'react'
import {useState,useEffect} from 'react'
import MylistingForm from '../myListingform/MylistingForm'

function MyListings() {
    const [list,setList]=useState([])

useEffect(()=>{
    fetch("https://makao-homes.onrender.com/properties/")
      .then((r) => r.json())
      .then((list) => setList(list));
},[])

  return (
    <div>
      <MylistingForm item={list}/>
    </div>
  )
}

export default MyListings