import { onValue } from "firebase/database";
import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues ={
    cart: []
}

//create context
export const CartContext = createContext({initialValues});

//use context
export const useCartContext = ()=>useContext(CartContext);

export const CartProvider =({children})=> {
 
    const [cartItem, setCartItem]=useState([])
   
    const addToCart= async(value)=>
    {
    console.log()
        setCartItem([...cartItem,value])
    //    alert("saved")
    toast.success("Added to the cart")
    }

    const data={cartItem,addToCart}
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>

    
}