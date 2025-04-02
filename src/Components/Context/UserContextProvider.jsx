import React, { useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";
const UserContextProvider = ({children})=>{
    const [user,setUser] = useState([]) // yaha data signup se araha hai
    // console.log("UserContextProvider", user);

    const [registerUser, setRegisterUser] = useState([])
    
    const navigate = useNavigate();
    const logout = () => navigate("/");
    return (
        <UserContext.Provider value={{user, setUser , logout , registerUser, setRegisterUser}}>
        {children}
        
        </UserContext.Provider>
    )
}

export default UserContextProvider