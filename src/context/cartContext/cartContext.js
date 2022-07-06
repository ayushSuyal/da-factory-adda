import { createContext, useContext, useState } from "react";

const initialValues ={
    cart: null
}

//create context
export const AuthContext = createContext({initialValues});

//use context
export const useAuthContext = ()=>useContext(AuthContext);



export const AuthProvider =({children})=> {


    
}