import React from 'react'
import { Link } from 'react-router-dom'
import BmiCalculator from '../BMI Calculator/BmiCalculator'
import LandingPage from './LandingPage'
import MemberShip from './MemberShip'
import GymReviews from './GymReviews'
import HeroSection from './HeroSection'
function Home() {
  return (
    <>
      {/* <div className='border-2 w-full h-screen flex justify-center bg-linear-to-r from-zinc-800 to-zinc-900'>
        <div className='border-green-600 w-[80%] h-screen flex'>
          <div className="w-[50%] flex flex-col justify-center items-start space-y-6 p-6">
            <h1 className="text-6xl font-bold text-white">
              You Only Fail When You Stop Trying!
            </h1>

            <button className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
                font-medium rounded-lg text-sm px-6 py-3 focus:outline-none transition duration-200">
              <Link to="/register" className="text-white">Join Now!</Link>
            </button>
          </div>

          <div className='w-[45%] m-5 bg-auto bg-center bg-no-repeat 
            bg-[url(https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww)] 
             rounded-lg overflow-hidden'>

          </div>

        </div>
      </div> */}
    <HeroSection/>
    {/* <LandingPage/> */}
    <MemberShip/>
    <BmiCalculator/>
    <GymReviews/>
    </>
  )
}

export default Home


// <>
//   <div className="border-2 w-full min-h-screen flex justify-center bg-gradient-to-r from-zinc-800 to-zinc-900 p-4">
//     <div className="border-green-600 w-full max-w-[80%] min-h-screen flex flex-col md:flex-row items-center md:items-start">
      
//       {/* Left Section: Text Content */}
//       <div className="w-full md:w-[50%] flex flex-col justify-center items-start space-y-6 p-6">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
//           You Only Fail When You Stop Trying!
//         </h1>

//         <button className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
//         font-medium rounded-lg text-sm sm:text-base px-6 py-3 focus:outline-none transition duration-200">
//           <Link to="/register" className="text-white">Join Now!</Link>
//         </button>
//       </div>

//       {/* Right Section: Image */}
//       <div className="w-full md:w-[45%] h-64 md:h-auto m-5 bg-cover bg-center bg-no-repeat 
//         bg-[url(https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww)] 
//         rounded-lg overflow-hidden">
//       </div>

//     </div>
//   </div>
// </>
