import React from 'react'
import Cards from './Cards'
import { CardColumns } from 'react-bootstrap';

export default function Product() {

    let infos =[
        {
            "id":1,
            "name":'Canned food',
            "avatar":'https://www.central-bazaar.com/wp-content/uploads/2020/02/food2-340x225h.jpg',
            "price":'00.00€'
        }
        , {  "id":2,
            "name":'Citrus',
            "avatar":'https://wassina.net/ecdata/stores/YFSVMV7478/image/cache/data/products/1597074488_7-650x650.jpg'},

         {   "id":3,
              "name":'Meat',
              "avatar":'https://arabi21.com/Content/Upload/large/320183225139225.jpg',
              "price":'00.00€'
            },   

         {   "id":4,
              "name":'Cheese and dairy',
              "avatar":'https://zamrad.shop/image/cache/catalog/ahmad/StockSnap_ISTRWFYIZT-230x230w.jpg',
              "price":'00.00€'},

         {  "id":5,
              "name":'Pastries',
             "avatar":'https://img.atyabtabkha.com/kckkAtkqOFJpk3T1B6A2Q05ZaE4=/640x360/https://harmony-assets-live.s3.amazonaws.com/image_source/c4/7d/c47d1750e663512fbb5560942aeda81ab2fac236.jpg',
              "price":''},

         { "id":6,
              "name":'Oils and margarine',
              "avatar":'https://m3refh.com/wp-content/uploads/2020/12/%D8%B2%D9%8A%D9%88%D8%AA-%D8%B5%D8%AD%D9%8A%D8%A9-%D8%A8%D8%AF%D9%8A%D9%84%D8%A9-%D8%B9%D9%86-%D8%B2%D9%8A%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-1-780x470.jpeg',
              "price":'00.00€'}
    ]

     let products =infos.map((product,index)=>{
       return  <Cards
      
       key={product.id}
         img={product.avatar}
         name={product.name}
         
         />
     })
    return (
        <div className=' bg-light marginTop '>
        <div className='bg-warning heading container mb-3 shadow rounded ' >
        <h1 className=' p-3 fs-1 ms-5'>Product ....</h1>
    </div>
    <div className='container'>
    <CardColumns>
        {products}
  </CardColumns>

    </div>
        </div>
    )
}
