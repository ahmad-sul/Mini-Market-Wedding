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
                       <img src='https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-1/122940660_3017756205157079_1922317843292772306_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=MfFUXSItyJ4AX8tKsB3&_nc_oc=AQl9CszpUDFKQk4-eDs7GekIb_o5JHXb5a-WtseZruDSLrznVKS7z0sO1osd24D5Ps6AbTBk4oXqnj2SWuRGuadn&_nc_ht=scontent-ber1-1.xx&oh=a6db854c7e42a278112676daa9e094ed&oe=60D0C338' className="homeImage img img-fluid  " alt="" />
                   </div>
        </div>
        </div>
    )}
}

  



