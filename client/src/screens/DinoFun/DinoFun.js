import React from 'react'
import {useSwipeable} from 'react-swipeable'
import './style.css'
const DinoFun = () => {
    const handlers = useSwipeable({
        onSwipedDown: () => console.log("Down"),
        onSwipedRight: () => console.log("right"),
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
