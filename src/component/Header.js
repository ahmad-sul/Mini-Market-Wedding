import React from 'react'
import { FaShoppingCart} from  "@react-icons/all-files/fa/FaShoppingCart";
import {BsFillPersonPlusFill}from "react-icons/bs";
import { FcCustomerSupport ,FcHome, FcCloseUpMode} from "react-icons/fc";
import { SiArchicad, SiBeats,SiFigshare } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { IoLanguageOutline} from "react-icons/io5"
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"
import { motion } from "framer-motion";
import Logo from '../component/images/Wedding (2).png'


import { NavLink, Link} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
 
  const {cart} =useSelector(state=>state)
  const showNum=()=>{
    if(cart.length > 0){
      return cart.length
    }
  }
  return (
    <div className='shadow  rounded '>

     
      <nav className='headerNavBar navbar navbar-expand-lg navbar-light '>
        <div className="container-fluid">
        <nav class="navbar ">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src={Logo} alt="logo" width={200} height={150}/>
    </a>
  </div>
</nav>
        
       
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
            
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
        <NavLink activeClassName="active"  to="/" className='margin nav-link active border-start border-danger p-3  '>Home<FcHome style={{fontSize:'30' , marginLeft:'10px'}}/></NavLink>
        </li>
        <li className="nav-item" >
        <NavLink activeClassName="active"  to="/product" className='nav-link margin   border-start border-danger p-3'>Product<FcCloseUpMode style={{fontSize:'30' , marginLeft:'10px'}}/></NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active"  to="/contactUs" className='nav-link margin border-start border-danger p-3 '>Contact Us<FcCustomerSupport style={{fontSize:'30' , marginLeft:'10px'}}/></NavLink>
        </li>
      </ul>

     <div className='d-flex '>
        <h5  className="position-relative d-flex align-items-center fw-light fs-5 border border-warning bg-warning rounded-pill"><span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2 ">{showNum()}</span><Link className='text-dark nav-link' style={{fontSize:'10'}} to='/cart'>CART <FaShoppingCart  style={{fontSize:'20'}}/></Link> </h5>

        <h4 className="d-flex align-items-center fw-light fs-5 border border-warning ms-3 bg-warning rounded-pill"><Link className='text-dark nav-link' style={{fontSize:'10'}} to='/contactUs'>LOGIN <BsFillPersonPlusFill  style={{fontSize:'20'}}/></Link>  </h4>
        </div>
     
     
  
     
    
          </div>
        </div>
      </nav>
    </div>
  )
}
