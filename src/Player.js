import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
function Player({spotify}) {
    return (
        <div>
            <div className="player">
                <div className="player__body">
                 <Sidebar />
                 <Body spotify={spotify} />
                </div>
                <Footer />
            </div>
             
        </div>
    )
}

export default Player
