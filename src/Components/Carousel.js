import React, { useState } from 'react';
import Slider from 'react-slick';
import "../Styles/Slider.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
  };

  return (
    <div className='carousel-container' id="depart">
      <div className='body-heading'>
        <h1>
        Our Health Care Services
      </h1>
      <p>
      "Empower your well-being with our user-friendly health app for seniors. From medication reminders to personalized fitness plans, stay on top of your health effortlessly. Embrace a vibrant and active lifestyle with our tailored features designed for you."
      </p>
      </div>
      <Slider {...settings}>
    <div className='carousel-item'>
      <div className='inner-div'>
        <motion.div
        initial={{ scale:0,opacity: 0.1 }}
        whileInView={{ scale:1,opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <img src='https://demo2.joomshaper.com/2020/fortune/images/2020/09/28/volunter02.jpg' alt='' />
        </motion.div>
        <h3>Local Events</h3>
        <p>Get premium quality healthcare supplement</p>
      </div>
    </div>
    <div className='carousel-item'>
    <div className='inner-div'>
    <motion.div
        initial={{ scale:0,opacity: 0.1 }}
        whileInView={{ scale:1,opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <img src='https://demo2.joomshaper.com/2020/fortune/images/2020/09/28/volunter03.jpg' alt='' />
        </motion.div>
        <h3>Mental Support</h3>
        <p>Get premium quality healthcare supplement</p>
      </div>
    </div>
    <div className='carousel-item'>
    <div className='inner-div'>
    <motion.div
        initial={{ scale:0,opacity: 0.1 }}
        whileInView={{ scale:1,opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <img src='https://demo2.joomshaper.com/2020/fortune/images/2020/09/28/volunter04.jpg' alt='' />
        </motion.div>
        <h3>Therapy</h3>
        <p>Get premium quality healthcare supplement</p>
      </div>
    </div>
    <div className='carousel-item'>
    <div className='inner-div'>
    <motion.div
        initial={{ scale:0,opacity: 0.1 }}
        whileInView={{ scale:1,opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <img src='https://demo2.joomshaper.com/2020/fortune/images/2020/09/28/volunter01.jpg' alt='' />
        </motion.div>
        <h3>Counselling</h3>
        <p>Get premium quality healthcare supplement</p>
      </div>
    </div>
  </Slider>
  </div>
    
  );
};

export default Carousel;
