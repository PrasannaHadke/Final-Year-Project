import React, { useState} from 'react';
import Logo from '../Logo/Logo.jsx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useContext } from 'react';
import UserContext from '../Context/UserContext.js';
export default function Header() {
    const {user ,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);


    const handleLoginBtn = () => {
        if (user) {
            setUser("");
            navigate("/");
        } else {
            navigate("/signup");
        }
      };
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <Logo className="w-16 h-16" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className={`lg:flex flex-grow justify-center ${menuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:static absolute top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 lg:px-4 duration-200 border-b border-gray-100 lg:border-none hover:bg-gray-50 hover:text-orange-700 lg:hover:bg-transparent ${isActive ? "text-orange-700" : "text-gray-800"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 lg:px-4 duration-200 border-b border-gray-100 lg:border-none hover:bg-gray-50 hover:text-orange-700 lg:hover:bg-transparent ${isActive ? "text-orange-700" : "text-gray-800"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/more"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 lg:px-4 duration-200 border-b border-gray-100 lg:border-none hover:bg-gray-50 hover:text-orange-700 lg:hover:bg-transparent ${isActive ? "text-orange-700" : "text-gray-800"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    More
                                </NavLink>
                            </li>
                            {user &&<li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 lg:px-4 duration-200 border-b border-gray-100 lg:border-none hover:bg-gray-50 hover:text-orange-700 lg:hover:bg-transparent ${isActive ? "text-orange-700" : "text-gray-800"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Dashboard
                                </NavLink>
                            </li>}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>

                    {/* Auth Buttons */}
                    <div className="lg:flex items-center lg:order-2">
                        <button
                            className='m-3 p-3 hover:bg-gray-50 hover:border-red-500 hover:text-red-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                            onClick={handleLoginBtn}
                        >
                            {user ? "LogOut" : "LogIn"}

                        </button>
                        <button
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            onClick={() => navigate("/register")}
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
