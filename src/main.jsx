import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import About from './Components/About/About.jsx'
import SignUp from './Components/Form/SignUp.jsx'
import Register from './Components/Form/Register.jsx'
import Home from './Components/Home/Home.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import More from './Components/Home/More.jsx'
import AdminDashboard from './Components/Dashboard/AdminDashboard.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} /> 
      <Route path='about' element={<About/>} />
      <Route path='more' element={<More/>} />
      {/* <Route path='contact' element={<Contact/>} /> */}
      <Route path='signup' element={<SignUp/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='admin' element={<AdminDashboard/>} />
      <Route path='register' element={<Register/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
