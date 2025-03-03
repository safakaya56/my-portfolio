import React from 'react';
import "../css/home.css"
import Header from "../components/Header.jsx";
import Description from '../components/Description.jsx';


function Background() {
    return (

        <div>
            <div className="header">
                <Header />
            </div>

            <div className="description">
                <Description />
            </div>

            <section className="box">
                <video src="/video/bgVideo.mp4" className="video" autoPlay muted loop></video>
            </section>

        </div>
    );
}

export default Background;
