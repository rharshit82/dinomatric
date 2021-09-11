import React from 'react';
import './Homescreen.css';
import Carousel from './Carousel';
import Features from './Features';
const HomeScreen = () => {

    return (
        <>
        <div className="Banner">
          <div className="row mx-0">
           <div className="col-lg-4 col-sm-12 Bannertext">
             <h1>DinoMatric</h1>
             <p>Come lets know something about dinos !!!!</p>
           </div>  

           <div className=" col-lg-8 col-sm-12 Bannerpic">
              <Carousel/>
           </div>
          </div>
          
        </div>  

        <div className="container-fluid my-5">
          
          <Features/>
          
        </div> 
        </>
    )
}

export default HomeScreen
