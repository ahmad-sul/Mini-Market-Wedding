import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink} from "react-router-dom";


export default function Cards(props) {
  const dispatch = useDispatch()
    return (
        <div className='cardProduct'>
        <Card className='d-flex justify-contect-center '>
          <Card.Img variant="top" src={props.img} className='images' />
          <Card.Body className='cardBody'>
            <Card.Title className='title fs-5 fw-bold text-center mt-3'>{props.name}</Card.Title>
            <Card.Title className='title fs-1 fw-bold text-center mt-3 text-danger'>{props.price}</Card.Title>
           
           
          </Card.Body>
          
          <div className='d-flex justify-content-evenly '>
          <Button className='cardButton2 text-white' variant="warning" onClick={()=>dispatch({type:'addToCart',payload:{id:props.id,name:props.name,price:props.price,img:props.img,number:props.number}})}>Add to Cart</Button>

          <Button className='cardButton2' variant="warning"><NavLink className='text-white nav-link ' to='/product'>Go Back</NavLink></Button>
          </div>
         
          <Card.Text></Card.Text>
        </Card>
       
        </div>
    )
}