import React from "react"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
import '/dist/output.css';

const Login = () => {
    const nav = useNavigate()
    const [loginObj, setLoginObj] = useState({})
    const clickHandler = () => {
        console.log(loginObj + " is login")
        axios.post('/api/login' , loginObj).then((data) => {
            if (data.status === 200){
                nav('/home')
            }
            else if (data.status === 500){
                alert('Incorrect pw / username')
            }
        }).catch((error) => {
            console.log(error)
            if (error.response.status === 500 && error.response.data.err === "User not found"){
                alert('Username not found. Check username, or create a new account')
            }
            else if (error.response.status === 500 && error.response.data.err === "incorrect password"){
                alert('password incorrect')
            }
            else if (error.response.status === 500) alert("test worked")
            else {
                alert('Username or password incorrect')
            }   
        })
    }

    const createAccount = () => {
       nav('/create')
    }


    const usernameHandler = (e) =>{
        const {password} = loginObj
        setLoginObj({
            username : e.target.value,
            password : password
        })
    }

    const passwordHandler = (e) =>{
        const {username} = loginObj
        setLoginObj({
            username : username,
            password : e.target.value
        })
    }
// <div class="flex h-screen items-center justify-center flex-col" style="background-image: url('https://img95.lovepik.com/photo/40107/8988.gif_wh300.gif'); background-size: cover;">
// whoever picks this up is more than welcome to change the ridiculous bg gif

    return (
        <div
        className="flex h-screen items-center justify-center flex-col"
        style={{
          backgroundImage: "url('https://img95.lovepik.com/photo/40107/8988.gif_wh300.gif')",
          backgroundSize: "cover",
        }}
      >
      <h1 style = {{
        color: "white",
        fontSize : "48"
      }}>Welcome to Contract</h1>
      <h2 style = {{
        color: "white",
        fontSize : "32"
      }}>Get large today. Sign in/up below</h2>
        <form>
            <input placeholder = "Username" id = "usernameLogin" onChange={usernameHandler} className="input-bordered" ></input>
        </form>
        <form>
            <input placeholder = "password" id = "passwordLogin" onChange={passwordHandler} className = "input-bordered" type = "password"></input>
        </form>
        <button onClick={clickHandler} className = 'btn'style={{
            marginBottom : "10px"
        }}>Log in</button>    

        <button onClick={createAccount} className = 'btn'>Create Account</button>    
    </div>
    )
}
export default Login
