import React from 'react'
// import Header from '../Navbar/Header';
// import Footer from '../Footer/Footer';

const HomeScreen = () => {
    return (
        <>
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
