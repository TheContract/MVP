

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios'
import { updateUsername } from "../redux/updateClient";
// `needs to render two buttons
// use state to track the PW and username
// set username to redux state
const AccountCreator = ()=> {

    const [loginInfo, setLoginInfo] = useState({})
    const Dispatch = useDispatch()
    const accountSubmitButtonHandler = () =>{
        // submit info to server
        // put the username into redux store

        Dispatch(updateUsername(loginInfo.username))
        axios.post('/api/user', loginInfo).then((data) => {console.log(data)}).catch(alert('something went wrong'))

    }

    const usernameInputHandler = (e) =>{
        //set input to state and redux
        const {password} = loginInfo
        const username = e.target.value
        setLoginInfo({
            username : username,
            password:  password
        })
    }

    const passwordInputHandler = (e) =>{
        //set input to state and redux
        const {username} = loginInfo
        const password = e.target.value
        setLoginInfo({
            username : username,
            password:  password
        })
    }


    return(
        <div>
        <h1>Create an account</h1>
        <form>
            <label>Username</label>
            <input onChange = {usernameInputHandler}></input>
            <label>Password</label>
            <input type = "password" onChange = {passwordInputHandler}></input>
        </form>
        <button onClick = {accountSubmitButtonHandler}>Create account</button>
        </div>
    )

}



export default AccountCreator