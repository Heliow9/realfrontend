import React, { useState } from 'react';
import Slider from "react-slick";
import Logo1 from '../../assets/images/orgaos/logo1.png'
import Logo2 from '../../assets/images/orgaos/logo2.png'
import Logo3 from '../../assets/images/orgaos/logo3.png'
import Logo4 from '../../assets/images/orgaos/logo4.png'
import Logo5 from '../../assets/images/orgaos/logo5.webp'
import './css/lightBox.css';

function LightBox() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <div className='slider-content'>
            <h2> Nossos Clientes</h2>
            <Slider {...settings}  autoplay className='slider-main' >
                <div>
                    <img src={Logo1} className='slider-image' />
                </div>
                <div>
                    <img src={Logo2} className='slider-image' />
                </div>
                <div>
                    <img src={Logo3} className='slider-image' />
                </div>
                <div>
                    <img src={Logo4} className='slider-image' />
                </div>
                <div>
                    <img src={Logo5} className='slider-image' />
                </div>
               
              
            </Slider>
        </div>
    );
}

export default LightBox;