import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from './App'
import { useLocation } from 'react-router-dom'

const PrivateRoute = () => {
    const location = useLocation()
    console.log(location);
    const [user] = useContext(UserContext)
  return  user? <Outlet /> : <Navigate to="/login" replace={true} state={{from: location}}/>
}

export default PrivateRoute