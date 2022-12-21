import React from 'react'
import { useLocation } from 'react-router-dom'
const Dashboard = () => {
    const location = useLocation()
    console.log(location);
  return (
    <h4>This is User Dashboard</h4>
  )
}

export default Dashboard