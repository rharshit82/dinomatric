import React,{useState,useEffect} from 'react'
import {useSwipeable} from 'react-swipeable'
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'
const DinoFun = () => {
    const {loginWithRedirect}= useAuth0();
    const [swipeLeft,setSwipeLeft] = useState(false);
    const [swipeRight,setSwipeRight] = useState(false);
    const [swipeUp,setSwipeUp] = useState(false);
    const [swipeDown,setSwipeDown]=useState(0);
    useEffect(() => {
        if(swipeDown>2){
            console.log("hello")
            loginWithRedirect();
        }
    }, [swipeDown])
    const handlers = useSwipeable({
        onSwipedDown: () => setSwipeDown(swipeDown+1),
        onSwipedLeft: () => setSwipeLeft(true),
        onSwipedUp: () => setSwipeUp(true),
        onSwipedRight: () => setSwipeRight(true),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });
    return (
        <div className="swiper" {...handlers}>
           <h2 className="my-4">Do Not Swipe Down</h2>
            {swipeLeft? (<div><h3>Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years</h3> <br /></div>) : null }
            { swipeRight?(<div><h3>Dinosaur fossils have been found on all seven continents.</h3>  <br /></div>): null }
           {swipeUp?(<div><h3>There are roughly 700 known species of extinct dinosaurs.</h3>  <br /></div>): null}
           {swipeDown===1? <div><h3>We Told you swipe down doesn't work!</h3><br /></div>:null}
           {swipeDown===2? <div> <h3>Stop Trying!!!</h3><br /></div>:null}
        </div>
    )
}

export default DinoFun
