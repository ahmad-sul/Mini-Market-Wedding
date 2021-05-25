import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import image1 from './images/2.jpg'




export default class App extends Component {

   

render() {   
    
    return (
        <div className='content  '>
            <div className='bg-warning heading container mb-3 shadow rounded ' >
                 <h1 className=' p-3 fs-1 ms-5'>Home ....</h1>
             </div>
<div className='row p-5 align-items-center '>
    <div className='col-md-6 p-5 align-middle' >
        <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br> Corrupti nam quidem totam praesentium.<br></br> Culpa reprehenderit veniam assumenda quidem.. </p>
        <button type="button" className="btn btn-warning" ><NavLink className='text-white nav-link' to='/product'>SHOP NOW</NavLink></button>
    </div>
    
         <div className="col-md-6 text-center">
                       <img src={image1}  className="homeImage img img-fluid  " alt="" />
                   </div>
        </div>
        </div>
    )}
}

  



