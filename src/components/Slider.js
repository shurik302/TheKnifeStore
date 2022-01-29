import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <style>{cssstyle}</style>
        <Slider {...settings}>
          <div>
            <h3>TEST 1 slide</h3>
          </div>
          <div>
            <h3>TEST 2 slide</h3>
          </div>
          <div>
            <h3>TEST 3 slide</h3>
          </div>
          <div>
            <h3>TEST 4 slide</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `

.slick-dots li{
    margin:80px;
}




.slick-dots li button {
    width: 60px;
    height: 20px;
    /* border-radius: 50%; */
    background-color: rgba(124, 121, 121, 0.336);
    text-indent: -9999px; //убрать точки
    margin:80px;
}

li.slick-active button {
background-color: #E8AA31;
        
}
`