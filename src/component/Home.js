import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "./images/20220730_151341.jpg";


export default class App extends Component {
  render() {
    return (
      <div className="content  ">
        <div className="bg-warning heading container mb-3 shadow rounded ">
          <h1 className=" p-3 fs-1 ms-5">Home ....</h1>
        </div>
        <div className="row  .homeFlex ">
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-4">Retail company in Berlin </p>
            <button type="button" className="btn btn-warning w-50 ">
              <NavLink className="text-white nav-link" to="/product">
                SHOP NOW
              </NavLink>
            </button>
          </div>

          <div className="col-md-8 text-center">
            <img
              src={bannerImg}
              width="100%"
              className="homeImage img   "
              alt=""
            />
          </div>
        </div>
  
      </div>
    );
  }
}
