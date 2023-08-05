import React from "react"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
const Login = () => {
    const nav = useNavigate()
    const [loginObj, setLoginObj] = useState({})
    const clickHandler = () => {

        axios.post('/login' , (loginObj)).then((data) => {
            if (data.status === 200){
                nav('/home')
            }
            else {
                alert('Incorrect pw / username, or back end not yet configured')
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