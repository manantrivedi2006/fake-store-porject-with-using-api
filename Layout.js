import React from 'react'
import Navbar from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
