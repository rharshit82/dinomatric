import React from 'react';
import './Homescreen.css';
import { useAuth0 } from "@auth0/auth0-react";
import Carousel from './Carousel';
import Features from './Features';
const HomeScreen = () => {
  const { user, isAuthenticated } = useAuth0();

    return (
        <>
         {/* {isAuthenticated && (
      <div> 
        <h2>Hi {user.name}</h2> <br />
        <LinkContainer to='/humanblog'><h3>Go to Blog</h3></LinkContainer>
      </div>
          )} */}

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
