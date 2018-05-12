import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SliderTitle extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const wapper = {display: 'inline-block', width:'50px'}
    const inner = {display: 'inline-block', width:'10px'}
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div style={wapper}>
            <h3 style={inner}>1</h3>
          </div>
          <div style={wapper}>
            <h3 style={inner}>2</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
