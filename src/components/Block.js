import React, { Component } from "react";
import Slider from "react-slick";
import { settingsBlock } from "./Collection";
import SmallCard from "./SmallCard";

export default class SecondItems extends Component { 
    render(){
  return (
    <div className='AllBlock'>
        <div>
            <span>{this.props.nameBlock}</span>
            <span>{this.props.textBlock}</span>
            <a href='#'>{this.props.toPageBlock}</a>
        </div>


        <Slider {...settingsBlock}>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
        </Slider>
    </div>
  )
}
}