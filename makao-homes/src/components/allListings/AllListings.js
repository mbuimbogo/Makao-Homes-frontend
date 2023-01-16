import React from 'react'
import {useState,useEffect} from 'react'

function AllListings() {
    const [list,setList]=useState([])

useEffect(()=>{
    fetch("http://localhost:4000/newproperty")
      .then((r) => r.json())
      .then((list) => setList(list));
},[])

  return (
    <div>AllListings</div>
  )
}

export default AllListings