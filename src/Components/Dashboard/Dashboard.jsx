import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'


function Dashboard() {
  const {user} = useContext(UserContext)
  if (!user) return <div>Please LogIn</div>
  
  return (
    <div className='text-3xl bg-red-500 text-white text-center p-2'>Welcome to your Dashboard : {user.fullName}</div>
  )
}

export default Dashboard