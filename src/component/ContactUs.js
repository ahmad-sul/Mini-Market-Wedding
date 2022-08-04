import React from "react";
import { Form, Button } from "react-bootstrap";
import image2 from "./images/location.bmp";

import { motion } from "framer-motion";

export default function ContactUs() {


  const sendMessageWhatsapp = (e) => {
    e.preventDefault();
    
    const MyPhone = '+491631116313';
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let message = e.target.message.value
    let url = "https://wa.me/";
  let end_url = `${url}${MyPhone}?text=`+"*Name :* "+name+"%0a"
  +"*Email :* "+email+"%0a"
  +"*Phone :* "+phone+"%0a"
  
  +"*Message :* "+message;
 

  console.log(end_url);
 
  window.open(end_url, '_blank').focus();

  };

  return (
    <div>
      <div className="bg-warning heading container mb-3 shadow rounded ">
        <h1 className=" p-3 fs-1 ms-5">Contact us ....</h1>
      </div>
      <div className="container  d-flex flex-wrap justify-content-evenly">
        <div className="d-flex flex-column  ">
          <p className="fs-2">you can find us here :</p>

          <hr />
          <h3 className="text-center m-3">work hours</h3>

          <p className="text-center m-3">Monday-Saturday</p>

          <p className="text-center m-3">07:00- 22:00</p>

          <hr />

          <motion.a
            animate={{ scale: 1.5 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              times: [0, 0.1, 0.8, 0.8, 0.8],
              loop: Infinity,
              repeatDelay: 1,
            }}
            className="text-danger  text-center text-decoration-none mb-5"
            href="https://www.google.com/search?authuser=0&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ALiCzsYEfjoYLHGARBbzb6F5tMqO5fxcGA:1659626469819&q=minimarkt+wedding&rflfq=1&num=10&rldimm=11022343119768639238#rlfi=hd:;si:5171967835969211815;mv:[[52.54699834293099,13.383468873421354],[52.53959914340885,13.359522111336393],null,[52.5432988990735,13.371495492378873],16]"
            target="_blank"
          >
            Gerichtstraße 10, 13347 Berlin
          </motion.a>

          <a
            className="App-link fs-5"
            href="https://www.google.com/search?authuser=0&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ALiCzsYEfjoYLHGARBbzb6F5tMqO5fxcGA:1659626469819&q=minimarkt+wedding&rflfq=1&num=10&rldimm=11022343119768639238#rlfi=hd:;si:5171967835969211815;mv:[[52.54699834293099,13.383468873421354],[52.53959914340885,13.359522111336393],null,[52.5432988990735,13.371495492378873],16]"
            target="_blank"
          >
            &#9755;
            <img src={image2} alt="" width="350" height="200" />
            &#9754;
          </a>
        </div>
        <div className="form contact d-flex flex-column align-items-center ">
          <p className="fs-1 text-danger">Contact us</p>

          <span className=" ">&#9742; 0163 1116343 /</span>


          <script src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>


          <form className="d-flex border w-100" id="send-message-whatsapp" onSubmit={sendMessageWhatsapp}>
            <div className="container">
              <div className="container p-0 d-flex flex-column">
                <input
                  className="form-control my-3 input-style"
                  id="inputUsername"
                  type="text"
                  name="name"
                  placeholder="Username*"
                  required
                />
                <input
                  className="form-control border mb-3 mt-0 input-style"
                  id="inputEmail4"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />

                <input
                  className="form-control mb-3 input-style"
                  id="inputUsername"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                />
                <textarea
                  className="form-control mb-3 input-style"
                  id="exampleFormControlTextarea1"
                  rows="8"
                  name="message"
                  placeholder="Write your message here"
                ></textarea>
                <p id="end_url"></p>
                    <input
              className="btn bg-warning w-50 my-4 mx-auto text-capitalize"
              type="submit"
              value="Send message"
            />
              </div>
            </div>
          </form>

        </div>
       
      </div>
    </div>
  );
}


