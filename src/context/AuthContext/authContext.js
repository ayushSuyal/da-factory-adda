import { createContext, useContext, useState } from "react";

const initialValues={
    isLoggedIn:false,
    user:null,
    doLogin:()=>{}
}
export const AuthContext = createContext({initialValues});
export const useAuthContext = ()=>useContext(AuthContext);




export const AuthProvider =({children})=> {
    const [user, setUser] = useState(null)
const [loggedIn, setLoggedIn] = useState(false)

const doLogin=(value)=> {
    setLoggedIn(value)
}

setUser()
setLoggedIn(!loggedIn)

const data = {loggedIn, doLogin};
return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;


}


