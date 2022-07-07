import React from "react";
import Navv from "../components/Navbar";
import image1 from "../images/13.jpg";
import Drop2 from "../components/Dropdown2";
import '../css/style.css';
import { useCartContext } from "../context/cartContext/cartContext";

const Cart = () => {

    const {cartItem, addToCart}=useCartContext();

    return (
        <>
            <Navv />

            <div className="container-fluid">
                {/* this section is for the list of items in the cart  {card }*/}
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                               <h2>Shopping Cart</h2> 
                               <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={cartItem?.image} className="cartImg img-fluid" alt="this is the image" />
                            </div>
                            <div className="col-md-5">
                                <h6 className="h6 cartHeading ">
                                    Tecno Phantom X Iceland Blue (8GB+256GB) |Ultra Flagship Curved Display |Flexible... 
                                     </h6><span className="cartSpan">In Stock</span>
                                     <p className="cartPara">Eligible for FREE Shipping</p>
                                     <p className="cartPara1"><input type="checkbox" value="check" className="mr-2"/>This will be a gift</p>
                                     <p className="paraFont"><strong>Size name: </strong>8GB RAM, 256GB Storage </p>
                                     <p className="paraFont"><strong>Pattern name: </strong>Tecno Phantom X Iceland</p>
                                     <p className="paraFont"><strong>Colour: </strong>Iceland Blue</p>
                                     <div className="row">
                                        <div className="col-md-4">
                                        <Drop2 />
                                        </div>
                                        <div className="col-md-4 my-2">
                                            <a href="#" className="linkSize">Save for later</a>
                                        </div>
                                        <div className="col-md-4 my-2">
                                            <a href="#" className="linkSize">Delete</a>
                                        </div>
                                     </div>
                                      
                            </div>
                            <div className="col-md-3">
                                  <h6> &#8377; 25,000</h6>
                            </div>
                        </div>
                        <div className="row">   
                            <div className="col-md-12">
                            <hr></hr>
                            <h5>Subtotal (3 items): <strong>1,05,997.00</strong>  </h5>
                            <hr></hr>
                            </div>
                        </div>
                    </div>

                    {/* this section is for the proceed to buy */}
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                            <p className="cartSpan">Your order is eligible for FREE Delivery.</p>
                            <p className="cartSpan1">Select this option at checkout. Details</p>
                            <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                             <h5>Subtotal (3 items): <strong>1,05,997.00</strong></h5>
                             <button type="button" className="btn btn-primary my-3 cartBtn">Proceed to Buy</button>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}

export default Cart;