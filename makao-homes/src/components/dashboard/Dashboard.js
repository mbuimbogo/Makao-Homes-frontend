
import React from 'react'
import { Routes, Route } from "react-router-dom";
import './Dashboard.css'
import {FaHome} from 'react-icons/fa'
import {CgUserList} from 'react-icons/cg'
import {RxListBullet} from 'react-icons/rx'
import {AiFillDashboard} from 'react-icons/ai'
import {  NavLink } from "react-router-dom";
import MyListings from '../myListings/MyListings';
import AllListings from '../allListings/AllListings';
import AddProperty from '../addproperty/AddProperty';


function Dashboard() {

  /* Add basic styling for NavLinks */
// const linkStyles = {
//   display: "block",
//   width: "50px",
//   padding: "50px 12px 12px 50px",
//   textDecoration: "none",
//   color:"white",
//   marginLeft: "-20px"
  
  
// };

  return (
    <div>

        <div className='dashboard'>
         
            
                <div className='menu'>
                  <div className='links'>
                    <div className='dashIcon'>
                   <p><AiFillDashboard size={40} color="white" className='ticon'/></p>
                   <h3>Dashboard</h3>
                   </div>

                  <NavLink
                  to='/'
                  >
                       <div className='dashIcon'>
                   <p><FaHome size={40} color="white" className='ticon'/></p>
                   <h3>Home</h3>
                   </div>
                   </NavLink>

                    <NavLink
                    to="/mylistings"
                    >
                       <div className='dashIcon'>
                   <p><CgUserList size={40} color="white" className='ticon'/></p>
                   <h3>My Listings</h3>
                   </div>
                   </NavLink>

                  <NavLink 
                  to="/allListings"
                  >
                       <div className='dashIcon'>
                   <p><RxListBullet size={40} color="white" className='ticon'/></p>
                   <h3>All Listings</h3>
                   </div>
                   </NavLink>

                        <NavLink 
                  to="/sell"
                  >
                       
                   
                   <button>Sell With Us</button>
                  
                   </NavLink>

                    

                   
                
      {/* <NavLink
        to="/"
        
       
      >
        <FaHome size={30} className="icon" /> Home
      </NavLink>
               
      <NavLink
        to="/mylistings"
        
       
      >
        <CgUserList size={30} className='icon'/>
        MyListings
      </NavLink>
                
      <NavLink
        to="/allListings"
       
      
      >
        <RxListBullet size={30} className='icon'/>AllListings
      </NavLink>

          <NavLink
        to="/sell"
        style={linkStyles}
      >
       <button>Sell With Us</button>
      </NavLink> */}
      </div>

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