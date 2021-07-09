import React, { Component } from "react";
import { NavLink} from "react-router-dom";





export default class App extends Component {

   

render() {   
    
    return (
        <div className='content  '>
            <div className='bg-warning heading container mb-3 shadow rounded ' >
                 <h1 className=' p-3 fs-1 ms-5'>Home ....</h1>
             </div>
<div className='row p-5  '>
    <div className='col-md-6 ' >
        <p className='fs-4 ms-5'>Retail company in Berlin </p>
        <button type="button" className="btn btn-warning ms-5" ><NavLink className='text-white nav-link' to='/product'>SHOP NOW</NavLink></button>
    </div>
    
         <div className="col-md-6 text-center">
                       <img src='https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-1/122940660_3017756205157079_1922317843292772306_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=wS-NkElrGeIAX_rQbMQ&_nc_oc=AQmALpvnIPqtp3s0c94iSxqEJnVr-Sn_6E8F631SIJ4Y_iQtHRsP40vHx18uMA0nnYeR_ui5geT5B00L0DDquNyS&_nc_ht=scontent-ber1-1.xx&oh=dff2e6814041a1bb0dd5a4ea5f3ab9de&oe=60EC72B8' width='800' height='400' className="homeImage img   " alt="" />
                   </div>
        </div>
        </div>
    )}
}

  



