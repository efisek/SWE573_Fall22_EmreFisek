import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );


const login = async(inputs) => {

    const res = axios.post("/auth/login", inputs, {withCredentials:true}
);

    setCurrentUser((await res).data);

};

const register = async(inputs) => {

    const res = axios.post("/auth/register", inputs, {withCredentials:true}
);

    setCurrentUser((await res).data);

};



useEffect(
    ()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]
);

return(
    <AuthContext.Provider value={{currentUser, login}}>
    {children}
    </AuthContext.Provider>
);

}

export default AuthContext;