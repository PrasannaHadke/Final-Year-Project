import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../Context/UserContextProvider'
import SignUp from '../Form/SignUp'
import Dashboard from '../Dashboard/Dashboard'

function Layout() {
  return (
    <UserContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    
    
    </UserContextProvider>
  )
}

export default Layout