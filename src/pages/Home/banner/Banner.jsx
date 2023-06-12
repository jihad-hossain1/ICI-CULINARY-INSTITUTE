import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../assets/p1.jpg'
import img2 from '../../../assets/p2.jpg'
import img3 from '../../../assets/p3.jpg'
import img4 from '../../../assets/p4.jpg'
const Banner = () => {
    return (
      <div>
        <Carousel autoPlay swipeable infiniteLoop emulateTouch dynamicHeight>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Carousel>
      </div>
    );
};

export default Banner;