import React, { useState } from 'react';
import Slider from "react-slick";
import Logo1 from '../../assets/images/orgaos/logo1.png'
import Logo2 from '../../assets/images/orgaos/logo2.png'
import Logo3 from '../../assets/images/orgaos/logo3.png'
import Logo4 from '../../assets/images/orgaos/logo4.png'
import Logo5 from '../../assets/images/orgaos/logo5.webp'
import Logo6 from '../../assets/images/orgaos/logo6.jpg'
import Logo7 from '../../assets/images/orgaos/logo7.jpg'
import Logo8 from '../../assets/images/orgaos/logo8.jpg'
import Logo9 from '../../assets/images/orgaos/logo9.jpg'
import Logo10 from '../../assets/images/orgaos/logo10.jpg'
import Logo11 from '../../assets/images/orgaos/logo11.jpg'
import Logo12 from '../../assets/images/orgaos/logo12.jpg'
import Logo13 from '../../assets/images/orgaos/logo13.jpg'
import Logo14 from '../../assets/images/orgaos/logo14.jpg'
import Logo15 from '../../assets/images/orgaos/logo15.jpg'
import Logo16 from '../../assets/images/orgaos/logo16.jpg'
import Logo17 from '../../assets/images/orgaos/logo17.jpg'
import Logo18 from '../../assets/images/orgaos/logo18.jpg'
import Logo19 from '../../assets/images/orgaos/logo19.jpg'
import Logo20 from '../../assets/images/orgaos/logo20.jpg'

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
                <div>
                    <img src={Logo6} className='slider-image' />
                </div>
                <div>
                    <img src={Logo7} className='slider-image' />
                </div>
                <div>
                    <img src={Logo8} className='slider-image' />
                </div>
                <div>
                    <img src={Logo9} className='slider-image' />
                </div>
              
                <div>
                    <img src={Logo11} className='slider-image' />
                </div>
                <div>
                    <img src={Logo12} className='slider-image' />
                </div>
                <div>
                    <img src={Logo13} className='slider-image' />
                </div>
                <div>
                    <img src={Logo14} className='slider-image' />
                </div>
                <div>
                    <img src={Logo15} className='slider-image' />
                </div>
                <div>
                    <img src={Logo16} className='slider-image' />
                </div>
                <div>
                    <img src={Logo17} className='slider-image' />
                </div>
                <div>
                    <img src={Logo18} className='slider-image' />
                </div>
                <div>
                    <img src={Logo19} className='slider-image' />
                </div>
                <div>
                    <img src={Logo20} className='slider-image' />
                </div>
               
              
            </Slider>
        </div>
    );
}

export default LightBox;