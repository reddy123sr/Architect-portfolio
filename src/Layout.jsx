import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Outlet/>
    </div>
  )
}

export default Layout;