import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
    
      <Navbar /> 
        {/* Navbar is the constant thingy */}
      <Outlet/> 
      {/* outlet is the variable it changes accordingly */}
      <ToastContainer />
    </>
  )
}

export default MainLayout
