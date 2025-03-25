import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <h1 className="text-white text-4xl font-bold">Welcome to  Fitness Hub</h1>
      <Link to={"/register"}
      className='bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Join Now!</Link>
    </div>
  )
}

export default Home