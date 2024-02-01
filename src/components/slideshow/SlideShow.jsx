import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './slideshow.scss';

const slides = [
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
];

const Slideshow = () => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);

  const changeTO = useRef(null);

  const runAutochangeTO = useRef(() => {
    changeTO.current = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO.current();
    }, AUTOCHANGE_TIME);
  });

  const changeSlides = (change) => {
    clearTimeout(changeTO.current);
    const length = slides.length;
    let newActiveSlide = activeSlide + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setPrevSlide(activeSlide);
    setActiveSlide(newActiveSlide);
  };

  useEffect(() => {
    runAutochangeTO.current();
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);

    return () => {
      clearTimeout(changeTO.current);
    };
  }, [runAutochangeTO]); // Include runAutochangeTO in the dependency array

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      {/* <p className="slider__top-heading">Travelers</p> */}
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              {/* <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3> */}
              {/* <h2 className="slider__slide-heading">
                {slide.city.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2> */}
              {/* <p className="slider__slide-readmore">read more</p> */}
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
    </div>
  );
};

export default Slideshow;
