import React from 'react'
import Display_exemple from './Display_exemple';

function Exemple() {
    return (
        <div className="exemple" >
            <h1 id="exemple-title">Our Final Products</h1>
            <div id="links-images">
                <a href="/">Publicity <span>.</span> </a>
                <a href="/">Web Designs <span>.</span></a>
                <a href="/">Solutions <span>.</span></a>
            </div>
            <div id="line"></div>
            <div className="display-exemple">
                <Display_exemple />
            </div>
        </div>
    )
}

export default Exemple
