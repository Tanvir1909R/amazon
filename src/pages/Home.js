import React from 'react'
import NavBar from '../components/navBar/NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <NavBar />
        <Outlet></Outlet>
    </>
  )
}

export default Home