
import React from 'react'
import { Routes, Route } from "react-router-dom";
import './Dashboard.css'
import {FaHome} from 'react-icons/fa'
import {  NavLink } from "react-router-dom";
import MyListings from '../myListings/MyListings';
import AllListings from '../allListings/AllListings';
import AddProperty from '../AddProperty';


function Dashboard() {

  /* Add basic styling for NavLinks */
const linkStyles = {
  display: "block",
  width: "50px",
  padding: "12px 12px 12px 50px",
  // margin: "0 6px 6px",
  // background: "blue",
  textDecoration: "none",
  
  
};

  return (
    <div>

        <div className='dashboard'>
         
            
                <div className='menu'>
                
                     <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        <FaHome size={40} color="white"/>Home
      </NavLink>
               
      <NavLink
        to="/mylistings"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        MyListings
      </NavLink>
                
      <NavLink
        to="/allListings"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        AllListings
      </NavLink>

          <NavLink
        to="/sell"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       <button>Sell With Us</button>
      </NavLink>

    </div>   
                 
                 <div className='Listings'>

                  
                  {/* <MyListings/>
                  <AllListings/> */}
                  <Routes>
                   <Route path="/mylistings" element={<MyListings/>}/>
                   <Route path="/allListings" element={<AllListings/>}/>
                   <Route path='/sell' element={<AddProperty/>} />
                   </Routes>
              
                </div>
                
            

            </div>
       
    </div>
  )
}

export default Dashboard