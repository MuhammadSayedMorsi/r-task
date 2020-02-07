
import React, { Component } from "react"
import Slider from "react-slick"
import styled from 'styled-components'
import CardUi from './CardUi'



const WrapSlide = styled.div`
  .slick-next:before, .slick-prev:before {
    color: #54b8e9 !important;
  }
  .slick-dots {
    display: none !important;
  }

`
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      lazyLoad: true,

    };
    return (
      <WrapSlide>
        <Slider {...settings}>
          <div>
            <CardUi toggle={this.props.toggle} title="Go Family " details="Local internet (4G/LTE): 15 GB" />
          </div>
          <div>
            <CardUi toggle={this.props.toggle} title="Go Governorates" details="Zain minutes In zone: 9000 " />

          </div>
          <div>
            <CardUi toggle={this.props.toggle} title="Go Governorates" details="Zain minutes In zone: 9000 " />

          </div>
          <div>
            <CardUi toggle={this.props.toggle} title="Go Governorates" details="Zain minutes In zone: 9000 " />
          </div>
        </Slider>
      </WrapSlide>
    );
  }
}