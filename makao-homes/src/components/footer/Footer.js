import React from "react"
import { footer } from "../../data"
import "./Footer.css"
import {BsFillHouseFill} from 'react-icons/bs'


const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
          
            <div className='text'>
              <h1>have any questions ?</h1>
              <p>Your Gateway to a richer life where your dreams come home.</p>
            </div>
          </div>
          
        </div>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
            <h1><span><BsFillHouseFill/>Makao</span>Homes</h1>
              <h2>Make Your Dreams a Reality</h2>
              

              <button className="btn">Sell With Us</button>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </footer>
      <div className='legal'>
        <span>© 2023 Makao Homes. All Rights Reserved.</span>
      </div>
    </section>
    </>
  )
}

export default Footer