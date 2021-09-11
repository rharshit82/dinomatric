import React from "react";
import "./Homescreen.css";
import Pic1 from  "../../assets/pic1.png";
import Pic2 from  "../../assets/pic2.png";
import Pic3 from  "../../assets/pic3.png";
import Pic4 from  "../../assets/pic4.png";


function Carousel() {
  return (
    <div className="carouselcont">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Pic1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Pic2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Pic3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
         
        </a>
      </div>
    </div>
  );
}

export default Carousel;
