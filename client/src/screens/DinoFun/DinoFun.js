import React from 'react'
import {useSwipeable} from 'react-swipeable'
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'
const DinoFun = () => {
    const { loginWithRedirect } = useAuth0();
    const handlers = useSwipeable({
        onSwipedDown: () => loginWithRedirect(),
        onSwipedLeft: () => console.log("Left"),
        onSwipedUp: () => console.log("Up"),
        onSwipedRight: () => console.log("Right"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });
    return (
        <div className="swiper" {...handlers}>
           <h2>Do Not Swipe Down</h2>
        </div>
    )
}

export default DinoFun
