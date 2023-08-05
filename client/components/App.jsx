import React from "react"
import { useNavigate } from "react-router-dom"

import {BrowserRouter, Routes, Router, Switch, Route} from 'react-router-dom'
import AccountCreator from "./AccountCreator.jsx"
import Home from "../containers/Home.jsx"
import Login from "./Login.jsx"
const App = () => {
    return (
        <div className = 'browser-router'>
        <BrowserRouter>
        <Routes>
       <Route path = "/create" element = {<AccountCreator/>}></Route>
      <Route path = "/home" element = {<Home/>}></Route>
      <Route exact path="/" element= {<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
)
}

export default App
// incase donovan needs
//    <Route path = "/createForm" element = {<Home/>}></Route>

// <BrowserRouter>
// <Routes>
//    <Route path = "/create" element = {<AccountCreator/>}></Route>
//    <Route path = "/home" element = {<Home/>}></Route>
//    <Route exact path="/" element= {<Login/>}></Route>
// </Routes>
// </BrowserRouter>


// <div className = "router">
// <EntryForm></EntryForm>
// </div>