import React, { Component } from "react";
import { NavLink} from "react-router-dom";





export default class App extends Component {

   

render() {   
    
    return (
        <div className='content  '>
            <div className='bg-warning heading container mb-3 shadow rounded ' >
                 <h1 className=' p-3 fs-1 ms-5'>Home ....</h1>
             </div>
<div className='row  .homeFlex '>
    <div className='col-md-6 recenter' >
        <p className='fs-4 ms-5'>Retail company in Berlin </p>
        <button type="button" className="btn btn-warning ms-5" ><NavLink className='text-white nav-link' to='/product'>SHOP NOW</NavLink></button>
    </div>
    
         <div className="col-md-6 text-center">
                       <img src='https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/122940660_3017756205157079_1922317843292772306_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=jwPMBg29cKEAX_hVXfJ&_nc_oc=AQmy0e1Q0LCX7Ht_L3VvOve-oSpXgMmu4OYqooLwLfGAm7ViagIWobXJA2004MY6Rq8&_nc_ht=scontent-ber1-1.xx&oh=4a6c503a011f78c05a6d8fc8a63392a9&oe=6123BE88' width='60%'  className="homeImage img   " alt="" />
                   </div>
        </div>
        </div>
    )}
}

  



