import React from 'react'
import {useState,useEffect} from 'react'
import Listingsform from '../allListingform/Listingsform'

function AllListings() {
    const [list,setList]=useState([])

useEffect(()=>{
    fetch("https://makao-homes.onrender.com/properties")
      .then((r) => r.json())
      .then((list) => setList(list));
},[])

  return (
    <div>
      <Listingsform item={list}/>
    </div>
  )
}

export default AllListings