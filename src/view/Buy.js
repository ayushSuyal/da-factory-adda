import React from "react";
import Navv from "../components/Navbar";
import Footer from "../view/Footer";
import "../css/buy.css";
const Buy = () => {
    return (
        <>
        <Navv />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 my-3">
                        <div className="row">
                            {/* section 1 */}
                            <div className="col-md-1">
                                <h6 className="h6 fb">1</h6>
                            </div>
                            <div className="col-md-3">
                                <h6 className="h6 fb"> Delivery address</h6>
                            </div>
                            <div className="col-md-3">
                                <p> Ayush suyal
                                    House no HE 1244
                                    Mohali phase 1
                                    MOHALI, PUNJAB 160055
                                </p>
                                {/* <a href="" >Add delivery instructions</a> */}
                            </div>
                            <div className="col-md-3"></div>
                            <div className="col-md-2">
                                <p className="changebtn">change</p>
                                   
                            </div>
                           
                        </div>
                        {/* section 2  */}
                        <div className="row my-3z">
                            <div className="col-md-1">
                                <h6 className="h6 cl fb">2</h6>
                            </div>


                            <div className="col-md-8 ">
                                <h6 className="h6 heading2 fb">
                                    Select a payment method
                                </h6>
                            </div>
                            <div className="col-md-3">
                                {/* <p>close<span><i class="fa-thin fa-xmark"></i> */}
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className="row my-3" id="borderRow">
                            <div className="col-md-12 my-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="h6 fb">Your available balance</h6>
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" aria-describedby="passwordHelpBlock" />
                                    </div>
                                    <div className="col-md-3">

                                        <button type="button" class="btn btn-light btnborder">Apply</button>

                                    </div>
                                    <div className="col-md-5">

                                    </div>

                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <h6 className="h6 fb">Your saved credit and debit cards</h6>
                                        <hr/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-1">
                                    <input class="form-check-input mx-3" type="radio" name="cardOption" id="inlineRadio2" value="card1"/>
                                    </div>
                                    <div className="col-md-5">
                                    <p className="para11">Amazon Pay ICICI Bank Credit Card <span className="span11">ending in 7002</span></p>
                                    <p>Enter CVV(？):<input type="text"   style={{width:"50px"}} placeholder="cvv"/></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="font14">Gaurav bisht</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="font14">09/2029</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                    <h6 className="h6 fb">Another payment method</h6>
                                    <hr/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                    <input class="form-check-input mx-3" type="radio" name="cardOption" id="inlineRadio2" value="card1"/>
                                    </div>

                                    <div className="col-md-10">
                                        <h6 className="h6 fb">Add Debit/Credit/ATM Card</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                    <input class="form-check-input mx-3" type="radio" name="cardOption" id="inlineRadio2" value="card1"/>
                                    </div>

                                    <div className="col-md-10">
                                        <h6 className="h6 fb">EMI</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                    <input class="form-check-input mx-3" type="radio" name="cardOption" id="inlineRadio2" value="card1"/>
                                    </div>

                                    <div className="col-md-10">
                                        <h6 className="h6 fb">Pay on Delivery</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" id="borderRow">
                    <button type="button" className="btn btn-primary my-3 cartBtn">Use this payment method</button>
                    <p style={{fontSize:"12px"}} className="text-center justify-content-center">Choose a payment method to continue checking out. You'll still have a chance to review your order before it's final. </p>
                    <hr/>
                    <h6 className="h6 fb">Order Summary</h6>
                    <pre>items:        $12200</pre>
                    <pre>delivery:     $0.0</pre>
                    <hr/>
                    <h6 className="h6 fb" style={{color:"#800000"}}>Order Total: 	  $12200.00 </h6>
                    <hr/>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-12 bg-dark">
                            <Footer />
                        </div>
                    </div>

            </div>
          
        </>
    );
}

export default Buy;