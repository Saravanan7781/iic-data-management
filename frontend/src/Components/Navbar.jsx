import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import '../CSS/Navbar.css';
import { MdOutlineExpandMore } from "react-icons/md";
import {Link} from 'react-router-dom'


function Navbar() {
  // const [dropDown,setDropDown] = useState(false);
  
  // const handleHover = () =>{
  //   setDropDown(true)
  // }

  // useEffect(()=>{
  //   console.log(dropDown);
  // },[dropDown])
  

  // const mouseLeave = () =>{
  //   setDropDown(false)
  // }
  


  return (

      <div className='mainContainer'>
       
        <ul className='leftCenterContent'>
          {/* <li><img src="./Logos/bitLogo.ico" /></li> */}
          <li><h1><a href=''>BIT</a></h1></li>
          {/* <li><h1>IIC MANAGEMENT</h1></li> */}
          <div className="subHeader">
          
            <div className='topNavs mainDropDownNav'><p>IIC</p>
              <div className="subDropDownNav" >
                <Link   className='links'>SELF-DRIVEN ACTIVITIES </Link>
                <Link  className='links'>MIC DRIVEN</Link>
                <Link  className='links'>CALENDAR</Link>
                <Link  className='links'>CELEBRATION</Link>
              </div>
            </div>

            <div className='topNavs mainDropDownNav'><p>EDC</p>
              <div className="subDropDownNav">
                <Link   className='links'>SELF-DRIVEN </Link>
                <Link  className='links'>MIC DRIVEN</Link>
                <Link  className='links'>CALENDAR</Link>
                <Link  className='links'>CELEBRATION</Link>
              </div>
            </div>
            <div className='topNavs mainDropDownNav'><p>Startup</p>
              <div className="subDropDownNav">
                <Link   className='links'>SELF-DRIVEN </Link>
                <Link  className='links'>MIC DRIVEN</Link>
                <Link  className='links'>CALENDAR</Link>
                <Link  className='links'>CELEBRATION</Link>
              </div>
            </div>
          
            <div className='topNavs mainDropDownNav'><p>TBI</p>
              <div className="subDropDownNav">
                <Link   className='links'>SELF-DRIVEN </Link>
                <Link  className='links'>MIC DRIVEN</Link>
                <Link  className='links'>CALENDAR</Link>
                <Link  className='links'>CELEBRATION</Link>
              </div>
            </div>
            <Link to="/login" className='login'><p>Login</p></Link>
          </div>
         
        </ul>
        
        <ul className="bottomRightContent">
         <Link to="/login"><p></p></Link>
        </ul>
      </div>
      
  
  );
}

export default Navbar;