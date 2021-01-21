import React from 'react';
import {nameSection} from '../data/config'
import banner from '../assets/header-x2.png';// Tell Webpack this JS file uses this image

function Banner(props) {
    //console.log(props)
    const {bannerAlt} = props;
    
  return (

    <section>
        <div className="container">
            <div className="Col-100">
                <figure>
                    <img src={banner} alt={bannerAlt}/>
                    <figcaption>{nameSection}</figcaption>
                </figure>
            </div>      
        </div>
    </section>

  );
}

export default Banner;

