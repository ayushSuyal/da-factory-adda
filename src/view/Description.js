import React, { useEffect, useState } from "react";
import image13 from "../images/13.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/8.jpg";
import axios from 'axios';
import "../css/style.css";
import Navv from "../components/Navbar";
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ClipLoader from "react-spinners/ClipLoader";


const Description = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({});
    const { id } = useParams();
    const [count, setCount] = useState(1);


    useEffect(() => {
        getProductDescription()

    }, [id])

    //function to get product description
    const getProductDescription = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products/" + id);
            // console.log(response.data);
            setData(response.data)
            setLoading(false)

        }
        catch (error) {
            console.log(error);
        }
    }

    //functions of quantity add and sub button
    const onClickMin = () => {
        setCount(count-1)
    }

    const onClickMax = () => {
       setCount(count+1)
    }

    const onChange = (event) => {
        setCount(event.target.value)
    }

    //handle handleAddCart function

    const handleAddCart=(id)=>
    {
        
    }


    return (
        <>
            <Navv />
            {loading ? <div className="text-center loaderr"><ClipLoader color="#0b0808" loading={loading} size={50} /></div> :
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 my-3">
                            <img src={image5} className="img-fluid" alt="this is the image" />
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={image6} className="img-fluid" alt="this is the image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 my-3">
                            <div className="des-col">
                                <img src={data.image} className="img-fluid des-image" alt="this is the image"></img>
                            </div><div className="row">
                                <div className="col-md-12">
                                    <h5 className="my-3">Description</h5>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <p style={{ color: "grey" }}>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 my-3">
                            <h5>{data.price}$</h5>
                            <h6>Description:</h6>
                            <p>{data.title}</p>
                            <div className="quantity buttons_added">
                                <input type="button" value="-" className="minus " onClick={onClickMin} /><input type="number" name="quantity" value={count} onChange={onChange} style={{ width: "32px" }} className="mx-2 countIn" /><input type="button" value="+" className="plus" onClick={onClickMax} min="1"/>
                                 <button type="button" className="btn btn-primary mx-3 btnn" onClick={handleAddCart}>Add to Cart</button>
                                  <button type="button" className="btn btn-primary mx-1 btnnn"><h5><i className="fa-solid fa-heart"></i></h5></button><button type="button" className="btn btn-primary  btnnn"><h5 className="text-center"><i className="fa-solid fa-chart-simple "></i></h5></button>
                            </div>
                            <div className="row">
                                <div className="col-md-12 my-3">
                                    <div class="card" >
                                        <div class="card-header">
                                            Policys
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><p style={{ fontWeight: "bold" }}>Security policys</p>
                                                <p>(edit with the Customer Reassurance module)</p>
                                            </li>
                                            <li class="list-group-item">
                                                <p style={{ fontWeight: "bold" }}>  Delivery policy</p>
                                                <p>(edit with the Customer Reassurance module)</p>
                                            </li>
                                            <li class="list-group-item">
                                                <p style={{ fontWeight: "bold" }}>  Return policy</p>
                                                <p>(edit with the Customer Reassurance module)</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 bg-dark">
                            <Footer />
                        </div>
                    </div>

                </div>
            }
        </>
    );
}
export default Description;