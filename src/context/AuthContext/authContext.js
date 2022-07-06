import { createContext, useContext, useState } from "react";

const initialValues={
    isLoggedIn:false,
    user:null,
  
}
//create context
export const AuthContext = createContext({initialValues});

//use context
export const useAuthContext = ()=>useContext(AuthContext);



export const AuthProvider =({children})=> {
    const [user, setUser] = useState(null)
const [loggedIn, setLoggedIn] = useState(false)

const doLogin=(value)=> {
    setLoggedIn(value)
    console.log('dologin callled');
}

const setUserData=(value)=> {
setUser(value)
console.log('user callled');
}

const data = {loggedIn, doLogin,setUserData,user};
return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;


}


