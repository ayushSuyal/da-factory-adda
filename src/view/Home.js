import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CSSProperties } from "react";
import Card from "../components/card";
import Slider from "../components/Slider";
import Navtab from "../components/Navtab";
import Productcard from "../components/Productcard";
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import image7 from '../images/7.jpg'
import image8 from '../images/8.jpg'
import image9 from '../images/9.jpg'
import image10 from '../images/10.jpg'
import image11 from '../images/11.jpg'
import image12 from '../images/12.jpg'
import { useNavigate, useParams } from "react-router-dom";
import '../css/style.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import Navv from "../components/Navbar";
import { db } from "../database/firebase";
import Footer from "./Footer";
import ClipLoader from "react-spinners/ClipLoader";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/authContext";
const Home = () => {

    const [data, setData] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [input, setInput] = useState();

    const [datas, setDatas] = useState([]);
   
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate();

    const {user,setUserData }=useAuthContext()


    //read from the database
    const getData = async () => {

        try {
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products");
            // console.log(response.data);
            setData(response.data)
            setTempData(response.data)
            setLoading(false)
        }
        catch (error) {
            console.log(error);
        }
    }

    //fetch data of single user from the database 

    const getUserData = async () => {
        const uidd = localStorage.getItem('uid');
        
        const userRef = collection(db, "Users");
        const q = query(userRef, where("id", "==", uidd));
        const querySnapshot = await getDocs(q);
        console.log({ querySnapshot })
        querySnapshot.forEach((doc) => {
          
            setUserData(doc.data())
        });

    }

    //  console.log(input)
    useEffect(() => {
        getData()
        getUserData()
    }, []);


    //handleOnChange Function

    const handleOnChange = (event) => {
        setInput(event.target.value)
    }

    //handleOnSubmit

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (input === "" || input === null) {
            setTempData(data)
        }
        else {
            setTempData(data.filter(x => x.title.toLowerCase().includes(input.toLowerCase())));
        }
    }
  //handle image click for description
    const handleImageClick=(id)=>
    {
     navigate("/description/"+id)
    }
 


    return (
        <>
            <Navv  />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Slider />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-3 my-3">
                        <div className="row ">
                            <div className="col-md-12 col-sm-12">
                                <img src={image5} className="img-fluid " alt="This is Image" />
                            </div>
                        </div>
                        <div className="row sticky">
                            <div className="col-md-12 col-sm-12 my-3">
                                <img src={image8} className="img-fluid" alt="this is the image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4 my-3 text-center">
                                <Card title="24*7 Support" icon="fa-solid fa-earth-asia" details=" Get big discount Everyday" />
                            </div>
                            <div className="col-md-4 my-3 text-center">
                                <Card title="Free Shipping" icon="fa-solid fa-person-biking" details="On order over $199" />

                            </div>
                            <div className="col-md-4 my-3 text-center">
                                <Card title="Sent A Gift" icon="fa-solid fa-gift" details="Send a Gift Product" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <img src={image6} className="img-fluid" alt="this is the image" />
                            </div>
                            <div className="col-md-6 ">
                                <img src={image7} className="img-fluid" alt="this is the image" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3 my-3">
                                        <img src={image10} className="img-fluid" alt="this is the image" />
                                    </div>
                                    <div className="col-md-9 my-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img src={image9} className="img-fluid" alt="this is the image" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 my-3">
                                                <img src={image11} alt="this is the image" className="img-fluid" />
                                            </div>
                                            <div className="col-md-6 my-3">
                                                <img src={image12} alt="this is the image" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Navtab value={input} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
                                    </div>
                                </div>

                                <div className="row">
                                    {  loading?<div className="text-ce ter loader"><ClipLoader color="#0b0808" loading={loading}  size={50} /></div> :
                                        tempData.map((element) => {
                                            return (
                                                <div className="col-md-3">
                                                    <Productcard 
                                                    data={element}
                                                    handleImageClick={handleImageClick}
                                                   />
                                                </div>
                                            )
                                        })
                                    }
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
        </>
    );
}

export default Home;