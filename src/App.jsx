import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layoutone from './layout/Layoutone'
import Home from './pages/Home'

const App = () => {

  const RouteCha= createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layoutone/>}>

      <Route index element={<Home/>}/>

      </Route>
    </Route>
  ))



  return (
    <>
    <RouterProvider router ={RouteCha}/>
    </>
  )
}

export default App