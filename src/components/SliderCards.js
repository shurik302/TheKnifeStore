import React, { Component } from "react";
import Slider from "react-slick";
import SmallCard from '../components/SmallCard';
import KnifeLisa from "../product/KnifeLisa";
import Lantern from "../product/Lantern";
import star from '../images/star.png'

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
          <div className='AllSCard'>
        <div className='divInImg'>
            <img src={this.props.imageCard}/>
        </div>

        <div className='infoCard'>
            <span className='nameKnife'>{this.props.name}</span>
            <div className='info'>
                <span className='size'>{this.props.size}</span>
                <span className='material'>{this.props.material}</span>
            </div>
            <div className='raiting'>
                <div>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </div>
                <span className='quantityRevios'>{this.props.quantity} отзывов</span>
            </div>
            <hr/>
               <div className='priceAndAnother'>
                    <span className='price'>{this.props.price}</span>
                    <div className='favoritesAndComparison'>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-scale-balanced"></i>
                    </div>
            </div> 
            <div className='button'><button>В корзину<i class="fa-solid fa-cart-arrow-down"></i></button></div>   
        </div>
    </div>


          </div>
          <div>
          <div className='AllSCard'>
        <div className='divInImg'>
            <img src={this.props.imageCards}/>
        </div>

        <div className='infoCard'>
            <span className='nameKnife'>{this.props.names}</span>
            <div className='info'>
                <span className='size'>{this.props.sizes}</span>
                <span className='material'>{this.props.materials}</span>
            </div>
            <div className='raiting'>
                <div>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </div>
                <span className='quantityRevios'>{this.props.quantitys} отзывов</span>
            </div>
            <hr/>
               <div className='priceAndAnother'>
                    <span className='price'>{this.props.prices}</span>
                    <div className='favoritesAndComparison'>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-scale-balanced"></i>
                    </div>
            </div> 
            <div className='button'><button>В корзину<i class="fa-solid fa-cart-arrow-down"></i></button></div>   
        </div>
    </div>
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



.SliderCards{
  margin-top:0px;
  height:fit-content;
  margin-top:93px;
}

.SliderCards{
  position:relative;
}

.SliderCards .slick-dots li{
    margin:0 15px;
}

.SliderCards .slick-dots{
  /* max-width:212px; */
  width:fit-content;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  /* bottom:-100px; */
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