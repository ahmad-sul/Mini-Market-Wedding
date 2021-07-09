import React from 'react'
import ProductCard from '../ProductCard'
import { CardColumns} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function CannedFood(props) {

 const { CannedFoodInfos,meatData, pastriesData,citrusData,cheeseData,oilsData} = useSelector(state=>state)

let cheeseProduct = cheeseData.map(item=>{
  return (
    <ProductCard
    key={item.id}
    id={item.id}
    number={item.number}
      img={item.avatar}
      name={item.name}
      price={item.price}
      />
  )
})
let oilsProducts = oilsData.map(item=>{
  return (
    <ProductCard
    key={item.id}
    id={item.id}
    number={item.number}
      img={item.avatar}
      name={item.name}
      price={item.price}
      />
  )
})
  

  let meatProduct = meatData.map(item=>{
      return (
        <ProductCard
        key={item.id}
        number={item.number}
        id={item.id}
          img={item.avatar}
          name={item.name}
          price={item.price}
          />
      )
  })
    let products =CannedFoodInfos.map((item,index)=>{
        return  <ProductCard
        key={item.id}
        id={item.id}
        number={item.number}
          img={item.avatar}
          name={item.name}
          price={item.price}
          />
      })

      let pastriestProduct = pastriesData.map(item=>{
        return (
          <ProductCard
          key={item.id}
          id={item.id}
          number={item.number}
            img={item.avatar}
            name={item.name}
            price={item.price}
            />
        )
      })

      let citrusProducts = citrusData.map(item=>{
        return (
          <ProductCard
          key={item.id}
        
          number={item.number}
            img={item.avatar}
            name={item.name}
            price={item.price}
            />
        )
      })
      
      
    return (
        <div>
        <div className='heading bg-warning heading container mb-3 shadow rounded ' >
        <div className='d-flex justify-content-evenly align-items-center'>
        <h1 className=' p-3 fs-1 ms-5'>Product ....</h1>
        <h1>{props.match.params.item}</h1>
        </div>
        
    </div>
    <div className='container'>
    <CardColumns>
        {props.match.params.item==='Meat'? meatProduct :
         props.match.params.item==='Pastries'? pastriestProduct :
          props.match.params.item==='Citrus'? citrusProducts:
          props.match.params.item==='Cheese and dairy'? cheeseProduct:
          props.match.params.item==='Oils and margarine'? oilsProducts:
           products}
      
    
  </CardColumns>

    </div>
        </div>
    )
}



   //  {props.match.params.item==='Meat'? meatProduct : props.match.params.item==='Pastries'? pastriestProduct : products}
  //  {props.match.params.item==='Pastries'? pastriestProduct : products}