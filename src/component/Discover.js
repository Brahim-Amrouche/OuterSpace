import React from 'react'
import Discover_item from './Discover_item';
import ads from '../sources/ads.png';
import design from '../sources/design.png';
import solutions from '../sources/solutions.png';

function Discover() {
    return (
        <div className="discover">
            <h1 id="discover-title">An Expertise of Different Scale</h1>
            <div id="colorfull-strap"></div>
            <div id="discover-list">
                <Discover_item  img={ads} title="Publicity" content="Lorem Ipsum MogulisValar inor dentar" />
                <Discover_item img={design} title="Designs" content="Lorem Ipsum Mogulis KENTA MANITA KIRAM"  />
                <Discover_item img={solutions} title="Solutions" content="Lorem Ipsum Mogulis PISCNA JARNA"  />
            </div>
        </div>
    )
}

export default Discover
