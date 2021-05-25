import React from 'react'

export default function Shipping() {
    return (
        <div>
        <div className='bg-warning heading container mb-3 shadow rounded ' >
        <h1 className=' p-3 fs-1 ms-5'>Shipping ....</h1>
    </div>
    <div className='container'>
    <h4 className='border-bottom border-warning p-3'>Shipping conditions</h4>
    <span>  Country delivery time Flat rate free shipping</span><br /><br />
    <span>Germany 1-5 working days 4.99 euros from 40.00 euros</span><br /><br />
    <span>Europe 1-7 working days 11.99 euros from 75.00 euros</span><br /><br />
    <span>(Belgium, Denmark, Luxembourg, Netherlands, Austria, Poland, Czech Republic)</span><br /><br />
    <span>Shipping outside of Europe is not possible</span><br /><br />
    <span>Delivery is carried out by DHL, UPS or DPD.</span><br /><br />
    <span>In spite of all care, there may be damage during transport when you receive the goods. Please report the damage to the respective delivery agent (DPD or UPS) immediately upon receipt of the goods. Please contact us afterwards. We thank you for your help.</span><br /><br />


    </div>
        </div>
    )
}
