import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
 
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { ImHome, ImMobile, ImWhatsapp } from "react-icons/im";


export default function Footer() {
  return (
    <div className="footer mt-3 d-flex flex-column">
      <nav className=" navbar navbar-dark bg-dark d-flex  justify-content-center align-items-center p-3">
       
          <a
            href="https://www.facebook.com/Ayoob222/"
            className="nav-link  fs-4 text-warning"
          >
            <FaFacebook />
          </a>

          <Link className="">
            <a
              href="https://www.twitter.com"
              className="nav-link  fs-4 text-warning"
            >
              <FaTwitter />
            </a>
          </Link>
          <Link className="">
            <a
              href="https://www.instagram.com"
              className="nav-link  fs-4 text-warning"
            >
              {" "}
              <FaInstagram />
            </a>
          </Link>
       
      </nav>

      <section className=" text-white bg-dark d-flex justify-content-evenly footerFlex">
        <div className="">
          <h5 className="border-bottom border-warning p-2">
            My account and services
          </h5>

          <p className="">
            {" "}
            <Link activeClassName="active" to="/cart" className="text-white">
              My requests
            </Link>
          </p>
          <p className="">
            {" "}
            <Link activeClassName="active" to="/return" className="text-white">
              Return policy
            </Link>
          </p>
          <p className="">
            {" "}
            <Link activeClassName="active" to="/payment" className="text-white">
              Payment and transmission methods
            </Link>
          </p>
          <p className="">
            {" "}
            <Link
              activeClassName="active"
              to="/contactUs"
              className="text-white"
            >
              Contact Us
            </Link>
          </p>
        </div>

        <div>
          <h5 className="border-bottom border-warning p-2"> Communicate</h5>
          <p>Customer Service: Monday - Saturday 07:00 - 22:00</p>
          <article className="d-flex ">
            <p>
              Address <ImHome className="text-warning " /> :
            </p>
            <p className="ms-4">
              {" "}
              <a
                className="  text-white text-center"
                href="https://www.google.com/search?authuser=0&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ALiCzsYEfjoYLHGARBbzb6F5tMqO5fxcGA:1659626469819&q=minimarkt+wedding&rflfq=1&num=10&rldimm=11022343119768639238#rlfi=hd:;si:5171967835969211815;mv:[[52.54699834293099,13.383468873421354],[52.53959914340885,13.359522111336393],null,[52.5432988990735,13.371495492378873],16]"
            target="_blank" rel="noreferrer"
              >
                Gerichtstraße 10, 13347 Berlin
              </a>
            </p>
          </article>
          <article className="d-flex ">
            <p>
              Mobile <ImMobile className="text-warning " /> :
            </p>
            <p className="ms-5">0163 1116313</p>
          </article>
          <article className="d-flex ">
            <p>
              What's Up <ImWhatsapp className="text-warning " />:
            </p>
            <p className="ms-4">
              <a
                className="text-white"
                href="https://wa.me/+491631116313" target="_blank" rel="noreferrer"
              >
              0163 1116343
              </a>{" "}
            </p>
          </article>
        </div>

        <div className="">
          <h5 className="border-bottom border-warning p-2">More Info</h5>
          <p className="">
            {" "}
            <Link
              activeClassName="active"
              to="/withdrawal"
              className="text-white"
            >
              Right of withdrawal
            </Link>
          </p>

          <p className="">
            {" "}
            <Link
              activeClassName="active"
              to="/conditions"
              className="text-white"
            >
              Conditions
            </Link>
          </p>
          <p className="">
            {" "}
            <Link activeClassName="active" to="/imprint" className="text-white">
              imprint
            </Link>
          </p>
        </div>
       
      </section>

      <section className="d-flex justify-content-center text-danger bg-white ">
        <h5 className="p-3 fs-6">
          {" "}
          &copy; 2021 created by <span className="text-warning">  Ahmad Suliman </span> All
          rights reserved 
        </h5>
      </section>
    </div>
  );
}
