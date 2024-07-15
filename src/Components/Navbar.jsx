import React from 'react';
import './Navbar.css';
import { getstartedarrow,Allianzlogo,CloseIconsvg,MenuIconsvg } from '../assets/imgAssets.Js';
import {useState} from 'react';


const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
    
  const removenav = ()=>{
        setIsActive(false)
      }



  return (
    <>
    <div className='nav-container'>

        <div className='nav-logo'><img src={Allianzlogo} alt="" /></div>
        <div className='nav-listbox'>
            <ul>
                <li> <a href="#landing-session">Home</a></li>
                <li> <a href="#about-session">About</a></li>
                <li> <a href="#services-session">Solutions</a></li>
                <li> <a href="#sector-session">News & Insights</a></li>
                <li> <a href="#contact-session">ContactUs</a></li>
                <div className='btn-div'>
                    <button className='btn'> <span className='get'>Get</span> Started 
                          <span className='started-icon'>
                          <img src={getstartedarrow} alt="" style={{ width: '14px', height: '14px', color:'0F0F0F'}} />
                          </span>
                    </button>
                </div>
            </ul>
          </div>

          <div className="menu"onClick={()=> (setIsActive(true))}>
            <img className='menu-icon-image' src={MenuIconsvg} alt="loading.." />
          </div>
            <div className={`mobilemenuicon ${isActive?"active":""}`}>
            <div className='nav-logo2'><img src={Allianzlogo} alt="" /></div>
              <ul>
                <li onClick={removenav}> <a href="#landing-session"> Home </a></li>
                <li onClick={removenav}> <a href="#about-session"> About</a></li>
                <li onClick={removenav}> <a href="#services-session"> Solutions</a></li>
                <li onClick={removenav}> <a href="#sector-session"> News&Insights</a></li>
                <li onClick={removenav}> <a href="#contact-session"> ContactUs </a></li>        
              </ul>
              <div className="closeicon" onClick={()=> setIsActive(false)}>
              <img className='close-icon-menu' src={CloseIconsvg} alt="loading.." />
            </div>
            </div>

    </div>
            
    </>                         
  )
}

export default Navbar
