import React, { useState } from 'react'

import image1 from '../../assets/images/Subtract-6.png'
import image2 from '../../assets/images/Subtract.svg'
import './Window.css'


function WindowSlideShow() {
    const [currentImage, setCurrentImage] = useState(0);
    let images = [
        image1,
        image2
    ]

    const nextImage = () => {
        setCurrentImage((currentImage+1) % images.length);
    };

    setTimeout(nextImage, 2000);

    return (
    <>

    <div class="window-container">
        <img class="image" src={images[currentImage]} alt="image"/>
    </div>
    {/* <div class="window-container">
        <div class="frame">
            <img src={images[currentImage]} alt="image"/>
        </div>
    </div> */}

    </>
    )
}


export default WindowSlideShow;
