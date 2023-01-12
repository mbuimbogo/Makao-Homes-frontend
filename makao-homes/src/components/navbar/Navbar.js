import React, {useState} from "react";
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa' ;
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

    const handleClick = () => setClick(!click)
    const [click, setClick] = useState(false)

    return (
        <div className="navbar">
            <div className="container">
                <h1><span><BsFillHouseFill/>Makao</span>Homes</h1>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Sell With Us</a></li>
                </ul>

                <button className="btn">Sign Up</button>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className="icon" />) : (<HiOutlineMenuAlt4 className="icon" />)}
                    
                </div>

            </div>

        </div>
    )
}

export default Navbar;