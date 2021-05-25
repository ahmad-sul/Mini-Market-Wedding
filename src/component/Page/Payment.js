import React from 'react'

export default function Payment() {
    return (
        <div className='bg-light'>
        <div className='bg-warning heading container mb-3 shadow rounded ' >
        <h1 className=' p-3 fs-1 ms-5'>Payment and transmission methods ....</h1>
    </div>

    <div className='container'>
    <h4 className='border-bottom border-warning p-3'>Payment</h4>
  

    <p>The following payment options are available in our shop:</p>
    <li>Payment by Paypal</li>
    <li>Payment by PayPal with credit card</li>
    <li>Payment by PayPal with direct debit</li>
    <li>Payment by invoice</li>

    <hr />

    <p> Payment by PayPal, PayPal with credit card and PayPal with direct debit:</p>
    <span>  You pay quickly and easily using your PayPal account. If you do not have a PayPal account, you can order as a guest and do not have to register / log in to PayPal.</span> <br />
    <span>At the end of the ordering process you will be automatically redirected to the PayPal page. There you can either log in with your account or order as a guest and then confirm the payment. The debit is made by credit card, direct debit or PayPal credit.</span><br />
    <span>Your order will then be processed immediately.</span><br />
    <span>If you return an ordered item, the corresponding value of the goods will be credited back to your PayPal account.</span>

    <hr />

<p>Payment by invoice:</p>
<span>If you choose invoice as the payment method, we ask you to transfer the invoice amount within 14 days of receipt of the goods.</span><br />
<span>All the necessary payment information can be found in the email or invoice that is included in the package.</span><br />
<span>Unfortunately, we cannot offer a longer term of payment or payment in installments.</span><br />
<span>We cannot offer you the invoice payment method if you are not of legal age.</span><br /><br /><br />


  
  <h4 className='border-bottom border-warning p-3'>Shipping conditions</h4><br />
  <table class="table mb-5">
  <thead class="table-dark">
  <tr>
      <th scope="col">Country</th>
      <th scope="col">delivery time</th>
      <th scope="col">Flat rate fee</th>
      <th scope="col">free shipping</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">Germany</th>
      <td>1-5 working days</td>
      <td>4.99 euros</td>
      <td>from 40.00 euros</td>
    </tr>
    <tr>
      <th scope="row">Europe</th>
      <td>1-7 working days</td>
      <td>11.99 euros</td>
      <td>from 75.00 euros</td>
    </tr>
  </tbody>
</table>

<span>(Belgium, Denmark, Luxembourg, Netherlands, Austria, Poland, Czech Republic)</span><br /><br />
<span >Shipping outside of Europe is not possible.</span><br /><br />
<span>The delivery is carried out by DPD or DHL.</span><br /><br /><br />
<span>In spite of all care, there may be damage during transport when the items are delivered to you. Please report the damage to the respective delivery agent (DPD or UPS) immediately upon receipt of the goods. Please contact us afterwards. We thank you for your help.</span>
<hr />
    </div>
        </div>
    )
}
