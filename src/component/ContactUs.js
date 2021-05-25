import React from 'react'
import { Form, Button } from 'react-bootstrap';
import image2 from './images/location.bmp'

import { motion } from "framer-motion";


export default function ContactUs() {

    return (
        <div>
        <div className='bg-warning heading container mb-3 shadow rounded ' >
        <h1 className=' p-3 fs-1 ms-5'>Contact us ....</h1>
      
    </div>
    <div className='container  d-flex flex-wrap justify-content-evenly'>
<div className='d-flex flex-column  '>
    <p className='fs-2'>you can find us here :</p>
    <motion.a
 
  animate={{ scale: 1.5 }}
   transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 0.1, 0.8, 0.8, 0.8],
          loop: Infinity,
          repeatDelay:1
        }}
        className='text-danger   text-center'  href="https://g.page/markt-ayoob-2?share"
    >Hindenburgdamm 88, 12203 Berlin</motion.a>
    <h3 className='text-center m-3'>work hours</h3>
    <div className='d-flex'>

            <ul>
     
     <li>Saturday: 10:00 AM - 10:00 PM</li>
<li>Sunday: closed</li>
<li> Monday: 10:00 AM - 10:00 PM</li>
<li>Tuesday: 10:00 AM - 10:00 PM</li> 

   </ul>
   <ul>
     <li>Wednesday: 10:00 AM - 10:00 PM</li>
<li>Thursday: 10:00 AM - 10:00 PM</li>
<li>Friday: 10:00 AM - 10:00 PM</li>
   </ul>
    </div>



   
<a className='App-link fs-5' href="https://g.page/markt-ayoob-2?share">&#9755;<img src={image2} alt="" width='350' height='200'/>&#9754;</a>

 
</div>
 <div className='form contact d-flex flex-column align-items-center '>
 <p className='fs-1 text-danger'>Contact us</p>

 <span className=' '>&#9742; 0176 63362079 /</span>

      <Form className='w-75 '>
    <Form.Group controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="enter your name" />
    
  </Form.Group>
        
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message us</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder='Your Message must at least 10 characters!' />
  </Form.Group>
  <hr />

  <Button className='w-100 ' variant="warning" type="submit">
    Submit
  </Button>
  <hr />
 
</Form>
 </div>
 <div>
 
 </div>
   
      
    </div> 

   
        </div>
    )
}
