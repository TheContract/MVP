

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios'
import { updateUsername } from "../redux/updateClient";
import { useNavigate } from "react-router";
// `needs to render two buttons
// use state to track the PW and username
// set username to redux state
const AccountCreator = ()=> {
    console.log("Test")
    const [loginInfo, setLoginInfo] = useState({})
    const Dispatch = useDispatch()
    const nav = useNavigate()
    const accountSubmitButtonHandler = () =>{
        // submit info to server
        // put the username into redux store

        Dispatch(updateUsername(loginInfo.username))
        axios.post('/api/user', loginInfo).then((data) => {
            if (data.status === 200){
                nav('/home')
            }
        })
            .catch((error) => {
                alert('something went wrong; ensure that the username is unique')
            })
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
        <div
        style={{
            backgroundImage: "url('https://img95.lovepik.com/photo/40107/8988.gif_wh300.gif')",
            backgroundSize: "cover",
          }}
        className="flex h-screen items-center justify-center flex-col"
        >
        <h1 style = {{
            color : "white",
            fontSize : '24px'
        }}>Create an account</h1>
        <form className = "flex-col">
            <label style = {{
                color : "white",
                fontSize : '24px'
            }}>Username</label>
            <input className="input-bordered" onChange = {usernameInputHandler}></input>
            <label style = {{
                color : "white",
                fontSize : '24px'
            }}>Password</label>
            <input className="input-bordered"type = "password" onChange = {passwordInputHandler}></input>
        </form>
        <button onClick = {accountSubmitButtonHandler} className = "btn">Create account</button>
        </div>
    )

}



export default AccountCreator