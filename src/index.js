import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import { createStore } from "redux"
import { Reducer } from "./component/Reducer"
import {Provider} from 'react-redux'

const store = createStore(Reducer)


reactDOM.render(<Provider store = {store}><App/></Provider>,document.getElementById("root"))