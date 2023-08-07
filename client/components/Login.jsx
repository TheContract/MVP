import React from "react"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
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

    return (
    <div>
        <form>
            <label>Username</label>
            <input id = "usernameLogin" onChange={usernameHandler}></input>
        </form>
        <form>
            <label>Password</label>
            <input id = "passwordLogin" onChange={passwordHandler}></input>
        </form>
        <button onClick={clickHandler}>Log in</button>    
        <button onClick={createAccount}>Create Account</button>    

    </div>
    )
}
export default Login

