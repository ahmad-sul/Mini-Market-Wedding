import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'


export default function Cart() {
    const{cart}= useSelector(state=>state)

    const dispatch = useDispatch()
     
    const[total,setTotal] = useState(0)
    useEffect(()=>{
           let totalinCart = cart.reduce((acc,item)=>{
               console.log(item)
                console.log(parseFloat(item.price) )
               return acc = acc +  (parseFloat(item.price) * item.number )
           },0)
        //    console.log(cart)
           setTotal(totalinCart)
   
     },[cart])
   
    
    return (
<div className='container'>
        <div className='bg-warning heading container mb-3 shadow rounded ' >
            <div className='d-flex justify-content-between align-items-center'>

  <h1 className=' p-3 fs-1 ms-5'>Product ....</h1>

        <h2 className='text-danger'>Total: {total.toFixed(2)} € </h2>

            </div>
      
       
        </div>
        <div className=' row row-cols-1 row-cols-md-2 g-4'>
            {cart && cart.map(item=>{

                return (
                    <div className='col-sm-2 '>
                    <Card className=' d-flex flex-row justify-content-between  cartCard'>
                        <div className='col-md-6'>

                             <Card.Img variant="top" src={item.img} className='images' />
                        </div>
                   <div className='col-md-6 w-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='cardBody'>
                      <Card.Title className='title fs-5 fw-bold text-center mt-3'>{item.name}</Card.Title>
                      <Card.Title className='title fs-1 fw-bold text-center mt-3 text-danger'>{item.price}</Card.Title>
                      <Card.Title className='title fs-5 fw-bold text-center mt-3 text-danger'>amount : {item.number}</Card.Title>
                     
                    </Card.Body>

                    <div className='d-flex justify-content-evenly  '>

                   <div>
                   <Button className='cardButton2 text-white w-100 ' variant="warning" onClick={()=>dispatch({type:'removeitem',payload:{id:item.id,name:item.name,price:item.price,img:item.img}})}>Remove Item</Button>

                        <Button className='cardButton2 text-white w-100 mt-2' variant="warning" onClick={()=>dispatch({type:'removeAllItems',payload:{id:item.id,name:item.name,price:item.price,img:item.img}})}>Remove All</Button>
                   </div>
                  

                
                   
                   </div>
                   
                
                    </div>
                   
                    <Card.Text></Card.Text>
                  </Card>
                  </div>
                )
            })}
        </div>
        </div>
    )
}


