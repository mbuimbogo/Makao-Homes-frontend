import React from "react";
import './Featured.css';
import img1 from '../../assets/residential.jpg'
import img2 from '../../assets/commercial.jpg'
import img3 from '../../assets/offices.jpg'


const Featured = () => {
    return (
        <div className="place">
            <h1>Find your next place to live</h1>
            <h3>Featured Properties</h3>
            <div>
                <p><span className="prop"></span></p>
                <p>Residential</p>
                <p>Commercial</p>
                <p>Offices</p>
            </div>
            <div className="apart">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
            </div>
            <button className="btn">View Properties</button>
        </div>
    )
}





export default Featured;