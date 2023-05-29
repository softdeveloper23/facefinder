import React from "react";
import Tilt from 'react-parallax-tilt';
import imagefinder from './imagefinder.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 100 }}>
                <div className="Tilt-inner pa3">
                    <img style={{ padingTop: '5px' }} alt="logo" src={imagefinder} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;