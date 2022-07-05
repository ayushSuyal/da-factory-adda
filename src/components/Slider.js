import React from "react";
import image1 from '../images/3.jpg';
import image2 from '../images/4.jpg';
import { Carousel } from "react-bootstrap";
const Slider=()=>
{
    return(

      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
       
      </Carousel.Item>
    
     
    </Carousel>
    );
}

export default Slider;



