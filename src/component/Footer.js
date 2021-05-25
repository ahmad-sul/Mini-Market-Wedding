import React from 'react'
import { NavLink, Link} from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcPaypal} from "react-icons/fa";
import { ImHome , ImMobile, ImWhatsapp } from "react-icons/im";

export default function Footer() {
    return (
        <div className='footer mt-3'>

      <section className='d-flex  justify-content-center align-items-center bg-light '>
      <a href="https://www.facebook.com/Ayoob222/" className="m-3 pe-auto">
      <img src="https://img-premium.flaticon.com/png/512/739/premium/739135.png?token=exp=1621345857~hmac=92765b83d92f2e57e0c4e2547d093654"  width='40'  alt="" />
      </a>

    <Link  className="m-3">
    <img src="https://img-premium.flaticon.com/png/512/733/733579.png?token=exp=1621346010~hmac=47e43742bb1474fd4ad759135db0c40a"  width='40'  alt="" />
    </Link >
    <Link  className="m-3">
    <img src="https://img-premium.flaticon.com/png/512/2111/2111463.png?token=exp=1621346085~hmac=f5a52bb45432c20cfc354f8e6aff3e40"  width='40'  alt="" />
    </Link >
    
      </section>

      <section className=' text-white bg-dark d-flex justify-content-evenly '>
      <div className=''>
    <h5 className='border-bottom border-warning p-2'>My account and services</h5>
   
      <p className=''> <Link activeClassName="active"  to="/cart" className='text-white'>My requests</Link></p>
      <p className=''> <Link activeClassName="active"  to="/return" className='text-white'>Return policy</Link></p>
     <p className=''> <Link activeClassName="active"  to="/payment" className='text-white'>Payment and transmission methods</Link></p>
     <p className=''> <Link activeClassName="active"  to="/contactUs" className='text-white'>Contact Us</Link></p>
    </div >
   
    <div>
    <h5 className='border-bottom border-warning p-2'> Communicate</h5>
    <p>Customer Service: From Monday to Friday 08:00 - 18:00</p>
     <article className='d-flex '>
         <p>Address <ImHome className='text-warning '/> :</p>
         <p className='ms-4'>  <a
 

       className='  text-white text-center'  href="https://g.page/markt-ayoob-2?share"
   >Hindenburgdamm 88, 12203 Berlin</a></p>
     </article>
     <article className='d-flex '>
         <p>Mobile <ImMobile className='text-warning '/> :</p>
         <p className='ms-5'>0176 63362079</p>
     </article>
     <article className='d-flex '>
         <p>What's Up <ImWhatsapp className='text-warning '/>:</p>
         <p className='ms-4'><a className='text-white' href="https://api.whatsapp.com/resolve/?deeplink=%2F%2B49176%252041929639">0176 63362079</a> </p>
     </article>
   
    </div>

    <div className=''>
    <h5 className='border-bottom border-warning p-2'>More Info</h5>
    <p className=''> <Link activeClassName="active"  to="/withdrawal" className='text-white'>Right of withdrawal</Link></p>

     <p className=''> <Link activeClassName="active"  to="/conditions" className='text-white'>

Conditions</Link></p>
     <p className=''> <Link activeClassName="active"  to="/imprint" className='text-white'>imprint</Link></p>
    </div>
    <section className='d-flex flex-column justify-content-center'>
          <span className='fs-1 ms-5 text-warning'><FaCcVisa/></span>
          <span className='fs-1 ms-5 text-warning'><FaCcMastercard/></span>
          <span className='fs-1 ms-5 text-warning'><FaCcPaypal/></span>
      </section>
      </section>
     

      <section className='d-flex justify-content-center text-danger bg-white '>
      <h5 className='p-3 fs-6'> created by <span className='text-warning'>Ahmad Suliman </span> All rights reserved &copy; 2021</h5>
      </section>
        
        </div>
    )
}
