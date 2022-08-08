
import React, { Component } from 'react'
import  './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import ContactUs from './component/ContactUs'
import Home from './component/Home'
import Product from './component/Product'
import Details from './component/Page/Details'
import Cart from './component/Cart'
import Payment from './component/Page/Payment'
import Return from './component/Page/Return'
import Withdrawal from './component/Page/Withdrawal'
import Conditions from './component/Page/Conditions'
import Shipping from './component/Page/Shipping'
import Imprint from './component/Page/Imprint'
import PageNotFound from './component/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route ,Switch,BrowserRouter} from "react-router-dom";



export default class App extends Component {
  render() {

    return (
<BrowserRouter>
      <div className='position-relative'>

<Header/>

<div >
       <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/home" component={Home} />
<Route exact path="/product" component={Product} />
<Route path="/contactUs" component={ContactUs} />
<Route path='/product/:item' component={Details}/>
<Route path="/cart" component={Cart} />
<Route path="/payment" component={Payment} />
<Route path="/return" component={Return} />
<Route path="/withdrawal" component={Withdrawal} />
<Route path="/shipping" component={Shipping} />
<Route path="/conditions" component={Conditions} />
<Route path="/imprint" component={Imprint} />
<Route component={PageNotFound} />
    </Switch>
</div>
 <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}
