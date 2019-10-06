import React from 'react';
import videourl from "./DesignMovie.mp4"

export default function Hero() {


    return(

        <div>
            <a id="home"></a>
            <div className="video-container">
                <video playsInline autoPlay muted loop id="bgvid">
                    <source src={videourl} type="video/mp4"/>
                </video>
            </div>

            <div className="header">
                <h1></h1>
            </div>
        </div>

    )
}