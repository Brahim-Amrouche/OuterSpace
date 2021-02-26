import React from 'react';


function Discover_item(props) {
    return (
        <div className="discover-item">
            <div id="discover-img"><img src={props.img}/> </div>
            <h1 id="discover-item-title">{props.title}</h1>
            <p id="discover-item-p">{props.content}</p>
            <a href="/" id="discover-link">Discover Our {props.title}</a>
            
        </div>
    )
}

export default Discover_item
