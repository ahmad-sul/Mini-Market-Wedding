import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink} from "react-router-dom";

export default function Cards(props) {
 
    return (
        <div className='cards'>
        
        
        <Card className='d-flex justify-contect-center position-relative'>
        
          <Card.Body className=''>
          <Card.Img variant="top" src={props.img} className='images'/>
            <Card.Title className='title fs-3 fw-bold text-center mt-3'>{props.name}</Card.Title>
           
          </Card.Body>
          
          <Button  variant="outline-warning"><NavLink className='text-warning fs-4 nav-link' to={`/product/${props.name}`}>SHOP NOW</NavLink></Button>
          <Card.Text></Card.Text>
        </Card>
       
    
        </div>
    )
}
