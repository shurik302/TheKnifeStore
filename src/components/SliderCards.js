import React, { Component } from "react";
import Slider from "react-slick";
import SmallCard from '../components/SmallCard';
import KnifeLisa from "../product/KnifeLisa";
import Lantern from "../product/Lantern";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className="SliderCards">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <style>{cssstyle}</style>
        <div>

        </div>
        <Slider {...settings}>
          <div>
            <KnifeLisa/>
          </div>
          <div>
          <Lantern/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
          <div>
          <KnifeLisa/>
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `

.SliderCards .slick-dots li{
    margin:0 15px;
}

.SliderCards .slick-dots{
  

}
.slick-next:before, .slick-prev:before {
  content: "";
  font-size: 0;
}
.SliderCards .slick-dots li button {
  font-size: 0;
  line-height: 0;
  width: 20px;
  height: 2px;
  padding: 0;
    /* border-radius: 50%; */
    background-color: rgba(124, 121, 121, 0.336);
    text-indent: -9999px; //убрать точки
}

.SliderCards li.slick-active button {
background-color: #E8AA31;
        
}
`