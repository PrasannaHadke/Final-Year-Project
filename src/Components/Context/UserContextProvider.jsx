import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState([])
    console.log("UserContextProvider", user);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        
        </UserContext.Provider>
    )
}

export default UserContextProvider