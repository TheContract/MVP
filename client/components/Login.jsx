import React from "react"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()

    const clickHandler = () => {
        nav('/home')
    }

    return (
        <button onClick={clickHandler}>BIG TEST</button>
    )
}

export default Login