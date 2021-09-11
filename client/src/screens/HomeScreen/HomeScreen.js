import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";
const HomeScreen = () => {
  const { user, isAuthenticated } = useAuth0();

    return (
        <>
         {isAuthenticated && (
      <div> 
        <h2>Hi {user.name}</h2> <br />
        <LinkContainer to='/humanblog'><h3>Go to Blog</h3></LinkContainer>
      </div>
          )}
        <iframe
        id='playlistiframe'
        width='350'
        height='400'
        src={`https://console.echoar.xyz/webar?key=ancient-field-9556&entry=8e0e559f-a46f-4859-80cf-2463bbd5ca6d`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
        </>
    )
}

export default HomeScreen
