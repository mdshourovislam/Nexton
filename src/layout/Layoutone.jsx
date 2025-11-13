import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'

const Layoutone = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layoutone