import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "./images/20220730_151341.jpg";
import bannerImg1 from "./images/20220730_151115.jpg";
import bannerImg5 from "./images/20220730_151239.jpg";




export default class App extends Component {
  render() {
    return (
      <div className="position-relative marginTop  ">
        <div className="bg-warning heading container mb-3 shadow rounded ">
          <h1 className=" p-3 fs-1 ms-5">Home ....</h1>
        </div>
        <div className="row  .homeFlex ">
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-4">Retail company in Berlin </p>
            <button type="button" className="btn btn-warning w-50 ">
              <NavLink className="text-white nav-link" to="/product">
                SHOP NOW
              </NavLink>
            </button>
          </div>

          <div className="col-md-9 text-center p-5">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 

  </div>
  <div class="carousel-inner shadow-lg">
    <div class=" carousel-item  active carouselitem">
    <img   src={bannerImg}
              
              className="homeImage "  alt="img"/>
    </div>
    <div class="carousel-item carouselitem ">
      <img   src={bannerImg1}
              
              className="homeImage  "  alt="img"/>
    </div>
   
    
    
    <div class="carousel-item carouselitem">
    <img   src={bannerImg5}
              
              className=" homeImage "  alt="img"/>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div> 

          {/* <div className="col-md-9 text-center p-5">
            <img
              src={bannerImg}
              width="100%"
              className="homeImage img   "
              alt=""
            />
          </div> */}
        </div>
  
      </div>
    );
  }
}
