import React, { useContext } from 'react'
import { UserContext } from './App'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = () => {
        setUser({name: 'John', age: 20})
        if(location.state?.from){
            navigate(location.state.from)
        }
    }
    console.log(location);
  return (
    <>
    <div>Login Page</div>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login